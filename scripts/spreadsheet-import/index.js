const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const wordwrap = require('wordwrap')(80);
const chalk = require('chalk');
const program = require('commander');
const mkdirp = require('mkdirp');
const slug = require('slug');
const {promisify} = require('util');
const {getSheetData} = require('./spreadsheet-api');
const {processSheet, simplifySpreadsheetData} = require('./spreadsheet-utils');
const {downloadImage} = require('./image-utils/image-download');
const {processSchedule} = require('./process-schedule');
const rimraf = promisify(require('rimraf'));
const timeout = promisify(setTimeout);
const redirect = require('./redirect');

const secret = process.env.preview_filename_component || 'secret';

// spreadsheet-format is illustrated here:
//   https://docs.google.com/spreadsheets/d/14TQHTYePS0SAaXGRNF3zYXvvk8xz25CXW-uekQy4HAs/edit

program
  .description(
    'import speaker- and talk-data from the specified spreadheet and ' +
      'update the files in contents/speakers and contents/talks'
  )
  .arguments('<spreadsheet>')
  .action(spreadsheet => {
    const rxSpreadsheetIdFromUrl = /^https:\/\/docs\.google\.com\/.*\/d\/([^/]+).*$/;

    program.spreadsheetId = spreadsheet;

    if (rxSpreadsheetIdFromUrl.test(spreadsheet)) {
      program.spreadsheetId = spreadsheet.replace(rxSpreadsheetIdFromUrl, '$1');
    }
  })
  .option(
    '-p --production',
    "run in production-mode (don't import unpublished items)"
  )
  .option('-i --image-path <imagePath>', 'alternative path to look for images')
  .option('-C --no-cleanup', "don't run cleanup before import")
  .parse(process.argv);

const contentRoot = path.resolve(__dirname, '../../contents');
const sheetParams = {
  speakers: {
    templateGlobals: {
      template: 'pages/speaker.html.njk'
    },
    contentPath: 'speakers'
  },
  'bipocit-space-speakers': {
    templateGlobals: {
      template: 'pages/speaker.html.njk'
    },
    contentPath: 'bipocit-space-speakers'
  },
  mcs: {
    templateGlobals: {
      template: 'pages/placeholder.html.njk'
    },
    contentPath: 'mcs'
  },
  artists: {
    templateGlobals: {
      template: 'pages/placeholder.html.njk'
    },
    contentPath: 'artists'
  },
  team: {
    templateGlobals: {
      template: 'pages/placeholder.html.njk'
    },
    contentPath: 'team'
  },
  articles: {
    templateGlobals: {
      template: 'pages/placeholder.html.njk'
    },
    contentPath: 'news'
  },
  sponsors: {
    templateGlobals: {
      template: 'pages/sponsor.html.njk'
    },
    contentPath: 'sponsors'
  },
  /*schedule: {
    parseSchedule: true,
  },*/
};

const wwwtfrcFile = __dirname + '/../../.wwwtfrc';
const hasRcFile = fs.existsSync(wwwtfrcFile);

let rcFileParams = {};
if (hasRcFile) {
  rcFileParams = JSON.parse(fs.readFileSync(wwwtfrcFile));
}

const params = {
  ...rcFileParams,
  imagePath: program.imagePath,
  doCleanup: program.cleanup,
  publishedOnly: program.production || process.env.NODE_ENV === 'production'
};
if (program.spreadsheetId) {
  params.spreadsheetId = program.spreadsheetId;
}

if (!params.spreadsheetId) {
  console.log(
    chalk.red.bold('A spreadsheet-id (or spreadsheet-url) is required.')
  );
  program.outputHelp();
  process.exit(1);
}

if (!hasRcFile) {
  console.log('saving settings to', chalk.green('.wwwtfrc'));
  fs.writeFileSync(
    wwwtfrcFile,
    JSON.stringify({spreadsheetId: params.spreadsheetId}, null, 2)
  );
}

main(params).catch(err => {
  console.error(chalk.red(err.stack))
  process.exit(1);
});

function ensureDirExists(dir) {
  const fullDir = `${__dirname}/../../contents/${dir}`;
  if (fs.existsSync(fullDir)) {
    return;
  }
  mkdirp(fullDir)
}

