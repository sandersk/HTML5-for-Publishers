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
	    var redCanvas = document.getElementById('red');
	    var redContext = redCanvas.getContext('2d');
	    var orangeCanvas = document.getElementById('orange');
	    var orangeContext = orangeCanvas.getContext('2d');
	    var yellowCanvas = document.getElementById('yellow');
	    var yellowContext = yellowCanvas.getContext('2d');
	    var greenCanvas = document.getElementById('green');
	    var greenContext = greenCanvas.getContext('2d');
	    var blueCanvas = document.getElementById('blue');
	    var blueContext = blueCanvas.getContext('2d');
	    var purpleCanvas = document.getElementById('purple');
	    var purpleContext = purpleCanvas.getContext('2d');
	    var brownCanvas = document.getElementById('brown');
	    var brownContext = brownCanvas.getContext('2d');
	    var blackCanvas = document.getElementById('black');
	    var blackContext = blackCanvas.getContext('2d');
	    var whiteCanvas = document.getElementById('white');
	    var whiteContext = whiteCanvas.getContext('2d');
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
	}

	    var doggie = new Image();
            doggie.src = "coloring_book_dog.png";
            doggie.addEventListener('load', eventDoggieLoaded, false);
 

    function eventDoggieLoaded() {
	drawScreen();
	drawColorPalette();
    }

    function drawScreen() {
	theCanvas.addEventListener('mousemove', ev_mousemove, false);
	theCanvas.addEventListener('mousedown', ev_mousedown, false);
	theCanvas.addEventListener('mouseup', ev_mouseup, false);
	context.fillStyle = 'white';
	context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	context.strokeStyle = '#000000'; 
	context.strokeRect(1,  1, theCanvas.width-2, theCanvas.height-2);
	context.drawImage(doggie, 6, 6);
    }

    function drawColorPalette() {

	redContext.fillStyle = 'red';
	redContext.fillRect(0,0, redCanvas.width, redCanvas.height);
	orangeContext.fillStyle = 'orange';
	orangeContext.fillRect(0,0, orangeCanvas.width, orangeCanvas.height);
	yellowContext.fillStyle = 'yellow';
	yellowContext.fillRect(0,0, yellowCanvas.width, yellowCanvas.height);
	greenContext.fillStyle = 'green';
	greenContext.fillRect(0,0, greenCanvas.width, greenCanvas.height);
	blueContext.fillStyle = 'blue';
	blueContext.fillRect(0,0, blueCanvas.width, blueCanvas.height);
	purpleContext.fillStyle = 'purple';
	purpleContext.fillRect(0,0, purpleCanvas.width, purpleCanvas.height);
	brownContext.fillStyle = 'brown';
	brownContext.fillRect(0,0, brownCanvas.width, brownCanvas.height);
	blackContext.fillStyle = 'black';
	blackContext.fillRect(0,0, blackCanvas.width, blackCanvas.height);
	whiteContext.strokeStyle = 'black';
	whiteContext.strokeRect(1,1, whiteCanvas.width-2, whiteCanvas.height-2);
        redButton.addEventListener('click', redPressed, false);
        orangeButton.addEventListener('click', orangePressed, false);
        yellowButton.addEventListener('click', yellowPressed, false);
        greenButton.addEventListener('click', greenPressed, false);
        blueButton.addEventListener('click', bluePressed, false);
        purpleButton.addEventListener('click', purplePressed, false);
        brownButton.addEventListener('click', brownPressed, false);
        blackButton.addEventListener('click', blackPressed, false);
        whiteButton.addEventListener('click', whitePressed, false); 
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

      context.lineTo(x, y);
      context.stroke();
    }
  }

    function ev_mousedown (ev) {
	started = true;
        context.beginPath();
	context.strokeStyle = colorChosen.innerHTML;
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

}

        

  


