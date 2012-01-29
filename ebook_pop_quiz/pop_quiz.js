window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
    toggleInteractiveContent();
    loadEventHandlers();
}

function toggleInteractiveContent() {
    // Select all elements with "noninteractive" @class attributes on them, and hide them
    $(".noninteractive").css("display", "none");
    // Select all elements with "interactive" @class attribute, and delete that @class to make them appear
    $(".interactive").removeClass("interactive");
}

function loadEventHandlers() {
    $(".wrong, .correct, .wrong *, .correct *").bind('mousedown touchstart', function (e) {
	// Prevent default UI behavior in iBooks for iPhone/iPad for <li>s
	e.preventDefault();
	var answerSelected = e.target;
	var answerClass = answerSelected.getAttribute("class");
	// Only change class values on main <li>, not any child elements thereof
	if (answerClass == "wrong" || answerClass == "correct") {
	    var answerNewClass = answerClass + "_active";
	    answerSelected.setAttribute("class", answerNewClass);
	} else {
	    // If we're on a child of the <li>, look for parent <li> and trigger mousedown/touchstart on it
	    $(this).parent('li.correct,li.wrong').trigger('mousedown');
	    $(this).parent('li.correct,li.wrong').trigger('mouseup');
	}
    });
    $(".wrong, .correct, .wrong *, .correct *").bind('mouseup touchend', function (e) {
	// Prevent default UI behavior in iBooks for iPhone/iPad for <li>s
	e.preventDefault();
	var answerSelected = e.target;
	var answerClass = answerSelected.getAttribute("class");
	// Only change class values on main <li>, not any child elements thereof
	if (answerClass == "wrong_active" || answerClass == "correct_active") {
	    var answerNewClass = answerClass.replace(/_active/, "");
	    answerSelected.setAttribute("class", answerNewClass);
	} else {
	    // If we're on a child of the <li>, look for parent <li> and trigger mouseup/touchend on it
	    $(this).parent('li.correct_active,li.wrong_active').trigger('mouseup');
	    $(this).parent('li.correct_active,li.wrong_active').trigger('touchend');
	}
    });
}

        

  


