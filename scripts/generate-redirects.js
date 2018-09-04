const redirects = require('../redirects.json');
const fs = require('fs-extra');
const path = require('path');

redirects.forEach(r => {
  if (!/^\//.test(r.from)) throw new Error('URLs must be path absolute: ' + r.from);
  if (!/^\//.test(r.to))   throw new Error('URLs must be path absolute: ' + r.to);
  let fromFilename = './contents' + r.from;
  if (/\.html$/.test(fromFilename)) {
    fromFilename = fromFilename.replace(/\.html$/, '.json');
  } else if (/\/$/.test(fromFilename)) {
    fromFilename = fromFilename + 'index.json';
  } else {
    throw new Error('From must end in / or .html: ' + r.from);
  }
  fs.ensureFileSync(fromFilename);
  fs.writeFileSync(fromFilename,
      JSON.stringify({
        "template": "pages/redirect.html.njk",
        "redirectUrl": r.to,
      }, null, '  '));
  console.info(`Redirect from\n  ${ r.from } to\n  ${ r.to } as\n  ${ fromFilename }`);
});
