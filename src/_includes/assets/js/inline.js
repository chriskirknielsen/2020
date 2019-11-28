if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Get user's preferences
window.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
window.prefersColorSchemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Handle skip link
document.addEventListener('click', function (e) {
  var skipLink = e.target.closest('[data-skiplink]');
  if (!skipLink) { return; }

  var skipTarget = document.querySelector(skipLink.getAttribute('href'));
  
  skipTarget.focus();
}, false);