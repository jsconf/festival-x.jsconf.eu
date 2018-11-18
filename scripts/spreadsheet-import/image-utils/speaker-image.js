const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const chalk = require('chalk');
const imageType = require('image-type');
const imageSize = require('image-size');

function getImageFilename(speaker, ext) {
  let filename = speaker.firstname + '-' + speaker.lastname;
  filename = filename.replace(/[^\w]/g, '-');
  filename = filename.replace(/--/g, '-').toLowerCase();

  return filename + '.' + ext;
}

function getLocalSpeakerImage(imagePath, speaker) {
  if (!imagePath) {
    return null;
  }

  const filename = getImageFilename(speaker, 'jpg');
  const srcFilename = path.join(imagePath, filename);
  const destFilename = path.join('contents/images/speaker', filename);

  if (fs.existsSync(srcFilename)) {
    console.log(` --> image found in image-path:`, filename);
    const buffer = fs.readFileSync(srcFilename);
    const size = imageSize(buffer);
    fs.writeFileSync(destFilename, buffer);

    return {
      filename,
      width: size.width,
      height: size.height
    };
  }

  return null;
}

async function downloadSpeakerImage(speaker) {
  const url = speaker.potraitImageUrl;
  console.log('downloadImage', url);
  if (!url) {
    console.error(chalk.yellow('no image specified for ' + speaker.id));
    return {};
  }

  try {
    const res = await fetch(url);

    if (!res.headers.get('content-type').startsWith('image')) {
      console.error(chalk.red.bold(' !!! url is not an image', url));
      return {};
    }

    const buffer = await res.buffer();

    const info = imageType(buffer);
    if (!info) {
      console.error(chalk.red.bold(' !!! no type-imformation for image', url));
      return {};
    }

    const size = imageSize(buffer);
    const filename = getImageFilename(speaker, info.ext);
    const fullPath = 'contents/images/speaker/' + filename;

    console.info(' --> image downloaded ', chalk.green(fullPath));
    fs.writeFileSync(fullPath, buffer);

    return {
      filename,
      width: size.width,
      height: size.height
    };
  } catch (err) {
    console.error(chalk.red.bold(' !!! failed to download', url));
    console.error(err);
    return {};
  }
}

module.exports = {getLocalSpeakerImage, downloadSpeakerImage};
