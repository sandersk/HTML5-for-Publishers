window.addEventListener('load', eventWindowLoaded, false);	

function eventWindowLoaded() {

    // Add click events for colorable portions of drawing
    $('.colorable').bind("click", function(event) {
	// Set the fill of clicked portion of drawing to the color chosen in palette below
	color_chosen = $("#color_chosen").html()
        $(this).attr("fill", color_chosen); 
    });

    // Add click events for color palette
    $('.color_choice').bind("click", function(event) {
       // Get button id, which is the color name 
       color_chosen = $(this).attr("id")
       // Set color_chosen text to the name of color clicked
       $("#color_chosen").html(color_chosen); 
    });
}