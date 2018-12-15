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
  addLink('prefetch', 'https://assets.beta.tito.io/assets/event_homepage-b7a2789ecc2ff9232a349177f083d8af30902d2c0663ccda688c1168a7351dbc.js');
  addLink('prefetch', 'https://assets.beta.tito.io/assets/tito-94b42e9b7efe734702e80e6139aa86a3e604f32872a83c5f6ca9e564e254aafd.js');
  addLink('prefetch', 'https://d2z6c3c3r6k4bx.cloudfront.net/uploads/event/logo/1062210/e2c441a28eaa527eabdb848377d2bf56.png');
  addLink('prefetch', 'https://js.stripe.com/v2/');
  if (/localhost/.test(location.href)) {
    return;
  }
  addLink('prefetch', '/');
  document.querySelectorAll('.link--nav').forEach(function(a) {
    addLink('prefetch', a.href);
  });
  addLink('preconnect', 'https://jsconf.us11.list-manage.com');
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
    document.getElementById('csf-homepage').classList.remove('section-ornament--right');
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
    intro.removeChild(intro.querySelector('svg'));
    introAnimation(intro);
  };
  document.head.appendChild(script);
}
