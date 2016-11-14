var canvas = document.getElementById('myCanvas');

document.getElementById('save').addEventListener('click', function () {
    if (!video.paused){
        changetext();
    }
    video.pause();
    canvasPlayer();
    downloadCanvas(this, 'myCanvas', 'image.png');

}, false);

function downloadCanvas(link, canvasId, filename) {
    var url = document.getElementById(canvasId).toDataURL();
    window.addEventListener('focus', window_focus, false);
    function window_focus(){
        window.removeEventListener('focus', window_focus, false);
        URL.revokeObjectURL(url);
        document.getElementById('save').href = null;
    }
    link.href = url;
    link.download = filename;
}

function canvasPlayer() {
    if (myStream) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        if (video.paused || video.ended) return;

        ctx.beginPath();
        ctx.arc(320, 245, 45, 0, Math.PI * 2, true);
        ctx.strokeStyle = "RED";
        ctx.stroke();

        ctx.shadowColor = "rgba(0,0,0,0)";
        ctx.strokeStyle = "RED";
        ctx.lineWidth = 2;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.beginPath();
        ctx.moveTo(275, 245);
        ctx.lineTo(230, 245);
        ctx.stroke();

        ctx.shadowColor = "rgba(0,0,0,0)";
        ctx.strokeStyle = "RED";
        ctx.lineWidth = 2;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.beginPath();
        ctx.moveTo(365, 245);
        ctx.lineTo(410, 245);
        ctx.stroke();

        ctx.shadowColor = "rgba(0,0,0,0)";
        ctx.strokeStyle = "RED";
        ctx.lineWidth = 2;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.beginPath();
        ctx.moveTo(320, 200);
        ctx.lineTo(320, 155);
        ctx.stroke();

        ctx.shadowColor = "rgba(0,0,0,0)";
        ctx.strokeStyle = "RED";
        ctx.lineWidth = 2;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.beginPath();
        ctx.moveTo(320, 290);
        ctx.lineTo(320, 335);
        ctx.stroke();

    }
}


function geo_erreur(error) {
    console.log('error (' + error.code + '): ' + error.message);
}
