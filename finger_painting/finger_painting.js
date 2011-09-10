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
	var redButton = document.getElementById("Red");
	var orangeButton = document.getElementById("Orange");
	var yellowButton = document.getElementById("Yellow");
	var greenButton = document.getElementById("Green");
	var blueButton = document.getElementById("Blue");
	var purpleButton = document.getElementById("Purple");
	var brownButton = document.getElementById("Brown");
	var blackButton = document.getElementById("Black");
	var whiteButton = document.getElementById("White");
	var colorChosen = document.getElementById("color_chosen");
	var resetButton = document.getElementById("reset_image");
        redButton.addEventListener('click', colorPressed, false);
        orangeButton.addEventListener('click', colorPressed, false);
        yellowButton.addEventListener('click', colorPressed, false);
        greenButton.addEventListener('click', colorPressed, false);
        blueButton.addEventListener('click', colorPressed, false);
        purpleButton.addEventListener('click', colorPressed, false);
        brownButton.addEventListener('click', colorPressed, false);
        blackButton.addEventListener('click', colorPressed, false);
        whiteButton.addEventListener('click', colorPressed, false);
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

    function colorPressed(e) {
	var color_button_selected = e.target;
	var color_id = color_button_selected.getAttribute('id');
	colorChosen.innerHTML = color_id;
    }

    function resetPressed(e) {
        theCanvas.width = theCanvas.width; // Reset grid
        drawScreen();
    }
}

        

  


