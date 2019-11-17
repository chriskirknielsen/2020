(function(){ // Based on https://codepen.io/exonj/pen/QYLLmL
    const canvasEl = document.getElementById('homescreen-scene');

    function getContext(width, height) {
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
        let width = canvasEl.parentElement.clientWidth;
        let height = canvasEl.parentElement.clientHeight;

        const ctx = getContext(width, height);

        if (ctx === null) {
            canvasEl.parentElement.removeChild(canvasEl);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        const speeds = {
            sway: 3000,
            hScroll: 7000,
            vScroll: 1000,
            zScroll: 15000
        };
        const periods = {};
        const now = new Date();
        for (t in speeds) { periods[t] = (now % speeds[t]) / speeds[t]; }

        const horizonSpacing = 400;
        const infinity = height / 2;
        let lowerHorizon = infinity + 1; // + Math.sin(periods.zScroll * Math.PI * 2) * 100;
        let upperHorizon = infinity - horizonSpacing / 2; // + Math.sin(periods.zScroll * Math.PI * 2) * 100;

        const MAX_HLINES = 100;
        for (let i = 0; i < MAX_HLINES; i++) {
            const dy = Math.pow(1.5, i + periods.vScroll);

            const lowerY = lowerHorizon - 1 + dy;
            ctx.strokeStyle = '#eb008b';
            drawLine(ctx, 0, lowerY, width, lowerY);

            if (lowerY > height) break;
        }

        const VLINES = 50;
        const HSPREAD = 3000;
        const z = HSPREAD * 0.05; // * Math.sin(periods.zScroll * Math.PI * 2);
        for (let i = 0; i < VLINES; i++) {
            const xSep = width / VLINES;
            const x = width * (i / VLINES);// + Math.sin(periods.hScroll * Math.PI * 2) * xSep;

            const xSpreadLower = ((HSPREAD - z) * 2 / width) * x - (HSPREAD - z);
            ctx.strokeStyle = '#eb008b';
            drawLine(ctx, x + xSpreadLower, height, x, lowerHorizon);
        }

        window.requestAnimationFrame(draw);
    }

    draw();
})()