async function main(params) {
  // ---- cleanup...
  if (params.doCleanup) {
    console.log(chalk.gray('cleaning up...'));

    await Promise.all([
      rimraf(path.join(contentRoot, 'images/{speaker,sponsor}/*')),
      rimraf(path.join(contentRoot, '{speakers,sponsors,talks}/*md')),
    ]);
  }

  // ---- fetch spreadsheet-data...
  console.log(chalk.gray('loading spreadsheet data...'));
  const sheets = simplifySpreadsheetData(
    await getSheetData(params.spreadsheetId, {
      readonly: true,

      async beforeOpenCallback(url) {
        console.log(
          chalk.white(
            '\n\n🔐  You first need to grant access to your ' +
              'google-spreadsheets to this program.\n  An ' +
              'authorization-dialog will be ' +
              'opened in your browser in 5 seconds.\n\n'
          ),
          chalk.blue.underline(url)
        );

        return await timeout(5000);
      }
    })
  );

  // ---- parse and generate markdown-files
  console.log(chalk.gray('awesome, that worked.'));
  const previewFiles = [];
  const processedRecords = [];
  Object.keys(sheets).map(async function(sheetId) {
    if (!sheetId) {
      // Published pages create unnamed sheets.
      return;
    }
    if (!sheetParams[sheetId]) {
      console.log(chalk.red('Missing metadata for'), sheetId);
      return;
    }
    const {templateGlobals, dataFieldName, contentPath, parseSchedule} = sheetParams[sheetId];
    ensureDirExists(contentPath);
    if (parseSchedule) {
      processSchedule(sheets[sheetId]);
      return;
    }
    const records = processSheet(sheets[sheetId]);

    console.log(chalk.white('processing sheet %s'), chalk.yellow(sheetId));
    processedRecords.push.apply(processedRecords, records

      // render md-files
      .map(async function(record) {
        let {content, ...data} = record;

        if (!content) {
          content = ' ';
        }

        if (!data.name) {
          data.name = data.firstname;
          if (data.lastname) {
            data.name += ' ' + data.lastname;
          }
        }

        let imageExtension = null;
        if (sheetId === 'sponsors') {
          imageExtension = 'svg';
        }

        const extracted = extractFrontmatter(data, content);
        let frontmatterFromContent = {};
        if (extracted) {
          content = extracted.content;
          frontmatterFromContent = extracted.frontmatter;
        }
        else if (sheetId === 'articles') {
          throw new Error('Missing frontmatter in article ' + data.name);
        }

        const imageUrl = data.potraitImageUrl || data.logoUrl || data.image || frontmatterFromContent.image;
        delete frontmatterFromContent.image;
        data.image = await downloadImage(imageUrl, data.name, imageExtension);

        let title = data.name;
        if (data.talkTitle) {
          title += `: ${data.talkTitle}`;
        }
        if (!title) {
          throw new Error(`Missing name/title in ${sheetId}: ${JSON.stringify(record)}`);
        }

        const imagesInContent = [];
        content = await downloadContentUrls(content, imagesInContent);
        if (!data.image.filename && imagesInContent.length) {
          data.image = imagesInContent[0];
        }

        const metadata = {
          ...templateGlobals,
          title,
          ...frontmatterFromContent,
          data,
        };

        if (data.firstname) {
          prepPersonMetadata(metadata);
        }

        let cpath = contentPath;
        if (metadata.standalone) {
          cpath = 'cms';
          ensureDirExists(cpath);
        }

        let filename = getFilename(title);
        if (!data.published && params.publishedOnly) {
          metadata.filename = ':file.html';
          cpath = 'preview';
          ensureDirExists(cpath);
          const hash = require('crypto').createHash('sha1')
              .update(filename).digest('hex');
          filename = `${hash}-${secret}`;
          previewFiles.push({
            url: `/${cpath}/${filename}.html`,
            name: `${sheetId}: ${data.name}`,
          });
        }
        if (metadata.filename) {
          // Make all URLs explicit instead of interpolating filename
          metadata.filename = metadata.filename.replace(/:file/, filename);
          if (!/^\//.test(metadata.filename)) {
            metadata.filename = `/${cpath}/${metadata.filename}`;
          }

          metadata.filename = maybeUpdateDoubleDash(metadata.filename);
        }

        const fullpath = path.join(contentRoot, cpath, `${filename}.md`);
        console.log(
          ' --> write markdown %s',
          chalk.green(path.relative(process.cwd(), fullpath.replace(secret, '...')))
        );

        const frontmatter = yaml.safeDump(metadata);
        const markdownContent =
          '----\n\n' +
          '# THIS FILE WAS GENERATED AUTOMATICALLY.\n' +
          '# CHANGES MADE HERE WILL BE OVERWRITTEN.\n\n' +
          frontmatter.trim() +
          '\n\n----\n\n' +
          wordwrap(content);

        fs.writeFile(fullpath, markdownContent, () => {/*fire and forget*/});
      }));
  });
  await Promise.all(processedRecords);
  fs.writeFileSync(`${contentRoot}/preview/${secret}.md`,
      '----\n\ntemplate: pages/simple.html.njk\n' +
      'filename: :file.html\n\n----\n\n' +
      previewFiles.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }).map(file => {
        return `<a href="${file.url}">${file.name}</a>`;
      }).join('<br>\n'));
}

