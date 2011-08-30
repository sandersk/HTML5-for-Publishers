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

            initGraphCalculator();
	
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
	    can_width = theCanvas.width;

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
                // Then add axis labels
       		context.font         = '20px _sans';
		context.textBaseline = 'top';
		// Move canvas origin to center of grid
		context.translate(can_width / 2, can_width / 2);
		for (i=-3;i<=3;i++) {
		    if (i != 0) {
			// horizontal label
			context.fillText  (i, i*(can_width/8) + 5, 5);
			// vertical labels
			context.fillText  (i, 5, -i*(can_width/8));
		    }
		}
	}

  
        function y_equals_xPressed(e) {
            var init_x = 0;
            var init_y = 600;
            var new_x = 0;
            var new_y = 600;
            var drawLineIntervalId = 0;
            status_message.setAttribute("style", "");
            status_message.innerHTML = "Drawing equation y = x";
            drawLineIntervalId = setInterval(draw_y_equals_x, 33);
            function draw_y_equals_x () {
              context.lineWidth = 6;
              context.strokeStyle = 'green';
              context.beginPath();
              context.moveTo(init_x, init_y);
              context.lineTo(new_x, new_y);
              context.stroke();
              context.closePath();
              new_x = new_x + 5
              new_y = new_y - 5
              if (new_x == 605) {
                 clearInterval(drawLineIntervalId); // stop animation when line is complete
                 status_message.setAttribute("style", "display: none;")
              }
            }
        }

        function y_equals_negative_xPressed(e) {
            var init_x = 0;
            var init_y = 0;
            var new_x = 0;
            var new_y = 0;
            var drawLineIntervalId = 0;
            status_message.setAttribute("style", "");
            status_message.innerHTML = "Drawing equation y = -x";
            drawLineIntervalId = setInterval(draw_y_equals_negative_x, 33);
            function draw_y_equals_negative_x () {
               context.lineWidth = 6;
               context.strokeStyle = 'purple';
               context.beginPath();
               context.moveTo(init_x, init_y);
               context.lineTo(new_x, new_y);
               context.stroke();
               context.closePath();
               new_x = new_x + 5
               new_y = new_y + 5
               if (new_x == 605) {
                 clearInterval(drawLineIntervalId); // stop animation when line is complete
                 status_message.setAttribute("style", "display: none;")
               }
            }
        }

        function y_equals_two_xPressed(e) {
            var init_x = 150;
            var init_y = 600;
            var new_x = 150;
            var new_y = 600;
            var drawLineIntervalId = 0;
            status_message.setAttribute("style", "");
            status_message.innerHTML = "Drawing equation y = 2x";
            drawLineIntervalId = setInterval(draw_y_equals_two_x, 33);
            function draw_y_equals_two_x () {
               context.lineWidth = 6;
               context.strokeStyle = 'blue';
               context.beginPath();
               context.moveTo(init_x, init_y);
               context.lineTo(new_x, new_y);
               context.stroke();
               context.closePath();
               new_x = new_x + 5;
               new_y = new_y - 10;
               if (new_x == 605) {
                 clearInterval(drawLineIntervalId); // stop animation when line is complete
                 status_message.setAttribute("style", "display: none;")
               }
            }
        }

        function y_equals_one_half_xPressed(e) {
            var init_x = 0;
            var init_y = 450;
            var new_x = 0;
            var new_y = 450;
            var drawLineIntervalId = 0;
            status_message.setAttribute("style", "");
            status_message.innerHTML = "Drawing equation y = &#xbd;x";
            drawLineIntervalId = setInterval(draw_y_equals_one_half_x, 33);
            function draw_y_equals_one_half_x () {  
               context.lineWidth = 6;
               context.strokeStyle = 'brown';
               context.beginPath();
               context.moveTo(init_x, init_y);
               context.lineTo(new_x, new_y);
               context.stroke();
               context.closePath();
               new_x = new_x + 5
               new_y = new_y - 2.5
               if (new_x == 605) {
                 clearInterval(drawLineIntervalId); // stop animation when line is complete
                 status_message.setAttribute("style", "display: none;")
               }
            }
        }

        function reset_grid_buttonPressed(e) {
            theCanvas.width = theCanvas.width; // Reset grid
            drawGrid();
        }
}

