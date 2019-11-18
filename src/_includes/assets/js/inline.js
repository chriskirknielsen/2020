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