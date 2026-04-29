document.addEventListener('DOMContentLoaded', () => {
  const closeAd = document.getElementById('close-ad');
  const adBox = document.getElementById('ad-box');

  if (closeAd && adBox) {
    closeAd.addEventListener('click', () => {
      adBox.style.display = 'none';
    });
  }
});
