var canvas;

 function setup() {
 	canvas = createCanvas(displayWidth, displayHeight);
  canvas.position(0,0);
  canvas.style( 'z-index', '-1');
	strokeWeight(50)
	stroke(255,255,255);
}

function touchMoved() {
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}
