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
  addLink('prefetch', 'https://use.typekit.com/zjo8qhc.js');
  addLink('prefetch', 'https://ti.to/jsconfeu/jsconf-eu-x-2019');
  addLink('prefetch', 'https://assets.beta.tito.io/assets/event/mcdonagh-3e98502eab0051e882bb15d690656b4b174ba0cd24e0c3d4bb66450e6e7ec6b0.css');
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
    var nextSection = link.nextElementSibling;
    link.parentElement.replaceChild(iframe, link);
    var ornamentOnTopOfVideo = nextSection.querySelector('.section-ornament--right,.section-ornament--left');
    if (ornamentOnTopOfVideo) {
      ornamentOnTopOfVideo.classList.remove('section-ornament--right');
      ornamentOnTopOfVideo.classList.remove('section-ornament--left');
    }
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
