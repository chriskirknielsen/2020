(function(){
    const schemeStorageKey = 'colorScheme';
    const schemeOptions = ['dawn','dusk']; // 0 = off = light = dawn | 1 = on = dark = dusk
    const schemeDefault = schemeOptions[1]; // Site aesthetic is by default dark mode for maximum neon goodiness
    const schemeToggleSelector = '[data-scheme-switcher]';

    const setScheme = function (scheme) {
        if (!schemeOptions.includes(scheme)) {
            scheme = schemeDefault; // If the passed scheme isn't valid, use the default
        }

        window.localStorage.setItem(schemeStorageKey, scheme); // Set/update the localStorage value
        document.documentElement.dataset.scheme = scheme; // Update the <html>'s data attribute'

        Array.from(document.querySelectorAll(schemeToggleSelector)).forEach(s => { // Ensure all toggles are set to the right value
            s.checked = !!schemeOptions.indexOf(scheme); // Will return 0 for the dawn (unchecked), 1 for dusk (checked), cast to boolean
        });
    }

    const getScheme = function () {
        return window.localStorage.getItem(schemeStorageKey) || document.documentElement.dataset.scheme || schemeDefault; // Return the current scheme, with fallbacks
    }

    document.addEventListener('DOMContentLoaded', function () {
        const initScheme = window.localStorage.getItem(schemeStorageKey); // Retrieve the current scheme from localStorage
        setScheme(initScheme || null);
    }, false);

    document.addEventListener('change', function (e) {
        const schemeToggle = e.target.closest(schemeToggleSelector);
        if (!schemeToggle) { return; } // If the "change" was trigger by our toggle, bail
        const currentSchemeIndex = schemeOptions.findIndex(s => s === getScheme());
        const newSchemeIndex = 1 - currentSchemeIndex; // 1-0 = 1 == dusk | 1-1 = 0 == dawn

        setScheme(schemeOptions[newSchemeIndex]);
    }, false);
})();