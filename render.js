const optionsDoc = document.querySelector("canvas.options");
const optionsCtx = optionsDoc.getContext("2d");

function renderOptions3Dotted(ctx){
    // draw the top circle
    ctx.beginPath();
    ctx.moveTo(200, 20); // dunno why pos is x = 200 y = 20
    ctx.lineTo(100, 20);
    ctx.lineWidth = 20;
    ctx.stroke();

    // draw the second circle
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(100, 50);
    ctx.lineWidth = 20;
    ctx.stroke();

    // draw the third circle
    ctx.beginPath();
    ctx.moveTo(200, 80);
    ctx.lineTo(100, 80);
    ctx.lineWidth = 20;
    ctx.stroke();
}

renderOptions3Dotted(optionsCtx);