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
            initGraphCalculator();
	}
	
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

		   for (i=0;i<=600;i+=75)
                   {
                   if (i == 300)
                   {
                      context.lineWidth = 3;
                      context.strokeStyle = 'red';
                   }
                   else
                   {
                      context.lineWidth = 1;
                      context.strokeStyle = 'black';
                   }
                   // First draw horizontal line
                   context.beginPath();
                   context.moveTo(i, 0);
                   context.lineTo(i, 600);
                   context.stroke();
                   context.closePath();
                   // Then draw vertical line
                   context.beginPath();
                   context.moveTo(0, i);
                   context.lineTo(600, i);
                   context.stroke();
                   context.closePath();
                   // Then add axis labels
       		   context.font         = '20px _sans';
		   context.textBaseline = 'top';
                   // horizontal labels
                   context.fillText  ("-4", 3, 305);
                   context.fillText  ("-3", 78, 305);
                   context.fillText  ("-2", 153, 305);
                   context.fillText  ("-1", 228, 305);
                   context.fillText  ("0", 306, 305);
                   context.fillText  ("1", 360, 305);
                   context.fillText  ("2", 435, 305);
                   context.fillText  ("3", 510, 305);
                   context.fillText  ("4", 587, 305);
                   // vertical labels
                   context.fillText  ("4", 305, 3);
                   context.fillText  ("3", 305, 78);
                   context.fillText  ("2", 305, 153);
                   context.fillText  ("1", 305, 228);
                   context.fillText  ("-1", 305, 351);
                   context.fillText  ("-2", 305, 426);
                   context.fillText  ("-3", 305, 501);
                   context.fillText  ("-4", 305, 576);
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

