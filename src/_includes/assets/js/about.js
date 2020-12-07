document.addEventListener('DOMContentLoaded', function() {
    var aboutActionAttr = 'data-about-action';
    var aboutActions = document.querySelectorAll('['+aboutActionAttr+']');
    if (!aboutActions) { return; }
    var targetFrameRate = 60;
    var easeInOutQuad = function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t; } // @source https://gist.github.com/gre/1650294
    var preciseNum = function(x) { return Number.parseFloat(x).toPrecision(4); }
    var currentAnimatedValue = function (start, end, progress) {
        var eased = easeInOutQuad(progress);
        return preciseNum(start + (end - start) * eased);
    }

    // Replace each hook with a usable button
    for (var a = 0; a < aboutActions.length; a++) {
        var elementHtml = aboutActions[a].innerHTML;
        var elementHook = aboutActions[a].getAttribute(aboutActionAttr);
        var newElement = '<button class="button--reset u-textDecoration--underline" '+aboutActionAttr+'="'+elementHook+'">'+elementHtml+'</button>';
        aboutActions[a].outerHTML = newElement;
    }

    // Update the list of elements
    aboutActions = document.querySelectorAll('['+aboutActionAttr+']');

    // Process action for each element
    for (var a = 0; a < aboutActions.length; a++) {
        if (aboutActions[a].getAttribute(aboutActionAttr) === 'hooked-delorean') {
            var deLorean = document.querySelector('.about__delorean');
            var initialClasses = deLorean.getAttribute('class');
            var modifiedClass = 'about__delorean--with-hook';
            var btn = aboutActions[a];
            var animationDuration = 800; // Matches `$about-delorean-transition-duration` in src/_includes/assets/scss/pages/_about.scss

            var toggleViewBox = function() {
                var w = parseFloat(deLorean.getAttribute('width'));
                var h = parseFloat(deLorean.getAttribute('height'));
                var isInitial = (deLorean.getAttribute('class').indexOf(modifiedClass) < 0);
                var xOffset = 0.16;
                var yOffset = 1.36;
                var animInterval = targetFrameRate / animationDuration;
                var animProgress = 0;
                
                // Determine new state: if it is not in its initial state, return to initial state
                var classes = initialClasses + ((!isInitial) ? '' : ' '+modifiedClass);

                var startingX = (isInitial) ? 0 : w * xOffset * -1;
                var startingY = (isInitial) ? 0 : h * yOffset * -1;
                var startingW = (isInitial) ? w : w * (1 + xOffset);
                var startingH = (isInitial) ? h : h * (1 + yOffset);

                var targetX = (!isInitial) ? 0 : w * xOffset * -1;
                var targetY = (!isInitial) ? 0 : h * yOffset * -1;
                var targetW = (!isInitial) ? w : w * (1 + xOffset);
                var targetH = (!isInitial) ? h : h * (1 + yOffset);

                var animateViewBox = function() {
                    if (animProgress > 1) { return; }

                    var currentX = currentAnimatedValue(startingX, targetX, animProgress);
                    var currentY = currentAnimatedValue(startingY, targetY, animProgress);
                    var currentW = currentAnimatedValue(startingW, targetW, animProgress);
                    var currentH = currentAnimatedValue(startingH, targetH, animProgress);
                    
                    var newViewBox = currentX + ' ' + currentY + ' ' + currentW + ' ' + currentH;
                    deLorean.setAttribute('viewBox', newViewBox);

                    animProgress += animInterval;
                    requestAnimationFrame(animateViewBox);
                }
                var setSvgClass = function() {
                    deLorean.setAttribute('class', classes);
                }

                // Set the functions to run in order
                var functions = [setSvgClass, animateViewBox];

                // If switching back to the inital state, run the functions in the reverse order
                if (!isInitial) { 
                    functions.reverse();
                }

                for (var f = 0; f < functions.length; f++) {
                    var fn = functions[f];
                    fn(); // Run callback
                }
            };

            btn.addEventListener('click', toggleViewBox, false);
        }
    }
});