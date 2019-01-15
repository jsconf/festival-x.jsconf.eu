const objectPath = require('object-path');

module.exports = function (
  arr,
  keyPath,
  filterBy
) {
  console.log('Filter', arr.length, keyPath, filterBy);
  if (!arr || arr.length < 1) {
    return [];
  }

  return arr.slice(0).filter(item => objectPath.get(item, keyPath) === filterBy);
};
