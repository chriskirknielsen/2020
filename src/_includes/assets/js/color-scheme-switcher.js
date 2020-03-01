(function(){
    const schemeStorageKey = 'colorScheme';
    const schemeOptions = ['dusk','dawn'];

    const setScheme = function (scheme) {
        if (!schemeOptions.includes(scheme)) {
            scheme = schemeOptions[0];
        }

        window.localStorage.setItem(schemeStorageKey, scheme);
        document.documentElement.dataset.scheme = scheme;
    }

    const getScheme = function () {
        return window.localStorage.getItem(schemeStorageKey) || document.documentElement.dataset.scheme || schemeOptions[0];
    }

    document.addEventListener('DOMContentLoaded', function() {
        const initScheme = window.localStorage.getItem(schemeStorageKey);
        setScheme(initScheme || null);
    }, false);

    document.addEventListener('click', function(e){
        const schemeButton = e.target.closest('[data-scheme-switcher]');
        if (!schemeButton) { return; }
        const currentSchemeIndex = schemeOptions.findIndex(s => s === getScheme());
        const newSchemeIndex = 1 - currentSchemeIndex;

        setScheme(schemeOptions[newSchemeIndex]);
    }, false);
})();