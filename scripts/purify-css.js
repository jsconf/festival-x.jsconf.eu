const purifycss = require('../third_party/purify-css/purify-css');
const find = require('find');
const path = require('path');
const fs = require('fs');
const replace = require('replace-in-file');
const {promisify} = require('util');

preMinifyCss()

function preMinifyCss() {
  find.file(/main\.css$/, 'build/', cssFiles => {
    if (cssFiles.length != 1) {
      throw new Error('Expected exactly 1 css file: ' + cssFiles.join(', '));
    }
    console.log('Input CSS', cssFiles[0]);

    // First minify everything together. This makes the per file minify
    // drastically faster, because we throw away 90% of the CSS here.
    purifycss(['build/js/main.js', 'build/**/*.html'], cssFiles, {
      whitelist: ['*md-content*'],
      // info: true,
    }, async function(css) {
      console.info('Preprocessed CSS');
      processHtml(css);
    });
  });
}

function processHtml(baseCss) {
  find.file(/\.html$/, 'build/', htmls => {
    htmls.forEach(async function(htmlFilename) {
      console.log('Processing', htmlFilename);
      let html = await promisify(fs.readFile)(htmlFilename, 'utf8');
      if (/noindex/.test(html)) {
        console.info('Skipping placeholder', htmlFilename);
        return;
      }
      purifycss(['build/js/main.js', htmlFilename], baseCss, {
        // Comment in for debugging.
        // rejected: true,
        minify: true,
        // info: true,
        whitelist: ['*md-content*'],
      }, async function(css) {
        console.log('Done purifying', htmlFilename);
        let html = await promisify(fs.readFile)(htmlFilename, 'utf8');
        let found = false;
        html = html.replace(/<link href=\/immutable\/\w+\/css\/main.css rel=stylesheet>/, match => {
          found = true;
          return '<style>' + css + '</style>';
        });
        if (!found) {
          console.error('Cant find link element in ', html);
          throw new Error('Fail');
        }
        await promisify(fs.writeFile)(htmlFilename, html);
      });
    });
  });
}
