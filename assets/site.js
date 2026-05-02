document.addEventListener('DOMContentLoaded', () => {
  const closeSponsor = document.getElementById('close-sponsor');
  const sponsorBox = document.getElementById('sponsor-box');

  if (closeSponsor && sponsorBox) {
    closeSponsor.addEventListener('click', () => {
      sponsorBox.style.display = 'none';
    });
  }
});

function trackSponsorClick(event, link) {
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
      ad_name: link.dataset.sponsorName || 'sportsmemorabilia',
      location: link.dataset.sponsorLocation || 'sponsor_box',
      event_callback: redirect,
      event_timeout: 700
    });
  } else {
    redirect();
  }
}
