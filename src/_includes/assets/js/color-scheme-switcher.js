(function(){
    const schemeStorageKey = 'colorScheme';
    const schemeOptions = ['dawn','dusk']; // 0 = off = light = dawn | 1 = on = dark = dusk
    const schemeDefault = schemeOptions[1]; // Site aesthetic is by default dark mode for maximum neon goodiness
    const schemeToggleParentSelector = '.color-scheme-toggle';
    const schemeToggleSelector = '[data-scheme-switcher]';

    const setScheme = function (scheme) {
        if (!schemeOptions.includes(scheme)) {
            scheme = schemeDefault; // If the passed scheme isn't valid, use the default
        }

        window.localStorage.setItem(schemeStorageKey, scheme); // Set/update the localStorage value
        document.documentElement.dataset.scheme = scheme; // Update the <html>'s data attribute'

        [].slice.call(document.querySelectorAll(schemeToggleSelector)).forEach(s => { // Ensure all toggles are set to the right value
            s.checked = !!schemeOptions.indexOf(scheme); // Will return 0 for the dawn (unchecked), 1 for dusk (checked), cast to boolean
            s.setAttribute('aria-checked', s.checked.toString());
        });
    }

    const getScheme = function () {
        return window.localStorage.getItem(schemeStorageKey) || document.documentElement.dataset.scheme || schemeDefault; // Return the current scheme, with fallbacks
    }

    document.addEventListener('DOMContentLoaded', function () {
        // If a toggle is hidden due to lack of JS, reveal it now
        [].slice.call(document.querySelectorAll(schemeToggleParentSelector+'.u-displayNone')).forEach(s => {
            s.classList.replace('u-displayNone', 'u-displayFlex');
        });

        const initScheme = window.localStorage.getItem(schemeStorageKey); // Retrieve the current scheme from localStorage
        setScheme(initScheme || null);
    }, false);

    document.addEventListener('change', function (e) {
        const schemeToggle = e.target.closest(schemeToggleSelector);
        if (!schemeToggle) { return; } // If the "change" event wasn't triggered by our toggle, bail
        const currentSchemeIndex = schemeOptions.findIndex(s => s === getScheme());
        const newSchemeIndex = 1 - currentSchemeIndex; // 1-0 = 1 == dusk | 1-1 = 0 == dawn

        setScheme(schemeOptions[newSchemeIndex]);
    }, false);
})();