const {promisify} = require('util');
const google = require('googleapis');
const {loadCredentials} = require('./credentials');

/**
 * Initializes the auth-client.
 * @param {string} scope the oauth-scope.
 * @return {Promise} a promise that resolves when the authClient is ready
 */
async function initJWTAuthClient(scope) {
  /* eslint-disable camelcase */
  const {client_email, private_key} = loadCredentials(
    'service-account-credentials.json'
  );
  const client = new google.auth.JWT(
    client_email,
    null,
    private_key,
    scope,
    null
  );
  /* eslint-enable */

  await promisify(client.authorize.bind(client))();

  return client;
}

module.exports = {initJWTAuthClient};
