const fs = require('fs-extra');
const path = require('path');

// r: {from: "/path", to: "/path"}
module.exports = function redirect(r) {
  if (!/^\//.test(r.from)) throw new Error('URLs must be path absolute: ' + r.from);
  if (!/^\//.test(r.to))   throw new Error('URLs must be path absolute: ' + r.to);
  const filename = './contents/redirects/' + r.from.replace(/[\/.]/g, '-') + '.json';
  fs.writeFileSync(filename,
      JSON.stringify({
        "template": "pages/redirect.html.njk",
        "filename": r.from,
        "redirectUrl": r.to,
      }, null, '  '));
  console.info(`Redirect from '${ r.from }' to '${ r.to }' as '${ filename }'`);
};
