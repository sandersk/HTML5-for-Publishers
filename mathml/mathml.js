window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
    MathMLApp();
}

function MathMLApp(){
    $("#input_a").bind('blur', updateFormula);
    $("#input_b").bind('blur', updateFormula);
    $("#input_c").bind('blur', updateFormula);
    
    $(".up_button").bind('click', function(e) {
	    var upButtonPressed = e.target;
	    var upButtonId = upButtonPressed.getAttribute("id");
	    var correspondingInputId = upButtonId.replace(/up/, 'input');
	    var correspondingInputElement = document.getElementById(correspondingInputId);
	    var currentInputValue = $(correspondingInputElement).val();
	    if (currentInputValue != "") {
		var newInputValue = parseInt(currentInputValue) + 1;
		$(correspondingInputElement).val(newInputValue);
		updateFormula();
	    } else {
		$(correspondingInputElement).val("1");
		updateFormula();
	    }
	});

    $(".down_button").bind('click', function(e) {
	    var downButtonPressed = e.target;
	    var downButtonId = downButtonPressed.getAttribute("id");
	    var correspondingInputId = downButtonId.replace(/down/, 'input');
	    var correspondingInputElement = document.getElementById(correspondingInputId);
	    var currentInputValue = $(correspondingInputElement).val();
	    if (currentInputValue != "") {
		var newInputValue = parseInt(currentInputValue) - 1;
		$(correspondingInputElement).val(newInputValue);
		updateFormula();
	    } else {
		$(correspondingInputElement).val("-1");
		updateFormula();
	    }
	});

    $("#plus_button").bind('click', function(e) {
	// Get all elements of @class "resizable"
	$(".resizable").each(function() {
		var resizableClass = $(this).attr("class");
		// Strip out "resizable" from class to get the size value
		var sizeValue = resizableClass.replace(/ resizable/, '');
		// Extract size value
		formulaSizeClassPrefix = sizeValue.split('_')[0];
		existingFormulaSize = Number(sizeValue.split('_')[1]);
		newFormulaSize = existingFormulaSize + 1;
		if (newFormulaSize > 5) {
		    alert("Formulas already displayed at maximum size");
		    // Exit jQuery each() loop
		    return false;
		}
		else {
		    newFormulaSizeClass = formulaSizeClassPrefix + '_' + String(newFormulaSize);
		    // Reconstruct new @class attribute and update element
		    newClassAttribute = newFormulaSizeClass + " resizable";
		    $(this).attr('class', newClassAttribute);
		}
	    });
    });

    $("#minus_button").bind('click', function(e) {
	// Get all elements of @class "resizable"
	$(".resizable").each(function() {
		var resizableClass = $(this).attr("class");
		// Strip out "resizable" from class to get the size value
		var sizeValue = resizableClass.replace(/ resizable/, '');
		// Extract size value
		formulaSizeClassPrefix = sizeValue.split('_')[0];
		existingFormulaSize = Number(sizeValue.split('_')[1]);
		newFormulaSize = existingFormulaSize - 1;
		if (newFormulaSize < 1) {
		    alert("Formulas already displayed at minimum size");
		    // Exit jQuery each() loop
		    return false;
		}
		else {
		    newFormulaSizeClass = formulaSizeClassPrefix + '_' + String(newFormulaSize);
		    // Reconstruct new @class attribute and update element
		    newClassAttribute = newFormulaSizeClass + " resizable";
		    $(this).attr('class', newClassAttribute);
		}
	    });
    });

    $("#solve_button").bind('click', function(e) {
	// Prevent default form-submission action and try to solve the equation
    	e.preventDefault();
	updateFormula(e);
    });

    function updateFormula (e) {
	// Start out with no error text
	var errorText = "";
	var aValue = $("#input_a").val();
	var bValue = $("#input_b").val();
	var cValue = $("#input_c").val();
	// Regex pattern for acceptable a values, which must be integers > 0
	var aPattern = /^-?[1-9][0-9]*$/;
	// Regex pattern for acceptable b/c values, which must be integers >= 0
	var bcPattern = /^(0|(-?[1-9][0-9]*))$/;
	if (aValue == "") {
	    errorText += "Enter integer for <em>a</em><br/>";
	    // Reset aValue to default of "a"
	    aValue = "a";
	    // Reset answer to "?"
	    $("#equation_solution").text("?");
	} else if (!(aValue.match(aPattern))) {
	    errorText += "Invalid value for <em>a</em>: " + aValue + "<br/>";
	    // Reset aValue to default of "a"
	    aValue = "a";
	    // Reset answer to "?"
	    $("#equation_solution").text("?");
	}
	if (bValue == "") {
	    errorText += "Enter integer for <em>b</em><br/>";
	    // Reset bValue to default of "b"
	    bValue = "b";
	    // Reset answer to "?"
	    $("#equation_solution").text("?");
	} else if (!(bValue.match(bcPattern))) {
	    errorText += "Invalid value for <em>b</em>: " + bValue + "<br/>";
	    // Reset bValue to default of "b"
	    bValue = "b";
	    // Reset answer to "?"
	    $("#equation_solution").text("?");
	}
	if (cValue == "") {
	    errorText += "Enter integer for <em>c</em><br/>";
	    // Reset cValue to default of "c"
	    cValue = "c";
	    // Reset answer to "?"
	    $("#equation_solution").text("?");
	} else if (!(cValue.match(bcPattern))) {
	    errorText += "Invalid value for <em>c</em>: " + cValue + "<br/>";
	    // Reset cValue to default of "c"
	    cValue = "c";
	    // Reset answer to "?"
	    $("#equation_solution").text("?");
	}
	$("math .a").each(function() {
	        $(this).text(aValue);
	    });
	$("math .b").each(function() {
	        $(this).text(bValue);
	    });
	$("math .c").each(function() {
	        $(this).text(cValue);
	    });
	$("#error_log").html(errorText);
	// If error text is now empty, it means valid numbers have been entered for a, b, and c.
	// Go ahead and solve the quadratic equation
	if (errorText == "") {
	    solve_quadratic_equation(aValue, bValue, cValue);
	}
    }

    function solve_quadratic_equation(aValue, bValue, cValue) {
	var discriminant = (bValue*bValue) - 4*aValue*cValue;
	var equationSolution = "";
	if (discriminant < 0) {
	    // No solution to equation; display null set
	    $("#equation_solution").text("No Solution");
	} else if (discriminant == 0) {
	    equationSolution = -bValue/(2*aValue);
	    $("#equation_solution").text(equationSolution);
	} else {
	    var solution1 = (-bValue - Math.sqrt(discriminant))/(2*aValue);
	    var solution2 = (-bValue + Math.sqrt(discriminant))/(2*aValue);
	    equationSolution = String(solution1) + ", " + String(solution2);
	    $("#equation_solution").text(equationSolution);
	}
    }
     

}

        

  


