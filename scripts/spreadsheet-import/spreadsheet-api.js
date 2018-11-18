const google = require('googleapis');

const {initOAuth2Client} = require('./init-oauth2-client');
const {initJWTAuthClient} = require('./init-jwt-auth-client');
const {hasCredentials, getCredentialsPath} = require('./credentials');

const sheets = google.sheets('v4');

/**
 * Loads the specified sheet via the spreadsheets-API and returns it's
 * raw data.
 * @param {string} documentId  The id of the spreadsheets-document
 * @param {string} sheetId  The id of the worksheet within the document
 * @returns {Promise.<Object>}  The raw spreadsheet-data
 */
async function getSheetData(documentId, options = {}) {
  const requestOptions = {
    auth: await getAuthClient(options),
    spreadsheetId: documentId,
    includeGridData: true
  };

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.get(requestOptions, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

let clientPromise = null;

/**
 * Initializes the auth-client. The preferred method is to use personal oauth2,
 * since it allows better management of permissions. Alternatively JWT
 * (aka service accounts) is supported for automated build-environments.
 * @return {Promise} a promise that resolves when the authClient is ready
 */
async function getAuthClient(options = {}) {
  if (clientPromise) {
    return clientPromise;
  }

  const scope =
    'https://www.googleapis.com/auth/spreadsheets' +
    (options.readonly ? '.readonly' : '');

  if (hasCredentials('client_secret.json')) {
    clientPromise = initOAuth2Client(scope, options);
  } else if (hasCredentials('service-account-credentials.json')) {
    clientPromise = initJWTAuthClient(scope);
  } else {
    console.error(
      "🔐  couldn't create an auth-client. Please make sure that your " +
        `    credentials in ${getCredentialsPath()} are properly set up.`
    );

    throw new Error('failed to authorize');
  }

  return clientPromise;
}

module.exports = {
  getSheetData
};
