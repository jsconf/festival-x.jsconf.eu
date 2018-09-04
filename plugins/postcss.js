const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const packageJson = require('../package.json');

function loadPlugin(pluginSpec) {
  if (typeof pluginSpec === 'string') {
    pluginSpec = {path: pluginSpec};
  }

  const {path:pluginPath, params} = pluginSpec;

  let plugin;
  if (pluginPath.startsWith('.') || pluginPath.startsWith('/')) {
    plugin = require(path.join(process.cwd(), pluginPath));
  } else {
    plugin = require(pluginPath);
  }

  return plugin(params);
}

module.exports = (wintersmith, callback) => {
  class PostCSSPlugin extends wintersmith.ContentPlugin {
    constructor(_filepath, _text) {
      super();
      this._filepath = _filepath;
      this._text = _text;
    }

    // Transform URLs into the form:
    // /immutable/$hashOfAllCSSFiles/filename
    getFilename() {
      const hash = require('crypto').createHash('sha1');
      const fs = require('fs');
      const path = 'contents/css/';
      const files = fs.readdirSync(path);
      files.forEach(name => {
        hash.update(fs.readFileSync(path + name), 'utf8');
      });
      // Mix code involved in CSS generation into hash since we cannot hash
      // the output.
      hash.update(fs.readFileSync('plugins/postcss.js'), 'utf8');
      Object.keys(packageJson.dependencies).filter(name => /css/.test(name))
          .forEach(name => {
            hash.update(name + '-' + packageJson.dependencies[name], 'utf8');
          });
      return 'immutable/' + hash.digest('hex') + '/' + this._filepath.relative;
    }

    getView() {
      return (env, locals, contents, templates, callback) => {
        try {
          const options = env.config.postcss || {};
          options.filename = this.getFilename();
          options.paths = [path.dirname(this._filepath.full)];
          options.plugins = options.plugins || [];

          wintersmith.logger.verbose('loading postcss-plugins');
          // Allows to refer to windersmith resource URLs as
          // url('contents:directory/filename')
          options.plugins.push({
            "path": "postcss-url",
            "params": {
              url: asset => {
                if (asset.url.startsWith('contents:')) {
                  const path = asset.url.split(':')[1];
                  const parts = path.split('/');
                  let image = contents;
                  parts.forEach(part => {
                    image = image[part];
                  });
                  return image.url;
                }
                if (!asset.url.startsWith('data:')) {
                  throw new Error('Use contents: or data: URLs: ' + asset.url);
                }
                return asset.url;
              }
            }
          });
          const plugins = options.plugins.map(loadPlugin);
          wintersmith.logger.verbose('compile css');
          postcss(plugins)
            .process(this._text, options)
            .then(result => callback(null, new Buffer(result.css)))
            .catch(error => wintersmith.logger.error(error.toString()));
        } catch (error) {
          callback(error);
        }
      };
    }
  }

  PostCSSPlugin.fromFile = (filepath, callback) => {
    fs.readFile(filepath.full, (error, buffer) => {
      if (error) return callback(error);
      callback(null, new PostCSSPlugin(filepath, buffer.toString()));
    });
  };

  const files = wintersmith.config.postcss.entrypoint || '**/*.css';
  wintersmith.registerContentPlugin('styles', files, PostCSSPlugin);

  callback();
};
