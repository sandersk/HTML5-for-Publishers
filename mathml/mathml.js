window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
    MathMLApp();
}

function MathMLApp(){
    var upButton = document.getElementById('up_button');
    var downButton = document.getElementById('down_button');
    var quadraticFormula = document.getElementById('quadratic_formula');
    upButton.addEventListener('click', upButtonPressed, false);
    downButton.addEventListener('click', downButtonPressed, false);

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

}

        

  


