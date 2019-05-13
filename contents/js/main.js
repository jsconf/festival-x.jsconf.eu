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
  if (/localhost/.test(location.href)) {
    return;
  }
  addLink('prefetch', '/');
  document.querySelectorAll('.link--nav,.topbar-cta').forEach(function(a) {
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
    animationData: window.festivalXIntroAnimationJson
  });

  anim1.addEventListener("DOMLoaded", el => {
    anim1.addEventListener("complete", el => {
      anim1.playSegments([259, 396], true);
    });
  });

  var timeout;
  function playIfDesired() {
    if (matchMedia('(prefers-reduced-motion)').matches) {
      anim1.goToAndStop(259, true);
      return;
    }
    anim1.play();
    // Pause after 3 minutes to save battery.
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      anim1.pause();
    }, 1000 * 60 * 3);
  }

  function playIfVisible() {
    if (document.hidden) {
      anim1.pause();
    } else {
      playIfDesired();
    }
  }

  document.addEventListener("visibilitychange", playIfVisible);
  window.addEventListener("focus", playIfVisible);
  playIfDesired();
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

document.documentElement.addEventListener('click', function(e) {
  if (!/^H\d$/.test(e.target.tagName)) {
    return;
  }
  var id = e.target.id;
  if (!id) {
    return;
  }
  location.hash = '#' + id;
});