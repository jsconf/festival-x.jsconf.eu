const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const chalk = require('chalk');
const imageType = require('image-type');
const imageSize = require('image-size');
const {promisify} = require('util');

function getImageFilename(originalUrl, name, ext) {
  let filename = name || 'image';
  filename = filename.replace(/[^\w]/g, '-');
  filename = filename.replace(/--/g, '-');
  // Filename changes if underlying URL changes.
  const hash = require('crypto').createHash('sha1')
      .update(originalUrl).digest('hex');
  filename += '-' + hash.substr(0, 8);
  return (filename + '.' + ext).toLowerCase();
}

async function existingImage(url, name, opt_extension) {
  const extensions = ['jpg', 'png', 'gif', 'jpeg'];
  if (opt_extension) {
    extensions.unshift(opt_extension);
  }
  for (let ext of extensions) {
    let filename = getImageFilename(url, name, ext);
    if (await promisify(fs.exists)(fullPath(filename))) {
      console.info(' --> existing image', chalk.green(fullPath(filename)));
      return {
        ext,
        filename,
        buffer: await promisify(fs.readFile)(fullPath(filename)),
      };
    }
  }
  return null;
}

function fullPath(filename) {
  return 'contents/images/cms/' + filename;
}

// Downloads an image from a url unless a local copy is available.
// name should be any string for use in the filename
// Pass in opt_extension if you know the type of the image.
async function downloadImage(url, name, opt_extension) {
  console.log('Downloading', url);
  if (!url) {
    console.error(chalk.yellow('Skipping empty image url', name));
    return {};
  }

  try {
    let info = await existingImage(url, name, opt_extension);
    if (!info) {
      info = {};
      const res = await fetch(url);
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.startsWith('image')) {
        console.error(chalk.red.bold(' !!! url is not an image', name, url));
        return {};
      }

      const buffer = await res.buffer();
      info.buffer = buffer;

      const type = opt_extension == 'svg' ? {ext: 'svg'} : imageType(buffer);
      if (!type) {
        console.error(chalk.red.bold(' !!! no type-information for image', name, url));
        return {};
      }
      info.ext = type.ext;
      const filename = getImageFilename(url, name, info.ext);
      info.filename = filename;

      const path = fullPath(filename);
      console.info(' --> image downloaded ', chalk.green(path));
      fs.writeFile(path, buffer, () => {/*fire and forget*/});
    }
    let size = {};
    try {
      size = imageSize(info.buffer) || {};
    } catch (e) {
      console.error(chalk.yellow('Can\'t get image size' + e.message));
    }
    return {
      filename: info.filename,
      width: size.width,
      height: size.height
    };
  } catch (err) {
    console.error(chalk.red.bold(' !!! failed to download', url));
    console.error(err);
    return {};
  }
}

module.exports = {downloadImage};
