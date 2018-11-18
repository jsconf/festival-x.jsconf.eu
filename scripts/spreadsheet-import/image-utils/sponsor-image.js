const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const chalk = require('chalk');

function getLocalSponsorImage(imagePath, sponsor) {
  if (!imagePath) {
    return null;
  }

  const filename = sponsor.id + '.svg';
  const srcFilename = path.join(imagePath, filename);
  const destFilename = path.join('contents/images/sponsor', filename);

  if (fs.existsSync(srcFilename)) {
    console.log(` --> image found in image-path:`, filename);
    const buffer = fs.readFileSync(srcFilename);
    fs.writeFileSync(destFilename, buffer);

    return {
      filename
    };
  }

  return null;
}

async function downloadSponsorImage(sponsor) {
  const url = sponsor.logoUrl;
  console.log('downloadImage', url);
  if (!url) {
    console.error(chalk.yellow('no image specified for ' + sponsor.id));
    return {};
  }

  try {
    const res = await fetch(url);

    if (!res.headers.get('content-type').startsWith('image')) {
      console.error(chalk.red.bold(' !!! url is not an image', url));
      return {};
    }

    const buffer = await res.buffer();
    const filename = sponsor.id + '.svg';
    const fullPath = `contents/images/sponsor/${filename}`;

    console.info(' --> image downloaded ', chalk.green(fullPath));
    fs.writeFileSync(fullPath, buffer);

    return {
      filename
    };
  } catch (err) {
    console.error(chalk.red.bold(' !!! failed to download', url));
    console.error(err);
    return {};
  }
}

module.exports = {getLocalSponsorImage, downloadSponsorImage};
