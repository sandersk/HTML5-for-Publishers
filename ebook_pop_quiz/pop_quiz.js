window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
    loadEventHandlers();
}

function loadEventHandlers() {
    var bodyElement = document.getElementById('body_element');
    var liElements = document.getElementsByTagName("li");
    // Iterate through all <li>s in the array, which have indexes from 0 to (length of array - 1)
    var num_lis = liElements.length - 1;
    for (i=0;i<=num_lis;i++) {
	liClass = liElements[i].getAttribute("class");
	if (liClass == "wrong" || liClass == "correct") {
	    liElements[i].addEventListener('mousedown', answerPressed, false);
	    liElements[i].addEventListener('mouseup', answerReleased, false);
	    liElements[i].addEventListener('touchstart', answerPressed, false);
	    liElements[i].addEventListener('touchend', answerReleased, false);
	}
    }

    // Prevent default UI behavior in iBooks for iPhone/iPad for <li>s
    function answerPressed(e) {
	e.preventDefault();
	var answerSelected = e.target;
	var answerOldClass = answerSelected.getAttribute("class");
	var answerNewClass = answerOldClass + "_active";
	answerSelected.setAttribute("class", answerNewClass);
    }

    function answerReleased(e) {
	e.preventDefault();
	var answerSelected = e.target;
	var answerOldClass = answerSelected.getAttribute("class");
	var answerNewClass = answerOldClass.replace(/_active/, "");
	answerSelected.setAttribute("class", answerNewClass);
    }
}

        

  


