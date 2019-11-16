function getContext(width, height) {
    const canvas = document.getElementById('homescreen-scene');
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = '#000000';
    return canvas.getContext('2d');
}

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

const pageStart = new Date();

function draw() {
    let width = document.getElementById('homescreen-scene').parentElement.clientWidth;
    let height = document.getElementById('homescreen-scene').parentElement.clientHeight;

    const ctx = getContext(width, height);

    ctx.clearRect(0, 0, width, height);

    const speeds = {
        sway: 3000,
        hScroll: 7000,
        vScroll: 200,
        zScroll: 15000
    };
    const periods = {};
    const now = new Date();
    for (t in speeds) periods[t] = (now % speeds[t]) / speeds[t];

    const horizonSpacing = 400
    const horizonWobble = 3 * Math.sin(periods.sway * 2 * Math.PI);
    const infinity = height / 2 + horizonWobble;
    let lowerHorizon = infinity + horizonSpacing / 2 + horizonWobble + Math.sin(periods.zScroll * Math.PI * 2) * 100;
    let upperHorizon = infinity - horizonSpacing / 2 + horizonWobble + Math.sin(periods.zScroll * Math.PI * 2) * 100;

    const MAX_HLINES = 100;
    for (let i = 0; i < MAX_HLINES; i++) {
        const dy = Math.pow(1.3, i + periods.vScroll);

        const upperY = upperHorizon + 1 - dy;
        ctx.strokeStyle = `rgba(0, 127, 255, 1)`;
        drawLine(ctx, 0, upperY, width, upperY);

        const lowerY = lowerHorizon - 1 + dy;
        ctx.strokeStyle = `rgba(255, 0, 255, 1)`;
        drawLine(ctx, 0, lowerY, width, lowerY);

        if (upperY < 0 && lowerY > height) break;
    }

    const VLINES = 50;
    const HSPREAD = 1500;
    const z = Math.sin(periods.zScroll * Math.PI * 2) * HSPREAD * 0.8;
    for (let i = 0; i < VLINES; i++) {
        const xSep = width / VLINES;
        const x = width * (i / VLINES) + Math.sin(periods.hScroll * Math.PI * 2) * xSep;

        const xSpreadUpper = ((HSPREAD + z) * 2 / width) * x - (HSPREAD + z);
        ctx.strokeStyle = 'cyan';
        drawLine(ctx, x + xSpreadUpper, 0, x, upperHorizon);

        const xSpreadLower = ((HSPREAD - z) * 2 / width) * x - (HSPREAD - z);
        ctx.strokeStyle = 'red';
        drawLine(ctx, x + xSpreadLower, height, x, lowerHorizon);
    }
    window.requestAnimationFrame(draw);
}

draw();