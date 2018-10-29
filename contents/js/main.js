'use strict';

var ranOnce = false;
function executeEarlyish() {
  if (ranOnce) {
    return;
  }
  ranOnce = true;
  pingTypekit();
}

window.addEventListener('load', () => {
  executeEarlyish();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});
setTimeout(executeEarlyish, 500);

function pingTypekit() {
  var url = document.getElementById('typekit')
      .getAttribute('data-tracking-url');
  if (url) {
    new Image().src = url
  }
}

function prefetch() {
  addLink('prefetch', 'https://ti.to/jsconfeu/jsconf-eu-x-2019');
  addLink('prefetch', 'https://use.typekit.com/zjo8qhc.js');
  addLink('prefetch', 'https://assets.beta.tito.io/assets/event/mcdonagh-f6f1b3c7a80e57c984a0f9d9c4b8b85028edc3ea3fc9a6526da63316cb314e3c.css');
  addLink('prefetch', 'https://js.stripe.com/v2/');
  addLink('prefetch', 'https://eepurl.com/dvQxb5');
}

function addLink(rel, href) {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
}
