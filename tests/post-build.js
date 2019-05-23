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

function checkHtml(filename, re, minCount) {
  var contents = fs.readFileSync(filename, 'utf-8');
  var matches = contents.match(re);
  var count = 0;
  if (matches) {
    count = matches.length;
  }
  if (count < minCount) {
    fail(`Unexpected low count of occurences of ${re} in ${filename}: ${count} < ${minCount}. Was there a problem in the spreadsheet import?`);
  } else {
    console.info(`PASS: ${filename}: ${re} ${count} >= ${minCount}`);
  }
}

checkDir('contents/speakers/', 15);
checkDir('build/una-kravets/', 1);
checkDir('contents/redirects/', 5);
// checkDir('contents/mcs/', 0);
checkDir('contents/team/', 3);
checkDir('contents/mcs/', 4);
checkDir('contents/artists/', 4);
checkDir('contents/news/', 4);
checkDir('build/news/', 4);
checkDir('contents/images/cms/', 3);
checkDir('contents/sponsors/', 3);
checkDir('build/sponsors/', 3);
// Standlone content.
checkDir('build/about/', 1);
checkDir('build/why/', 1);
checkDir('build/x/', 1);
checkDir('build/schedule/', 2); // overview and timetable

checkHtml('build/schedule/timetable.html', /time-row[^-]/g, 45);
checkHtml('build/sponsors/index.html', /class="sponsor/g, 30);
checkHtml('build/artists/index.html', /speaker-picture/g, 14);
checkHtml('build/speakers/index.html', /speaker-picture/g, 75);
checkHtml('build/about/index.html', /speaker-picture/g, 30);
