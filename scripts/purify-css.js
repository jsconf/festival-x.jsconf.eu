const purifycss = require('../third_party/purify-css/purify-css');
const find = require('find');
const path = require('path');
const fs = require('fs');
const replace = require('replace-in-file');

const content = ['build/**/*.js', 'build/**/*.html'];


find.file(/main\.css$/, 'build/', files => {
  if (files.length != 1) {
    throw new Error('Expected exactly 1 css file: ' + files.join(', '));
  }
  console.log('Purifying ' + files);
  purifycss(content, files, {
    // Comment in for debugging.
    // rejected: true,
    minify: true,
    info: true,
  }, css => {
    // Change in-place
    console.log('Done purifying');
    rehash(files[0], css);
  });
});

// Rehash because now new HTML files can change what CSS we need to prune
function rehash(filename, css) {
  const hash = require('crypto').createHash('sha1');
  hash.update(css, 'utf8');
  const digest = hash.digest('hex');
  fs.writeFileSync(filename, css);
  const parts = filename.split(path.sep);
  const oldDigest = parts[2];
  const prefix = parts[0] + path.sep + parts[1];
  const oldDir = prefix + path.sep + oldDigest;
  const newDir = prefix + path.sep + digest;
  console.log('Renaming', oldDir, 'to', newDir);
  fs.renameSync(oldDir, newDir);
  // Replace the references to the digest in the HTML files.
  console.log('Replacing digest', replace.sync({
    files: 'build/**/*.html',
    from: oldDigest,
    to: digest,
  }));
}
