function savePicture()
{
	canvas_sauvegarde = canvas.toDataURL(); // Récupération du canvas
	canvas_sauvegarde = canvas_sauvegarde.replace("image/png", "image/octet-stream");
	document.location.href = canvas_sauvegarde;
	window.location.href = canvas_sauvegarde;
	alert("Image téléchargé !");
}
