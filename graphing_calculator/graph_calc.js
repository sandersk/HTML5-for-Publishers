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
    } else {
	var theCanvas = document.getElementById('canvas');
	var context = theCanvas.getContext('2d');
	
    }
    
    initGraphCalculator();
    var graph_in_progress = "no"
    
    function initGraphCalculator() {
	drawGrid();
	var y_equals_x_button = document.getElementById("y_equals_x");
        y_equals_x_button.addEventListener('click', y_equals_xPressed, false);
	var y_equals_negative_x_button = document.getElementById("y_equals_negative_x");
        y_equals_negative_x_button.addEventListener('click', y_equals_negative_xPressed, false);
	var y_equals_two_x_button = document.getElementById("y_equals_two_x");
        y_equals_two_x_button.addEventListener('click', y_equals_two_xPressed, false);
	var y_equals_one_half_x_button = document.getElementById("y_equals_one_half_x");
        y_equals_one_half_x_button.addEventListener('click', y_equals_one_half_xPressed, false);
	var reset_grid_button = document.getElementById("reset_grid");
        reset_grid_button.addEventListener('click', reset_grid_buttonPressed, false);
        status_message = document.getElementById("status_message");
    }

    function drawGrid() {
	
        var i = 0;
        axis_pos = 1;
	can_width = theCanvas.width; // Get the width of the canvas
	
	// Loop through and draw horizontal/vertical lines at each eighth of the grid
	// All logic below presumes canvas has square dimensions
	for (i=0;i<=can_width;i+=(can_width)/8)
        {
            if (i == (can_width)/2) // Special handling for horiz/vert axes
            {
                context.lineWidth = 3; // Axes are thicker...
                context.strokeStyle = 'red'; //... and in red
            }
            else
            {
                context.lineWidth = 1;
                context.strokeStyle = 'black';
            }
            // First draw horizontal line
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, can_width);
            context.stroke();
            context.closePath();
            // Then draw vertical line
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(can_width, i);
            context.stroke();
            context.closePath();
	}
        // Then add axis number labels
       	context.font         = '20px _sans';
	context.textBaseline = 'top';
	// Move canvas origin to center of grid
	context.translate(can_width / 2, can_width / 2);
	for (i=-3;i<=3;i++) {
	    if (i != 0) { // Skip labeling origin
		// horizontal label
		context.fillText  (i, i*(can_width/8) + 5, 5);
		// vertical label
		context.fillText  (i, 5, -i*(can_width/8));
	    }
	}
	// Add bold-italic x- and y labels on the axes, too
	context.font = 'italic bold 20px _sans';
	context.fillText ("x", (can_width/2)-12, 1);
	context.fillText ("y", 4, -(can_width/2));
    }

  
    function y_equals_xPressed(e) {
	draw_grid_line(1, "green");
    }

    function y_equals_negative_xPressed(e) {
	draw_grid_line(-1, "purple");
    }
    
    function y_equals_two_xPressed(e) {
	draw_grid_line(2, "blue");
    }
    
    function y_equals_one_half_xPressed(e) {
	draw_grid_line(1/2, "brown");
    }

    function draw_grid_line (slope, color) {
	if (graph_in_progress == "yes") {
	    // Only draw one line at a time
	    alert("Another line is being drawn. Please wait until it's complete");
	} else {
	    init_x = -(theCanvas.width)/2; // start with x = left edge of grid
            // Note: Must reverse sign y-coordinate, as negative y-coordinates are top half of grid by default, not bottom
	    init_y = -(init_x) * slope // y = mx
	    new_x = init_x;
	    new_y = init_y;
            var drawLineIntervalId = 0;
	    status_message.innerHTML = "Drawing equation y = " + slope + "x";
	    graph_in_progress = "yes" // line now being drawn
            drawLineIntervalId = setInterval(do_animation, 33);
	}

	function do_animation () {
	    context.lineWidth = 6;
	    context.strokeStyle = color;
	    context.beginPath();
	    context.moveTo(init_x, init_y);
            context.lineTo(new_x, new_y);
            context.stroke();
            context.closePath();
	    new_x = new_x + 5
	    new_y = -(new_x) * slope
	    context.lineTo(new_x, new_y)
	    if (new_x == theCanvas.width + 5) {
		clearInterval(drawLineIntervalId); // stop animation when line is complete
		graph_in_progress = "no" // line is now done
		status_message.innerHTML = "Click a button below the grid to graph an equation"
	    }
	}
    }

    function reset_grid_buttonPressed(e) {
        theCanvas.width = theCanvas.width; // Reset grid
        drawGrid();
    }
}

