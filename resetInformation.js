function resetInformation() {

    document.getElementById("Latitude").value = "";
    document.getElementById("Longitude").value = "";
    document.getElementById("Date").value = "";

    video.play();
    $("#save_btn").addClass('disabled');
}
