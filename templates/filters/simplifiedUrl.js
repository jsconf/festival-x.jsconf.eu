module.exports = function(url) {
  if (!url) {
    return '';
  }

  return url.replace(/https?:\/{2}(www\.)?/g, '').replace(/\/$/g, '');
}
