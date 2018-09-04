# 2019.JSConf.eu

This repository hosts the sourcecode and the website (in branch [`gh-pages`][gh-pages]) of the JSConf EU site 2019.

## Develop

    npm install
    npm start

Should bring up the server on port 8080

## Where to find …

 - stylesheets: in `contents/css`. `contents/css/main.css` is the file that is pulled through postcss to become `/css/main.css` on the hosted site.

 - javascript: in `contents/js`

 - assets: `contents/fonts`, `contents/icons`, `contents/images`, … and so on.

 - postcss-configuration
   - `config.json`: main configuration (which file, which plugins)
   - `plugins/postcss.js`: the integration-code that actually runs postcss

 - templates are in `templates`
   - `templates/layouts` is for master-templates. They typically define blocks that can be selectively overridden in inheriting templates. Layouts will in general inherit from one another as well.
   - `templates/pages` is for page-specific templates. So if there are special markup-needs for a given site, this is the place it belongs.
   - `templates/partials` is for smaller template-snippets that need to be reused or are just confusing to look at in a bigger file.
   - `templates/_macros.njk` contains all sorts of macro-definitions (called "mixins" in other template-engines, mostly used for often reused chunks of template-logic)
   - `templates/filters`: you can drop js functions here that will then be available (after enabling them in `config.json`) in templates as filters.

     For example `{{ someValue | myCoolFilterFunction }}` will call the exported function from `templates/filters/myCoolFilterFunction.js` with `someValue` as parameter. The value returned from that function is rendered.

 - the content: content (like real content now) is also found in the `contents` directory. For now, we support json and markdown files (with frontmatter) here. The [wintersmith-documentation][] has a good (and short) introduction to that.

   Even shorter: every (json or markdown) file is rendered as html-file by the same name (so `contents/blub.json` is rendered as `blub.html`). It has to contain a `template`-parameter (either in the json or in the [frontmatter][] of the markdown-file) that points to the template that will render the page.

## About the Templates

We're using the [nunjucks template-engine][]. It's great. It's a clone of the very popular jinja2 engine for python (only slightly different to jekylls liquid templates).

Have a look at the [templating docs][] if you don't know it yet. Also contains hints about editor-support you might want to install.

### Data in Templates

Data from the `locals`-section from `config.json` as well as node-modules loaded via `require` in `config.json` is available in the templates as global variables, so a variable `locals.someValue === "something"` is accessible via `{{ someValue }}` in all templates.

The current page is always accessible via `page`, the values from the frontmatter via `page.metadata`. The public URL for the current page is in `page.url`.

It is always possible to access any content from everywhere in the content-tree (that is what the `contents`-directory is called internally).
That is what the variable `contents` is for. This represents the contents-directory as a object-hierarchy. So, to get the URL of the file `contents/images/some-image.png`, you can use `{{ contents.images['some-image.png'].url }}`.

## Debugging Wintersmith

There might be better ways, but this works for me:

First, start application with `--inspect` flag:

    node --inspect node_modules/.bin/wintersmith --verbose preview`

Next, go to [chrome://inspect](chrome://inspect) in chrome and "Open dedicated DevTools for Node". This should connect a new devtools-instance to the wintersmith-server running in node.

Depending on what you want to debug, find the corresponding file, set a breakpoint or enable break on caught exceptions or whatever. To have a look at the content-tree you can do this:

In the sources-panel, search for and open (Cmd+O) the file `plugins/nunjucks.js`, find the `NunjucksTemplate.render`-function towards the bottom of the file and put a breakpoint there. Reload the page.


[gh-pages]: https://github.com/jsconf/2018.jsconf.eu/tree/gh-pages
[nunjucks template-engine]: https://mozilla.github.io/nunjucks/
[templating docs]: https://mozilla.github.io/nunjucks/templating.html
[wintersmith-documentation]: https://github.com/jnordberg/wintersmith#quick-start
[frontmatter]: https://jekyllrb.com/docs/frontmatter/
