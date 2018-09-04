const stringify = require('json-stringify-safe');

module.exports = x => (
  stringify(x, null, 2)
);
