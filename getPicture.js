function getPicture() {
  if (myStream) {
    var canvas = document.getElementById("myCanvas");
    video.pause();
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    $("#save_btn").removeClass('disabled');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showInformation);
     }
    else {alert("Geolocation is not supported by this browser.");}
  }
}
