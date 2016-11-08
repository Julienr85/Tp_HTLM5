window.URL = window.URL || window.webkitURL;
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

var video = document.getElementById("myVideo");
var canvas = document.getElementById("myCanvas");

var size_height = document.getElementById("streamvideo").offsetHeight;
var size_width = size_height *16 / 9;

canvas.width = size_width;
canvas.height = size_height;
video.setAttribute('width', size_width);
video.setAttribute('height', size_height);

var context = canvas.getContext('2d');

video.addEventListener('play', function() {
  var $this = this; //cache
  (function loop() {
    if (!$this.paused && !$this.ended) {
      addTarget($this,context);
      setTimeout(loop, 1000 / 30); // drawing at 30fps
    }
  })();
}, 0);

var myStream = null;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    // Constraints
    {audio: true, video: true},
    // Success Callback
    function success(localMediaStream) {
      video.src = window.URL.createObjectURL(localMediaStream);
      myStream = localMediaStream;
    },
    // Error Callback
    function fallback(err) {
      // Log the error to the console.
      console.log('The following error occurred when trying to use getUserMedia: ' + err);
    }
  );
}
else {alert('Sorry, your browser does not support getUserMedia');}
