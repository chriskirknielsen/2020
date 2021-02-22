// Init rAF
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000 / 60); };

// Handle Animated t-shirt illustration on hover/tap
document.addEventListener('DOMContentLoaded', function() {
    var tShirt = document.querySelector('.about__shirt');
    if (!tShirt) { return; }

    function animateTShirt() {
        if (tShirt.classList.contains('animating')) { return; }

        tShirt.classList.add('animating');

        tShirt.addEventListener('animationend', function () {
            tShirt.classList.remove('animating');
        });
    }

    tShirt.addEventListener('mouseenter', animateTShirt);
    tShirt.addEventListener('touchstart', animateTShirt);
});

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
        var newElement = '<button class="button--reset link" '+aboutActionAttr+'="'+elementHook+'">'+elementHtml+'</button>';
        aboutActions[a].outerHTML = newElement;
    }

    // Update the list of elements
    aboutActions = document.querySelectorAll('['+aboutActionAttr+']');

    // Process action for each element
    for (var a = 0; a < aboutActions.length; a++) {
        if (aboutActions[a].getAttribute(aboutActionAttr) === 'hooked-delorean') {
            var deLorean = document.querySelector('.about__delorean');
            var w = parseFloat(deLorean.getAttribute('width')); // Get the initial width
            var h = parseFloat(deLorean.getAttribute('height')); // Get the initial height
            var initialClasses = deLorean.getAttribute('class'); // We can easily reference the classes later on with this
            var modifiedClass = 'about__delorean--with-hook'; // This is a class to add when the state is toggled
            var viewboxExpansion = deLorean.getAttribute('data-viewbox-expansion').trim(); // This contains the data about the new size of the SVG when toggled
            var viewboxExpansionWH = viewboxExpansion.split(' '); // Split that data into the width and height values
            var viewboxDirectionX = (viewboxExpansionWH[0] > 0) ? 1 : -1; // Whether the viewBox expands from the start or end of the horizontal dimension
            var viewboxDirectionY = (viewboxExpansionWH[1] > 0) ? 1 : -1; // Whether the viewBox expands from the start or end of the vertical dimension
            var viewboxExpansionW = Math.abs(parseFloat(viewboxExpansionWH[0])); // Get the absolute width change
            var viewboxExpansionH = Math.abs(parseFloat(viewboxExpansionWH[1])); // Get the absolute height change
            var btn = aboutActions[a]; // Assign the toggle trigger
            var animationDuration = 400; // Matches `$about-delorean-transition-duration` in src/_includes/assets/scss/pages/_about.scss

            var toggleViewBox = function() {
                var isInitial = (deLorean.getAttribute('class').indexOf(modifiedClass) < 0); // If the added class is not present, it is in its initial state
                var animInterval = targetFrameRate / (animationDuration * 2); // The CSS transition needs to be faster, so this transition can be twice as long
                var animProgress = 0; // Initialise the animation progress (belongs to [0,1])
                
                // Determine new state: if it is not in its initial state, return to initial state
                var classes = initialClasses + ((!isInitial) ? '' : ' '+modifiedClass); // Old school method for best browser compatibility

                // Determine the starting value of each viewBox parameter
                var startingX = (isInitial) ? 0 : viewboxExpansionW * viewboxDirectionX;
                var startingY = (isInitial) ? 0 : viewboxExpansionH * viewboxDirectionY;
                var startingW = (isInitial) ? w : w + viewboxExpansionW;
                var startingH = (isInitial) ? h : h + viewboxExpansionH;

                // Determine final resting value of each viewBox parameter
                var targetX = (!isInitial) ? 0 : viewboxExpansionW * viewboxDirectionX;
                var targetY = (!isInitial) ? 0 : viewboxExpansionH * viewboxDirectionY;
                var targetW = (!isInitial) ? w : w + viewboxExpansionW;
                var targetH = (!isInitial) ? h : h + viewboxExpansionH;

                // Looping function to animate the viewBox values
                var animateViewBox = function() {
                    if (animProgress > 1) { // Enter the final resting state
                        deLorean.setAttribute('viewBox', targetX + ' ' + targetY + ' ' + targetW + ' ' + targetH);
                        return;
                    }

                    // Calculate an eased number for each of the four viewBox values
                    var currentX = currentAnimatedValue(startingX, targetX, animProgress);
                    var currentY = currentAnimatedValue(startingY, targetY, animProgress);
                    var currentW = currentAnimatedValue(startingW, targetW, animProgress);
                    var currentH = currentAnimatedValue(startingH, targetH, animProgress);
                    
                    // Assign the final viewBox parameters as a single space-separated string
                    var newViewBox = currentX + ' ' + currentY + ' ' + currentW + ' ' + currentH;
                    deLorean.setAttribute('viewBox', newViewBox);

                    // …and repeat
                    animProgress += animInterval;
                    requestAnimationFrame(animateViewBox);
                }
                
                // Trigger the changes
                deLorean.setAttribute('class', classes);
                animateViewBox();
            };

            btn.addEventListener('click', toggleViewBox, false);
        }
    }
});