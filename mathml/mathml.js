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
	var aValue = $("#input_a").val();
	if (aValue == "") { aValue = "a" } 
	var bValue = $("#input_b").val();
	if (bValue == "") { bValue = "b" } 
	var cValue = $("#input_c").val();
	if (cValue == "") { cValue = "c" }
	$("math .a").each(function() {
	        $(this).text(aValue);
	    });
	$("math .b").each(function() {
	        $(this).text(bValue);
	    });
	$("math .c").each(function() {
	        $(this).text(cValue);
	    });
    }
     

}

        

  


