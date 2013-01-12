window.addEventListener('load', eventWindowLoaded, false);	

function eventWindowLoaded() {
    $('.colorable').bind("click", function(event) { 
        $(this).attr("fill", "red"); 
    });
}