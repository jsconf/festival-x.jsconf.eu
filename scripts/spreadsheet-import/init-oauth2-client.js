const crypto = require('crypto');
const http = require('http');
const {promisify} = require('util');
const {parse: parseUrl} = require('url');

const open = require('open');
const getPort = require('get-port');
const google = require('googleapis');

const {
  loadCredentials,
  hasCredentials,
  storeCredentials
} = require('./credentials');

/**
 * Initialize the oauth-client for the specified scope.
 * @param {string} scope the oauth-scope to request authorization for.
 * @param {object} options additional options
 * @return {Promise<google.auth.OAuth2>} the auth-client.
 */
async function initOAuth2Client(scope, options = {}) {
  const clientSecret = loadCredentials('client_secret.json').installed;

  const port = await getPort();
  const auth = new google.auth.OAuth2(
    clientSecret.client_id,
    clientSecret.client_secret,
    `http://localhost:${port}`
  );

  const md5 = crypto.createHash('md5');
  const scopeHash = md5.update(scope).digest('hex');
  const credentialsFile = `credentials-${scopeHash}.json`;

  if (hasCredentials(credentialsFile)) {
    auth.credentials = loadCredentials(credentialsFile);
  } else {
    auth.credentials = await getCredentials(auth, scope, options);
    storeCredentials(credentialsFile, auth.credentials);
  }

  return auth;
}

/**
 * Retrieves the auth-client credentials.
 * @param {google.auth.OAuth2} auth the OAuth2-instance.
 * @param {string} scope the scope to get authorization for.
 * @param {object} options additional options
 * @param {function?} options.beforeOpenCallback an async function to be called
 *   with the authorization-url before the url is opened.
 * @return {Promise<object>} the credentials, including access_token,
 *     refresh_token and expiry_date.
 */
async function getCredentials(auth, scope, options = {}) {
  const getToken = promisify(auth.getToken.bind(auth));

  const url = auth.generateAuthUrl({
    access_type: 'offline', // eslint-disable-line camelcase
    scope
  });

  const redirectUri = parseUrl(url, true).query.redirect_uri;
  const port = parseUrl(redirectUri).port;

  if (options.beforeOpenCallback) {
    await options.beforeOpenCallback(url);
  }

  open(url);

  return await getToken(await receiveAuthorizationCode(port));
}

/**
 * Starts an http-server to listen for the oauth2 redirectUri to be called
 * containing the authorization-code.
 * @param {number} port port-number for the http-server
 * @return {Promise<string>} the authorization-code.
 */
async function receiveAuthorizationCode(port) {
  const server = http.createServer();
  const listen = promisify(server.listen.bind(server));

  await listen(port, '127.0.0.1');

  return new Promise((resolve, reject) => {
    server.once('request', (request, response) => {
      const {code} = parseUrl(request.url, true).query;

      if (!code) {
        response.end(
            '<!doctype html>\n' +
            '<body>' +
            '  <h1>Well, that\'s embarrassing.</h1>' +
            '  <p>It won\'t be possible to spreadsheets without this ' +
            '      authorization. Maybe try again?</p>' +
            '</body>'
        );

        reject(new Error('authorization failed.'));
      } else {
        response.end(
          '<!doctype html>\n' +
            '<body>' +
            '  <h1>Perfect!</h1>' +
            '  <p>You can now close this browser window.</p>' +
            '</body>'
        );
      }
      server.close();

      resolve(parseUrl(request.url, true).query.code);
    });
  });
}

module.exports = {initOAuth2Client};
