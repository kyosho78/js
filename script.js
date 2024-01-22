let currentCalc = '';
let currentResult = 0;
let hasCalculated = false; // New variable to track if a calculation has been performed

function press(num) {
    currentCalc += num;
    updateCalculation();
    hasCalculated = false; // Reset this flag when a new number is pressed
}

function operator(op) {
    currentCalc += ' ' + op + ' ';
    updateCalculation();
    hasCalculated = false; // Reset this flag when a new operator is pressed
}

function calculate() {
    try {
        currentResult = eval(currentCalc);
        hasCalculated = true; // Set the flag to true as calculation is done
        updateResult();
    } catch (e) {
        currentResult = 'Error';
        updateResult();
    }
}

function clearCalc() {
    currentCalc = '';
    currentResult = 0;
    updateCalculation();
    updateResult();
    hasCalculated = false; // Reset this flag when cleared
}

function updateCalculation() {
    document.getElementById('calculation').innerText = currentCalc;
}

function updateResult() {
    if (hasCalculated) { // Only update the result display if a calculation has been performed
        document.getElementById('result').innerText = currentResult;
    } else {
        document.getElementById('result').innerText = ''; // Clear the result display otherwise
    }
}
