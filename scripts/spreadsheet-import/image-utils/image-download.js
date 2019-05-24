const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const chalk = require('chalk');
const imageType = require('image-type');
const imageSize = require('image-size');
const sharp = require('sharp');
const {promisify} = require('util');
const smartcrop = require('smartcrop-sharp');

function getImageFilename(originalUrl, name, ext) {
  let filename = name.trim();
  filename = filename.replace(/[^\w]/g, '-');
  filename = filename.replace(/--/g, '-');
  filename = filename.replace(/-$/g, '');
  filename = filename.replace(/^-/g, '');
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

function sizedName(filename, width, opt_extra) {
  return filename.replace(/\.(\w+)$/, ext => '-' + width + (
    opt_extra ? '-' + opt_extra : ''
  ) + '.jpg');
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
    resize(500, info.buffer, info.filename);
    resize(1000, info.buffer, info.filename);
    square(1000, info.buffer, info.filename);
    square(500, info.buffer, info.filename);
    square(200, info.buffer, info.filename);
    let size = {};
    try {
      size = imageSize(info.buffer) || {};
    } catch (e) {
      console.error(chalk.yellow('Can\'t get image size' + e.message));
    }
    return {
      filename: info.filename,
      filename_500: sizedName(info.filename, 500),
      filename_1000: sizedName(info.filename, 1000),
      filename_square_1000: sizedName(info.filename, 1000, 'square'),
      filename_square_500: sizedName(info.filename, 500, 'square'),
      filename_square_200: sizedName(info.filename, 200, 'square'),
      width: size.width,
      height: size.height,
      originalType: info.ext.toLowerCase(),
    };
  } catch (err) {
    console.error(chalk.red.bold(' !!! failed to download', url));
    console.error(err);
    return {};
  }
}

async function resize(width, buffer, filename) {
  const path = fullPath(sizedName(filename, width));

  if (await promisify(fs.exists)(path)) {
    // console.info('Resize exists', path);
    return;
  }
  sharp(buffer)
      .resize(width)
      .jpeg()
      .toFile(path, function(err) {
        if (err) {
          console.error(chalk.red.bold(' !!! Resize failed', filename, path));
        }
        console.info('Resized', width, path);
      });
}

async function square(width, buffer, filename) {
  const path = fullPath(sizedName(filename, width, 'square'));

  if (await promisify(fs.exists)(path)) {
    // console.info('Resize exists', path);
    return;
  }
  const height = width;
  smartcrop.crop(buffer, { width: width, height: height }).then(function(result) {
    var crop = result.topCrop;
    sharp(buffer)
      .extract({ width: crop.width, height: crop.height, left: crop.x, top: crop.y })
      .resize(width, height)
      .toFile(path, function(err) {
        if (err) {
          console.error(chalk.red.bold(' !!! Resize failed', filename, path));
        }
        console.info('Square crop', width, path);
      });
  });
}

module.exports = {downloadImage};
