window.addEventListener('load', eventWindowLoaded, false);	

function eventWindowLoaded() {

    // Add click events for colorable portions of drawing
    $('.colorable').bind("click", function(event) { 
        $(this).attr("fill", "red"); 
    });

    // Add click events for color palette
    $('.color_choice').bind("click", function(event) {
       // Get button id, which is the color name 
       color_selected = $(this).attr("id")
       // Set color_chosen text to the name of color clicked
       $("#color_chosen").html(color_selected); 
    });
}