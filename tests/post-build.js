const fs = require('fs');

// Check that output looks good to deploy.

function fail(message) {
  console.error(message)
  process.exitCode = 1;
}

function checkDir(name, minCount) {
  var count = fs.readdirSync(name).length;
  if (count < minCount) {
    fail(`Unexpected low count of files in ${name}: ${count} < ${minCount}. Was there a problem in the spreadsheet import?`);
  }
}

// checkDir('contents/speakers/', 0);
// checkDir('build/speakers/', 0);
// checkDir('contents/sponsors/', 0);
// checkDir('contents/mcs/', 0);
checkDir('contents/team/', 3);
checkDir('contents/news/', 4);
checkDir('build/team/', 3);
checkDir('contents/images/cms/', 3);
