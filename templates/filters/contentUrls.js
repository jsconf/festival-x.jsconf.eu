
// Replace URLs of the form
// contents:images/foo.jpg
// with the correct URLs.
module.exports = function(html, contents) {
  return (html || '').replace(/contents:[^">]+/g, function(url) {
    const path = url.split(':')[1];
    const parts = path.split('/');
    let image = contents;
    parts.forEach(part => {
      image = image[part];
    });
    return image.url;
  });
}
