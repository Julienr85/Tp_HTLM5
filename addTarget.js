function addTarget(flux,contexte) {
  var middle_width = canvas.width / 2;
  var middle_height = canvas.height / 2;
  var radius = middle_width / 6;

  contexte.drawImage(flux, 0, 0, canvas.width, canvas.height);
  contexte.fill();
  contexte.strokeStyle = '#ff0000';

  // circle
  contexte.beginPath();context.fillStyle = 'rgba(0, 0, 0, 0)';
  contexte.arc(middle_width, middle_height, radius, 0, 2 * Math.PI, false);
  contexte.lineWidth = 5;
  contexte.stroke();
  contexte.fill();

  // round line left
  contexte.beginPath();
  contexte.moveTo(middle_width-radius, canvas.height / 2);
  contexte.lineTo(middle_width-radius*2, canvas.height / 2);
  contexte.lineWidth = 5;
  contexte.lineCap = 'round';
  contexte.stroke();
  contexte.fill();

  // round line right
  contexte.beginPath();
  contexte.moveTo(middle_width+radius, canvas.height / 2);
  contexte.lineTo(middle_width+radius*2, canvas.height / 2);
  contexte.lineWidth = 5;
  contexte.lineCap = 'round';
  contexte.stroke();
  contexte.fill();

  // round line cap top
  contexte.beginPath();
  contexte.moveTo(middle_width, middle_height-radius);
  contexte.lineTo(middle_width, middle_height-radius*2);
  contexte.lineWidth = 5;
  contexte.lineCap = 'round';
  contexte.stroke();
  contexte.fill();

  // round line cap bottom
  contexte.beginPath();
  contexte.moveTo(middle_width, middle_height+radius);
  contexte.lineTo(middle_width, middle_height+radius*2);
  contexte.lineWidth = 5;
  contexte.lineCap = 'round';
  contexte.stroke();
  contexte.fill();
}
