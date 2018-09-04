const fetch = require('node-fetch');
const fs = require('fs');

async function work() {
  const response = await fetch('https://use.typekit.net/gug4wmv.css');
  let text = await response.text();
  if (!response.ok) {
    throw new Error('Request failed: ' + text);
  }
  let match;
  const preloadMatches = [];
  // Super hack alert. Extracting the first URL (which modern browsers pick)
  // from TypeScript's CSS.
  text.replace(/src:url\("([^"]+)"/g, (ignore, url) => {
    preloadMatches.push(url);
  });
  let trackingUrl = '';
  // Remove tracking URL from CSS
  text = text.replace(/@import url\("([^"]+)"\);/g, (ignore, url) => {
    trackingUrl = url;
    return '';
  });
  // Make all fonts font-display fallback.
  text = text.replace(/@font-face {/g, (fontFace) => {
    return fontFace + '\nfont-display:fallback;';
  });
  const locals = {
    "typekitPreload": preloadMatches,
    "typekitCss": text,
    "typekitTracking": trackingUrl,
  };
  console.log(locals);
  fs.writeFileSync('./locals-generated.json', JSON.stringify(locals, null, '  '));
}

work();
