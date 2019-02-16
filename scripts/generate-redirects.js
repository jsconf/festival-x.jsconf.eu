const redirects = require('../redirects.json');
const redirect = require('./spreadsheet-import/redirect');

redirects.forEach(redirect);
