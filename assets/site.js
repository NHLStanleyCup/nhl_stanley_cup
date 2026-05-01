document.addEventListener('DOMContentLoaded', () => {
  const closeAd = document.getElementById('close-ad');
  const adBox = document.getElementById('ad-box');

  if (closeAd && adBox) {
    closeAd.addEventListener('click', () => {
      adBox.style.display = 'none';
    });
  }
});

function trackAdClick(event, link) {
  event.preventDefault();

  const href = link.href;
  let didRedirect = false;

  const redirect = () => {
    if (didRedirect) return;
    didRedirect = true;
    window.location.href = href;
  };

  window.setTimeout(redirect, 700);

  if (typeof gtag === 'function') {
    gtag('event', 'click_ad', {
      ad_name: link.dataset.adName || 'sportsmemorabilia',
      location: link.dataset.adLocation || 'ad_box',
      event_callback: redirect,
      event_timeout: 700
    });
  } else {
    redirect();
  }
}