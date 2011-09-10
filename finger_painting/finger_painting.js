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
	drawScreen();
    }

    function drawScreen() {
	theCanvas.addEventListener('mousemove', mouse_moved, false);
	theCanvas.addEventListener('mousedown', mouse_held_down, false);
	theCanvas.addEventListener('mouseup', mouse_released, false);
	theCanvas.addEventListener('touchmove', touch_move_gesture, false);
	context.fillStyle = 'white';
	context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	context.strokeStyle = '#000000'; 
	context.strokeRect(1,  1, theCanvas.width-2, theCanvas.height-2);
    }

    // For the mouse_moved event handler.
    var started = false;

    function mouse_moved (ev) {
	var x, y;
	
	// Get the mouse position in the canvas
	if (ev.layerX || ev.layerX == 0) { // For Firefox
	    x = ev.layerX;
	    y = ev.layerY;
	} else if (ev.offsetX || ev.offsetX == 0) { // For Opera
	    x = ev.offsetX
	    y = ev.offsetY
	}

	if (started) {
	    context.beginPath();
	    context.arc(x, y, 7, (Math.PI/180)*0, (Math.PI/180)*360, false);
	    context.fill();
            context.closePath();
	}
    }

    function touch_move_gesture (ev) {
	// For touchscreen browsers/readers that support touchmove
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

    function mouse_held_down (ev) {
	started = true;
	context.fillStyle = colorChosen.innerHTML;
    }


    function mouse_released (ev) {
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

        

  


