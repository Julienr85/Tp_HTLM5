var canvas = document.getElementById('myCanvas');

document.getElementById('save').addEventListener('click', function () {
    if (!video.paused){
        changetext();
    }
    video.pause();
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

function geo_erreur(error) {
    console.log('error (' + error.code + '): ' + error.message);
}
