var utilityButtonLink = 'u-displayInlineFlex u-flex--centerBlock u-paddingInline--half u-fontBold u-c--grey-min u-bg--grey-max h_u-c--grey-min h_u-bg--grey-max u-border u-border--grey-med h_u-border--accent u-border-radius h_u-glowBox--accent h_u-textShadow--currentBg';
// Init rAF
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000 / 60); };


// Handle DeLorean animation on button toggle
document.addEventListener('DOMContentLoaded', function() {
    var aboutActionAttr = 'data-about-action';
    var aboutActions = document.querySelectorAll('['+aboutActionAttr+']');
    if (!aboutActions) { return; }
    var targetFrameRate = 60;
    var easeInOutQuad = function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t; } // @source https://gist.github.com/gre/1650294
    var preciseNum = function(x) { return Number.parseFloat(x).toPrecision(4); } // Limit to four decimal places
    var currentAnimatedValue = function (start, end, progress) { // Provide an eased value
        var eased = easeInOutQuad(progress);
        return preciseNum(start + (end - start) * eased);
    }

    // Replace each text hook with an actionable button
    for (var a = 0; a < aboutActions.length; a++) {
        var elementHtml = aboutActions[a].innerHTML;
        var elementHook = aboutActions[a].getAttribute(aboutActionAttr);
        var newElement = '<button class="button--reset '+utilityButtonLink+'" '+aboutActionAttr+'="'+elementHook+'">'+elementHtml+'</button>';
        aboutActions[a].outerHTML = newElement;
    }

    // Update the list of elements
    aboutActions = document.querySelectorAll('['+aboutActionAttr+']');

    // Process action for each element
    for (var a = 0; a < aboutActions.length; a++) {
        if (aboutActions[a].getAttribute(aboutActionAttr) === 'hooked-delorean') {
            var btn = aboutActions[a]; // Assign the toggle trigger
            
            btn.addEventListener('click', function() {
                var deLorean = document.querySelector('.about__delorean');
                deLorean.classList.toggle('about__delorean--with-hook');
            }, false);
        }
    }
});