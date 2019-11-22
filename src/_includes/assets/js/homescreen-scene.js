(function(){ // Based on https://codepen.io/exonj/pen/QYLLmL
    const canvasEl = document.getElementById('homescreen-scene');
    const darkmagenta = '#3c0328';
    const dullpink = '#9d3472';
    const hotpink = '#d13190';
    const peach = '#dd6a65';
    const electric = '#f0c54f';
    const cyan = '#10c6bd';

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
    }

    const pageStart = new Date();

    function draw() {
        const width = canvasEl.parentElement.clientWidth;
        const height = canvasEl.parentElement.clientHeight;
        const ctx = getContext(width, height);

        if (ctx === null) {
            canvasEl.parentElement.removeChild(canvasEl);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        // Define animation values
        const speeds = {
            sway: 3000,
            hScroll: 7000,
            vScroll: 800, // This determines the forward motion speed
            zScroll: 1000
        };
        const periods = {};
        const now = new Date();
        for (t in speeds) { periods[t] = (now % speeds[t]) / speeds[t]; }

        const MAX_HLINES = Math.floor(width / 96);
        let VLINES = Math.floor(width / 100);
        if (VLINES % 2 !== 0) { VLINES += 1; }
        if (VLINES > 25) { VLINES = 25; }

        const HSPREAD = 1500;
        const z = HSPREAD * 0.05;
        const lowerHorizon = height / 2;

        // Half-sun
        const sunCenter = lowerHorizon;
        const sunRadius = ((width < height) ? width : height) / 4;
        const sunBlindCount = 8;
        const rectHeight = (sunRadius / sunBlindCount) / 2; // Height of individual "blind" is half of each blind and their counter (empty) space
        const gradient = ctx.createLinearGradient(0, sunCenter-sunRadius, 0, sunCenter+sunRadius);
            gradient.addColorStop(0, electric);
            gradient.addColorStop(.3, peach);
            gradient.addColorStop(.5, hotpink);
            gradient.addColorStop(.5, dullpink);
            gradient.addColorStop(1, darkmagenta);

        const doGlow = false;
        if (doGlow) {
            // Start Glow
            ctx.shadowBlur = rectHeight*2;
            ctx.shadowColor = hotpink;
            ctx.beginPath();
            ctx.arc(width/2, sunCenter, sunRadius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = 'black';
            ctx.globalCompositeOperation = 'screen';
            ctx.fill();

            // Reset
            ctx.globalCompositeOperation = 'source-over';
            ctx.shadowColor = 'rgba(0,0,0,0)';
            ctx.shadowBlur = 0;
        }

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

        // Draw lines;
        for (let i = 0; i < MAX_HLINES; i++) {
            const dy = Math.pow(1.5, i + periods.vScroll);
            const lowerY = lowerHorizon - 1 + dy;

            ctx.strokeStyle = cyan;
            drawLine(ctx, 0, lowerY, width, lowerY);

            if (lowerY > height) break;
        }

        for (let i = 0; i < VLINES; i++) {
            const xSep = width / VLINES;
            const x = width * (i / VLINES);// + Math.sin(periods.hScroll * Math.PI * 2) * xSep;
            const xSpreadLower = ((HSPREAD - z) * 2 / width) * x - (HSPREAD - z);

            ctx.strokeStyle = cyan;
            drawLine(ctx, x + xSpreadLower, height, x, lowerHorizon);
        }
        
        if (!window.prefersReducedMotion) { // Only animate if user doesn't prefer reduced motion
            window.requestAnimationFrame(draw);
        }
    }

    draw();
})()