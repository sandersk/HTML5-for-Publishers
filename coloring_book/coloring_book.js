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
	    var redButton = document.getElementById("red");
	    var orangeButton = document.getElementById("orange");
	    var yellowButton = document.getElementById("yellow");
	    var greenButton = document.getElementById("green");
	    var blueButton = document.getElementById("blue");
	    var purpleButton = document.getElementById("purple");
	    var brownButton = document.getElementById("brown");
	    var blackButton = document.getElementById("black");
	    var whiteButton = document.getElementById("white");
	    var colorChosen = document.getElementById("color_chosen");
	    var resetButton = document.getElementById("reset_dog");
            redButton.addEventListener('click', redPressed, false);
            orangeButton.addEventListener('click', orangePressed, false);
            yellowButton.addEventListener('click', yellowPressed, false);
            greenButton.addEventListener('click', greenPressed, false);
            blueButton.addEventListener('click', bluePressed, false);
            purpleButton.addEventListener('click', purplePressed, false);
            brownButton.addEventListener('click', brownPressed, false);
            blackButton.addEventListener('click', blackPressed, false);
            whiteButton.addEventListener('click', whitePressed, false);
            resetButton.addEventListener('click', resetPressed, false);
	}

	    var doggie = new Image();
            doggie.src = "coloring_book_dog.png";
            doggie.addEventListener('load', eventDoggieLoaded, false);
 

    function eventDoggieLoaded() {
	drawScreen();
    }

    function drawScreen() {
	theCanvas.addEventListener('mousemove', ev_mousemove, false);
	theCanvas.addEventListener('mousedown', ev_mousedown, false);
	theCanvas.addEventListener('mouseup', ev_mouseup, false);
	theCanvas.addEventListener('touchmove', ev_touchmove, false);
	context.fillStyle = 'white';
	context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	context.strokeStyle = '#000000'; 
	context.strokeRect(1,  1, theCanvas.width-2, theCanvas.height-2);
	context.drawImage(doggie, 6, 6);
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

    if (started) {

      context.arc(x, y, 7, (Math.PI/180)*0, (Math.PI/180)*360, false);
      context.fill();
    }
  }

function ev_touchmove (ev) {
    var x, y;
    context.beginPath();
    context.fillStyle = colorChosen.innerHTML;
    if(ev.touches.length == 1){
	var touch = ev.touches[0];
	x = touch.pageX;
	y = touch.pageY;
	context.arc(x, y, 7, (Math.PI/180)*0, (Math.PI/180)*360, false);
	context.fill();
    }
  }

    function ev_mousedown (ev) {
	started = true;
        context.beginPath();
	context.fillStyle = colorChosen.innerHTML;
    }


    function ev_mouseup (ev) {
        context.closePath();
	started = false;
    }

    function redPressed (ev) {
	colorChosen.innerHTML = "Red";
    }

    function orangePressed (ev) {
	colorChosen.innerHTML = "Orange";
    }

    function yellowPressed (ev) {
	colorChosen.innerHTML = "Yellow";
    }

    function greenPressed (ev) {
	colorChosen.innerHTML = "Green";
    }

    function bluePressed (ev) {
	colorChosen.innerHTML = "Blue";
    }

    function purplePressed (ev) {
	colorChosen.innerHTML = "Purple";
    }

    function brownPressed (ev) {
	colorChosen.innerHTML = "Brown";
    }

    function blackPressed (ev) {
	colorChosen.innerHTML = "Black";
    }

    function whitePressed (ev) {
	colorChosen.innerHTML = "White";
    }

    function resetPressed(e) {
        theCanvas.width = theCanvas.width; // Reset grid
        drawScreen();
    }

}

        

  


