window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
    MathMLApp();
}

function MathMLApp(){
    var upButton = document.getElementById('up_button');
    var downButton = document.getElementById('down_button');
    var quadraticFormula = document.getElementById('quadratic_formula');
    var inputA = document.getElementById('input_a');
    var inputB = document.getElementById('input_b');
    var inputC = document.getElementById('input_c');
    upButton.addEventListener('click', upButtonPressed, false);
    downButton.addEventListener('click', downButtonPressed, false);
    inputA.addEventListener('blur', updateFormula, false);
    inputB.addEventListener('blur', updateFormula, false);
    inputC.addEventListener('blur', updateFormula, false);

    function upButtonPressed(e) {
	// Get class attribute on quadratic formula element
	formula_size_class = quadraticFormula.getAttribute("class");
	// Extract size value
        formula_size_class_prefix = formula_size_class.split('_')[0];
	existing_formula_size = Number(formula_size_class.split('_')[1]);
	new_formula_size = existing_formula_size + 1;
	if (new_formula_size > 5) {
	    alert("Formula already displayed at maximum size");
	}
	else {
	    new_formula_size_class = formula_size_class_prefix + '_' + String(new_formula_size);
	    quadraticFormula.setAttribute("class", new_formula_size_class)
	}
    }

    function downButtonPressed(e) {
	// Get class attribute on quadratic formula element
	formula_size_class = quadraticFormula.getAttribute("class");
	// Extract size value
        formula_size_class_prefix = formula_size_class.split('_')[0];
	existing_formula_size = Number(formula_size_class.split('_')[1]);
	new_formula_size = existing_formula_size - 1;
	if (new_formula_size < 1) {
	    alert("Formula already displayed at minimum size");
	}
	else {
	    new_formula_size_class = formula_size_class_prefix + '_' + String(new_formula_size);
	    quadraticFormula.setAttribute("class", new_formula_size_class)
	}
    }

    function updateFormula (e) {
	// Start out with no error text
	var errorText = "";
	var aValue = $("#input_a").val();
	var bValue = $("#input_b").val();
	var cValue = $("#input_c").val();
	var naturalNumPattern = /^[1-9][0-9]*$/;
	if (aValue == "") {
	    errorText += "Enter integer for <em>a</em><br/>";
	    // Reset aValue to default of "a"
	    aValue = "a";
	} else if (!(aValue.match(naturalNumPattern))) {
	    errorText += "Invalid value for <em>a</em>: " + aValue + "<br/>";
	    // Reset aValue to default of "a"
	    aValue = "a";
	}
	if (bValue == "") {
	    errorText += "Enter integer for <em>b</em><br/>";
	    // Reset bValue to default of "b"
	    bValue = "b";
	} else if (!(bValue.match(naturalNumPattern))) {
	    errorText += "Invalid value for <em>b</em>: " + bValue + "<br/>";
	    // Reset bValue to default of "b"
	    bValue = "b";
	}
	if (cValue == "") {
	    errorText += "Enter integer for <em>c</em><br/>";
	    // Reset cValue to default of "c"
	    cValue = "c";
	} else if (!(cValue.match(naturalNumPattern))) {
	    errorText += "Invalid value for <em>c</em>: " + cValue + "<br/>";
	    // Reset cValue to default of "c"
	    cValue = "c";
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
    }
     

}

        

  


