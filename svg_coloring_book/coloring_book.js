window.addEventListener('load', eventWindowLoaded, false);	

function eventWindowLoaded() {
   add_coloring_book_events();
}

function add_coloring_book_events() {
    // Add click events for colorable portions of drawing
    // Oddly, the selector $('path.colorable') does not work in iBooks reader, although it does in Mobile Safari
    $('path[class="colorable"]').bind("click", function(event) {
	// Set the fill of clicked portion of drawing to the color chosen in palette below
	color_chosen = $("#color_chosen").html();
        $(this).attr("fill", color_chosen); 
    });

    // Add click events for color palette
    $('.color_choice').bind("click", function(event) {
       // Get button id, which is the color name 
       color_chosen = $(this).attr("id");
       // Set color_chosen text to the name of color clicked
       $("#color_chosen").html(color_chosen); 
    });

    // Add click events for reset button, which reverts the fill of the entire drawing to white
    $('#reset_image').bind("click", function(event) {
       // Get all the colorable elements and set fill back to white
       $('path[class="colorable"]').attr("fill", "white");
    });
}