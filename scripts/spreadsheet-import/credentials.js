const path = require('path');
const fs = require('fs');
const credentialsCache = {};

function getCredentialsPath() {
  return (
    process.env.WWWTF_CREDENTIALS_PATH ||
    path.resolve(process.env.HOME, '.wwwtf18')
  );
}

/**
 * Loads a private credentials-file.
 * Files with sensitive information are stored in the directory ~/.wwwtf18
 * in JSON-Format. An alternative directory can be specified using the
 * env-variable `WWWTF_CREDENTIALS_PATH`, but that is mostly intended
 * to be used for CI/CD-servers and similar environments.
 * @param {string} filename json-filename without any path.
 * @param {boolean} ignoreMissing true to ignore missing files and return
 *   no content.
 * @returns {*} the parsed content of the json-file
 */
function loadCredentials(filename, ignoreMissing = false) {
  if (!credentialsCache[filename]) {
    const credentialsFile = path.resolve(getCredentialsPath(), filename);

    if (ignoreMissing && !fs.existsSync(credentialsFile)) {
      return null;
    }

    try {
      credentialsCache[filename] = require(credentialsFile);
    } catch (err) {
      console.error(
        "🔐  It appears that you don't have your credentials setup yet.\n" +
          '  Please copy the file ' +
          filename +
          ' to\n    ' +
          getCredentialsPath() +
          '\n  to continue. Ask your coworkers if you never heard of that file.'
      );

      throw new Error(`failed to load ${credentialsFile}: ${err}`);
    }
  }

  return credentialsCache[filename];
}

/**
 * Checks if credentials with the given filename exist.
 * @param {string} filename file basename
 * @return {boolean} -
 */
function hasCredentials(filename) {
  const credentialsFile = path.resolve(getCredentialsPath(), filename);

  return fs.existsSync(credentialsFile);
}

/**
 * Stores credentials to a file in the credentials-store.
 * @param {string} filename the file basename.
 * @param {object} data the data to store.
 */
function storeCredentials(filename, data) {
  credentialsCache[filename] = data;

  const credentialsFile = path.resolve(getCredentialsPath(), filename);
  try {
    fs.writeFileSync(credentialsFile, JSON.stringify(data));
  } catch (err) {
    console.error(
      `🔐  Failed to write credentials to file ${credentialsFile}.`
    );

    throw new Error(`failed to write credentials: ${err}`);
  }
}

module.exports = {
  getCredentialsPath,
  loadCredentials,
  hasCredentials,
  storeCredentials
};