function extractFrontmatter(data, content) {
  let frontmatterFromContent;
  if (!/^----*\n/.test(content.trim())) {
    return;
  }
  let sepCount = 0;
  let yamlString = '';
  let rest = ''
  content.split('\n').forEach(line => {
    if (/^----*$/.test(line)) {
      sepCount++;
      return;
    }
    if (sepCount >= 2) {
      rest += line + '\n';
      return;
    }
    yamlString += line + '\n';
  });
  if (sepCount != 2) {
    console.log(chalk.red('Incomplete frontmatter in'), data.name);
    return;
  }
  try {
    return {
      frontmatter: yaml.safeLoad(yamlString),
      content: rest,
    };
  } catch (e) {
    console.log(chalk.red('Invalid frontmatter in'), data.name, e.message);
    return;
  }
}

function getFilename(name, useNewImplentation) {
  if (useNewImplentation) {
    return slug(name, { lower: true });
  }

  let filename = name.trim();
  filename = filename.replace(/[^\w]/g, '-');
  filename = filename.replace(/--/g, '-');
  filename = filename.replace(/-$/g, '');
  filename = filename.replace(/^-/g, '');
  return filename.toLowerCase();
}

// Backwards compatible change of our URL structure avoiding
// double-dashes, leading and trailing dashes.
// If this changes a URL, then a redirect from the previous
// to the new state is generated.
function maybeUpdateDoubleDash(path) {
  const nicer = path.replace(/-+/g, '-').replace(/\/-/g, '/').replace(/-\//g, '/');
  if (nicer == path) {
    return path;
  }
  redirect({
    from: path,
    to: nicer,
  });
  return nicer;
}

// Turn the text pattern DOWNLOAD(https://some.com/url)
// into a contents:images/cms/filename.jpg URL that is later
// resolved when rendering to the actual URL.
async function downloadContentUrls(text, imagesOut) {
  const imagePromises = [];
  const re = /DOWNLOAD\(([^\)]+)\)/g;
  text.replace(re, (match, url) => {
    imagePromises.push(downloadImage(url, 'image'));
  });
  const images = await Promise.all(imagePromises);
  let i = 0;
  text = text.replace(re, () => {
    const image = images[i++];
    let filename = image.filename;
    if (image.originalType == 'jpg') {
      filename = image.filename_1000;
    }
    return 'contents:images/cms/' + filename;
  });
  imagesOut.push.apply(imagesOut, images);
  return text;
}

function prepPersonMetadata(metadata) {
  const data = metadata.data;
  const makeName = newSlug => `/${getFilename(data.name, newSlug)}/${getFilename(data.talkTitle || 'talk', newSlug)}.html`
  const legacyName = makeName(false);
  const filename = metadata.filename = makeName(true);
  if (filename != legacyName) {
    redirect({
      from: legacyName,
      to: filename,
    });
  }

  data.web = {
    twitter: {},
    github: {},
    homepage: {},
  };
  if (data.twitterHandle) {
    let twitter = data.twitterHandle
        .replace(/@/, '')
        .replace(/https?:\/\/twitter.com\//i, '')
        .trim();
    data.web.twitter.handle = twitter;
    data.web.twitter.url = 'https://twitter.com/' + twitter;
  }
  if (data.githubHandle) {
    let github = data.githubHandle
        .replace(/@/, '')
        .replace(/https?:\/\/github.com\//i, '')
        .trim();
    data.web.github.handle = github;
    data.web.github.url = 'https://github.com/' + github;
  }
  if (data.homepage) {
    let home = data.homepage
        .replace(/https?:\/\//i, '')
        .trim();
    data.web.homepage.handle = home;
    data.web.homepage.url = data.homepage;
  }

}
