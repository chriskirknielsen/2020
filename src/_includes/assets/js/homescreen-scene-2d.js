(function(){ // Based on https://codepen.io/exonj/pen/QYLLmL
    const canvasEl = window.sceneCanvas;
    const darkmagenta = '#3c0328';
    const dullpink = '#9d3472';
    const electric = '#f0c54f';
    const peach = '#dd6a65';
    const hotpink = '#d13190';
    const cyan = '#10c6bd';
    const cyanAlpha = 'rgba(16, 198, 189, 0)';
    const sunTop = '#ed23af';
    const sunMiddle = '#ffafa3';
    const sunBottom = '#ffffe9';

    function easeFn(t) {
        return t*(2-t);
    }

    function getContext(width, height) {
        if (width > window.innerWidth) { width = window.innerWidth; }
        if (height > window.innerHeight) { height = window.innerHeight; }
        
        canvasEl.width = width;
        canvasEl.height = height;
        return canvasEl.getContext('2d');
    }

    function drawLine(ctx, x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }

    const pageStart = new Date();

    function draw() {
        const width = canvasEl.parentElement.clientWidth;
        const height = canvasEl.parentElement.clientHeight;
        const ctx = getContext(width, height);

        ctx.clearRect(0, 0, width, height);

        const fadeCyan = ctx.createLinearGradient(0, 0, 0, height);
        fadeCyan.addColorStop(0, cyan);
        fadeCyan.addColorStop(.75, cyan);
        fadeCyan.addColorStop(1, cyanAlpha);

        // Define animation values
        const speeds = {
            sway: 3000,
            hScroll: 7000,
            vScroll: 800, // This determines the forward motion speed
            zScroll: 1000
        };
        const periods = {};
        const now = new Date();
        for (let t in speeds) { periods[t] = (now % speeds[t]) / speeds[t]; }

        const MAX_HLINES = Math.floor(width / 10);
        let VLINES = Math.floor(width / 48);
        if (VLINES % 2 !== 0) { VLINES += 1; } // Always keep a vertical line in the centre

        const HSPREAD = 32000;
        const z = HSPREAD * 0.05;
        const lowerHorizon = height / 2;
        /*
        // Half-sun
        const sunCenter = lowerHorizon + 1;
        const sunRadius = ((width < height) ? width : height) / 4;
        const sunBlindCount = 8;
        const sunGlowRadius = 32;
        const rectHeight = (sunRadius / sunBlindCount) / 2; // Height of individual "blind" is half of each blind and their counter (empty) space
        const gradient = ctx.createLinearGradient(0, sunCenter-sunRadius, 0, sunCenter+sunRadius);
        gradient.addColorStop(0, sunTop);
        gradient.addColorStop(.3, sunMiddle);
        gradient.addColorStop(.5, sunBottom);
        gradient.addColorStop(.5, dullpink);
        gradient.addColorStop(1, darkmagenta);

        // Start clipping mask
        ctx.save(); // Save state before clipping
        ctx.shadowBlur = 0;
        ctx.rect(0, 0, width, sunCenter); // Keep the top half visible at all times

        for (let i = 0; i <= sunBlindCount; i++) { // Keep it inferior OR equal to ensure the bottom blind is also painted to disappear right away
            const dy = i + periods.vScroll; // Define rectangle's offset
            const lowerY =
                (sunCenter - rectHeight) // Place rectangle at sun center, minus the height of the rectangle so that the top blind is first hidden (avoids jump at loop start)
                + i*rectHeight // Plus offset for current rectangle
                + rectHeight*dy // Plus offset for rectangle position in loop
                + rectHeight*periods.vScroll; // Plus offset by rectangle's height, factored by the animation loop's progression (within [0;1])
            
            ctx.rect(0, lowerY, width, rectHeight);
        
            if (lowerY > sunCenter+sunRadius) break;
        }
        
        ctx.closePath();
        ctx.clip();
        // End clipping mask

        // Start sun
        ctx.beginPath();
        ctx.arc(width/2, sunCenter, sunRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();
        // End sun

        ctx.restore(); // Stop clipping
        */
        // ctx.strokeStyle = cyan;
        ctx.strokeStyle = fadeCyan;

        // Draw horizontal lines
        for (let i = 0; i < MAX_HLINES; i++) {
            const dy = Math.pow(5, i + periods.vScroll);
            const lowerY = lowerHorizon - 1 + dy;
            
            drawLine(ctx, 0, lowerY, width, lowerY);

            if (lowerY > height) break;
        }

        // Draw vertical, perspective-adjusted lines
        for (let i = 0; i < VLINES; i++) {
            const xSep = width / VLINES;
            const x = width * (i / VLINES);
            const xSpreadLower = ((HSPREAD - z) * 2 / width) * x - (HSPREAD - z);

            drawLine(ctx, x + xSpreadLower, height, x, lowerHorizon);
        }

        // Start glow
        // for (let g = -1*sunGlowRadius; g <= sunGlowRadius; ++g) {
        //     const valueMax = 255;
        //     const glowMaxValue = 128;
        //     let eased = easeFn(Math.abs((g/sunGlowRadius))); // Get the easing value in the [0,1] range
        //     let hexOpacity = (valueMax - Math.floor(eased * glowMaxValue) - (valueMax - glowMaxValue)).toString(16); // Get the hexidecimal value
        //     if (hexOpacity.length < 2) hexOpacity = '0' + hexOpacity; // Pad with a 0 if the result is a single character
            
        //     ctx.beginPath();
        //     ctx.arc(width/2, sunCenter, sunRadius+g, Math.PI, 0);
        //     ctx.strokeStyle = sunTop + hexOpacity;
        //     ctx.lineWidth = 1.5;
        //     ctx.stroke();
        //     ctx.closePath();
        // }
        // End glow

        // Cover the horizon aliasing
        ctx.lineWidth = 2;
        drawLine(ctx, 0, lowerHorizon, width, lowerHorizon);
        
        // Only animate if user doesn't prefer reduced motion
        if (!window.prefersReducedMotion) {
            // window.requestAnimationFrame(draw);
        }
    }

    draw();
})();