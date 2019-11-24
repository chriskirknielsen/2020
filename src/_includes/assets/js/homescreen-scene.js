(function(){ // Based on https://codepen.io/exonj/pen/QYLLmL
    const canvasEl = document.getElementById('homescreen-scene');
    const darkmagenta = '#3c0328';
    const dullpink = '#9d3472';
    const hotpink = '#d13190';
    const peach = '#dd6a65';
    const electric = '#f0c54f';
    const cyan = '#10c6bd';
    // const horizonNear = '#0a0634';
    // const horizonFar = '#791e74';
    // const mountainCount = 8;
    // let mountains = [];
    
    // for (let c = 0; c < mountainCount; c++) {
    //     // Make the factor stronger towards the middle of the set (probably not a real bell curve, this is my own implementation)
    //     const bellCurveFactor = Math.abs(c - mountainCount/2) * -1 + mountainCount/2;
    //     const mHeightFactor = bellCurveFactor / (mountainCount/2);

    //     // Place the centre point based on the index of the item
    //     const mCentreFactor = c / mountainCount + (Math.random() - .5) / 10;
        
    //     // Make the width factor between .25 and 1.
    //     const mWidthFactor = Math.max(.25, Math.min(1, Math.random()*2));
        
    //     // Place the factor within 25% of the centre point, on either side
    //     const mApexPositionFactor = .5 + (Math.random() - .5) / 4;
    //     const mData = {
    //         widthFactor: mWidthFactor,
    //         heightFactor: mHeightFactor,
    //         centreFactor: mCentreFactor,
    //         apexFactor: mApexPositionFactor
    //     };

    //     mountains.push(mData);
    // }

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

    function drawMountain(ctx, base, tHeight, x1, x2, x3, fillStyle) {
        ctx.beginPath();
        ctx.moveTo(x1, base);
        ctx.lineTo(x2, base - tHeight);
        ctx.lineTo(x3, base);
        ctx.fillStyle = fillStyle;
        ctx.fill();
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
        for (let t in speeds) { periods[t] = (now % speeds[t]) / speeds[t]; }

        const MAX_HLINES = Math.floor(width / 10);
        let VLINES = Math.floor(width / 100);
        if (VLINES % 2 !== 0) { VLINES += 1; } // Always keep a vertical line in the centre

        const HSPREAD = 2000;
        const z = HSPREAD * 0.05;
        const lowerHorizon = height / 2;

        // Half-sun
        const sunCenter = lowerHorizon + 1;
        const sunRadius = ((width < height) ? width : height) / 4;
        const sunBlindCount = 8;
        const rectHeight = (sunRadius / sunBlindCount) / 2; // Height of individual "blind" is half of each blind and their counter (empty) space
        const gradient = ctx.createLinearGradient(0, sunCenter-sunRadius, 0, sunCenter+sunRadius);
        gradient.addColorStop(0, electric);
        gradient.addColorStop(.3, peach);
        gradient.addColorStop(.5, hotpink);
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

        // const mountainsCentre = Math.floor(width/2);
        // const mountainsMaxWidth = Math.floor(width/4);
        // const mountainsMaxHeight = Math.floor(height/8);
        // const horizonGradient = ctx.createLinearGradient(0, lowerHorizon, 0, height/8);
        // horizonGradient.addColorStop(0, horizonNear);
        // horizonGradient.addColorStop(1, horizonFar);

        // for (let m of mountains) {
        //     const mWidth = mountainsMaxWidth * m.widthFactor;
        //     const mHeight = mountainsMaxHeight * m.heightFactor;
        //     const mCentre = width * m.centreFactor + mWidth/2;
        //     const mApex = mWidth * (m.apexFactor - .5);

        //     drawMountain(ctx, lowerHorizon, mHeight, mCentre-mWidth/2, mCentre+mApex, mCentre+mWidth/2, horizonGradient);
        //     drawLine(ctx, mCentre+mApex, lowerHorizon-mHeight, mCentre, lowerHorizon); // Draw median line through triangle
        // }
        
        if (!window.prefersReducedMotion) { // Only animate if user doesn't prefer reduced motion
            window.requestAnimationFrame(draw);
        }
    }

    draw();
})();

(function() {
    if (!prefersReducedMotion) {
        // Type in creative developer
        const creativeDeveloperText = 'creative developer';
        const creativeDeveloperNode = document.getElementById('svg-mark-creative-developer-text');
        const creativeDeveloperStartDelay = 3250;
        const creativeDeveloperTypeDelay = 42;
        let creativeDeveloperIndex = 0;
        creativeDeveloperNode.innerHTML = ''; // Reset

        const typeCreativeDeveloper = function() {
            creativeDeveloperNode.innerHTML += creativeDeveloperText[creativeDeveloperIndex];
            creativeDeveloperIndex++;

            if (typeof creativeDeveloperText[creativeDeveloperIndex] === 'undefined') { return; }
            setTimeout(typeCreativeDeveloper, creativeDeveloperTypeDelay);
        }

        setTimeout(typeCreativeDeveloper, creativeDeveloperStartDelay);
    }
})();