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
