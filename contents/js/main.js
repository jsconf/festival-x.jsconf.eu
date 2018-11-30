'use strict';

var ranOnce = false;
function executeEarlyish() {
  if (ranOnce) {
    return;
  }
  ranOnce = true;
  pingTypekit();
  prefetch();
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

Array.from(document.querySelectorAll('.inline-video-link')).forEach(function(link) {
  link.onclick = function(e) {
    e.preventDefault();
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/zNk28iHdoFk?autoplay=1'
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'autoplay https://www.youtube-nocookie.com/');
    iframe.className = 'section-video';
    iframe.style.padding = 0;
    link.parentElement.replaceChild(iframe, link);
  };
});

function introAnimation(intro) {
  var anim1 = bodymovin.loadAnimation({
    container: intro,
    renderer: "svg",
    loop: false,
    autoplay: true,
    animationData: window.festivalXIntroAnimationJson
  });

  anim1.addEventListener("DOMLoaded", el => {
    anim1.addEventListener("complete", el => {
      anim1.playSegments([259, 396], true);
    });
  });
}
var intro = document.getElementById("intro");
if (intro) {
  // The script contains both the lottie framework and the
  // window.festivalXIntroAnimationJson variable that contains
  // the actual animation.
  var script = document.createElement('script');
  script.src = intro.getAttribute('data-src');
  script.onload = function() {
    introAnimation(intro);
  };
  document.head.appendChild(script);
}
