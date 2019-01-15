const chalk = require('chalk');

// Replace URLs of the form
// contents:images/foo.jpg
// with the correct URLs.
module.exports = function(html, contents) {
  return (html || '').replace(/contents:[^">]+/g, function(url) {
    const path = url.split(':')[1];
    const parts = path.split('/');
    let image = contents;
    parts.forEach(part => {
      if (!image) {
        return;
      }
      image = image[part];
    });
    if (!image) {
      const message = 'Can\'t find image: ' + url;
      console.error(chalk.red.bold(message));
      throw new Error(message);
    }
    let transformed = image.url;
    if (image.getImageInfo) {
      transformed += '#ar=' + image.getImageInfo().aspectPercentage
    }
    return transformed;
  })
  // Wrap images that are their own paragraph with a responsive wrapper
  // to avoid reflow on load.
  .replace(/<p>(<img[^>]+#ar=(\d+)[^>]*>)<\/p>/g, function(all, img, aspectPercentage) {
    return `<p><span class="responsive-image-wrapper" style="padding-top:${aspectPercentage}%">${img}</span></p>`
  })
}
