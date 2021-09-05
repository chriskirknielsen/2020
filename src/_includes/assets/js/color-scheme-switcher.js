(function(){
    const schemeStorageKey = 'colorScheme';
    const schemeOptions = ['dawn','dusk']; // 0 = off = light = dawn | 1 = on = dark = dusk
    const schemeDefault = schemeOptions[1]; // Site aesthetic is by default dark mode for maximum neon goodiness
    const schemeToggleSelector = '[data-scheme-switcher]';
    const metaThemeColor = document.documentElement.querySelector('meta[name="theme-color"]'); // Theme color <meta> tag

    const setScheme = function (scheme) {
        if (!schemeOptions.includes(scheme)) {
            scheme = schemeDefault; // If the passed scheme isn't valid, use the default
        }

        window.localStorage.setItem(schemeStorageKey, scheme); // Set/update the localStorage value
        document.documentElement.dataset.scheme = scheme; // Update the <html>'s data attribute
        
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', metaThemeColor.getAttribute('data-'+scheme)); // Update the "theme-color" <meta>'s "content" attribute
        }

        [].slice.call(document.querySelectorAll(schemeToggleSelector)).forEach(s => { // Ensure all toggles are set to the right value
            s.checked = !!schemeOptions.indexOf(scheme); // Will return 0 for the dawn (unchecked), 1 for dusk (checked), cast to boolean
            s.setAttribute('aria-checked', s.checked.toString());
        });
    }

    const getScheme = function () {
        return window.localStorage.getItem(schemeStorageKey) || document.documentElement.dataset.scheme || schemeDefault; // Return the current scheme, with fallbacks
    }

    const flipScheme = function() {
        const currentSchemeIndex = schemeOptions.findIndex(s => s === getScheme());
        const newSchemeIndex = 1 - currentSchemeIndex; // 1-0 = 1 == dusk | 1-1 = 0 == dawn

        setScheme(schemeOptions[newSchemeIndex]);
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Retrieve and apply the current scheme from localStorage
        const initScheme = window.localStorage.getItem(schemeStorageKey) || null;
        setScheme(initScheme);
    }, false);

    document.addEventListener('change', function (e) {
        const schemeToggle = e.target.closest(schemeToggleSelector);
        if (!schemeToggle) { return; } // If the "change" event wasn't triggered by our toggle, bail
        flipScheme();
    }, false);

    document.addEventListener('keypress', function(e) {
        if (e.altKey || e.metaKey || e.ctrlKey || e.shiftKey) { return; }
        if (e.key.toLowerCase() !== 'm') { return; }
        flipScheme();
    });
})();