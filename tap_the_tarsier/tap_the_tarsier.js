window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {

	canvasApp();
	
}

function canvasSupport () {
  	return Modernizr.canvas;
}


function canvasApp(){

	

	if (!canvasSupport()) {
			 return;
  	}else{
	    var theCanvas = document.getElementById('canvas');
	    var context = theCanvas.getContext('2d');
	}

	    var lilTarsier = new Image();
            lilTarsier.src = "lil_tarsier.png";
            lilTarsier.addEventListener('load', eventTarsierLoaded, false);
            theCanvas.addEventListener('mousemove', ev_mousemove, false);

    function eventTarsierLoaded() {
	setInterval(drawTarsier, 500);
    }

    function drawTarsier() {
	context.fillStyle = 'white';
	context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	context.strokeStyle = '#000000'; 
	context.strokeRect(1,  1, theCanvas.width-2, theCanvas.height-2);
        var x_coord_random= Math.floor(Math.random()*(theCanvas.width-50));
        var y_coord_random= Math.floor(Math.random()*(theCanvas.height-50));
	context.drawImage(lilTarsier, x_coord_random, y_coord_random, 50, 50);
    }

// The mousemove event handler.
  var started = false;

function ev_mousemove (ev) {
    var x, y;

    // Get the mouse position relative to the canvas element.
    if (ev.layerX || ev.layerX == 0) { // Firefox
      x = ev.layerX;
      y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
      x = ev.offsetX
      y = ev.offsetY
    }

    // The event handler works like a drawing pencil which tracks the mouse 
    // movements. We start drawing a path made up of lines.
    if (!started) {
      context.beginPath();
      context.moveTo(x, y);
      started = true;
    } else {
      context.lineTo(x, y);
      context.stroke();
    }
  }
}

        

  


