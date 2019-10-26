document.addEventListener('click', function(e){
    const schemeButton = e.target.closest('[data-scheme-switcher]');
    const schemeOptions = ['dusk','dawn'];
    if (!schemeButton) { return; }
    const currentSchemeIndex = schemeOptions.findIndex(s => s === document.documentElement.dataset.scheme);
    const newSchemeIndex = 1 - currentSchemeIndex;
    document.documentElement.dataset.scheme = schemeOptions[newSchemeIndex];
}, false);