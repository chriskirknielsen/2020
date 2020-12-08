// Get user's preferences
// window.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// window.prefersColorSchemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Handle skip link
document.addEventListener('click', function (e) {
  var skipLink = e.target.closest('[data-skiplink]');
  if (!skipLink) { return; }

  var skipTarget = document.querySelector(skipLink.getAttribute('href'));
  if (['A','BUTTON','INPUT','TEXTAREA'].indexOf(skipTarget.tagName) < 0) {
    skipTarget.setAttribute('tabindex', '-1');
  }
  
  skipTarget.focus();
}, false);