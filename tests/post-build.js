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
  } else {
    console.info(`PASS: ${name}: ${count} >= ${minCount}`);
  }
}

// checkDir('contents/speakers/', 0);
// checkDir('build/speakers/', 0);
// checkDir('contents/mcs/', 0);
checkDir('contents/team/', 3);
checkDir('build/team/', 3);
checkDir('contents/news/', 4);
checkDir('build/news/', 4);
checkDir('contents/images/cms/', 3);
checkDir('contents/sponsors/', 3);
checkDir('build/sponsors/', 3);
// Standlone content.
checkDir('build/about/', 1);
checkDir('build/why/', 1);
checkDir('build/x/', 1);
