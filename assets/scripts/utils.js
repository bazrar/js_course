function getUserInput() {
    return parseInt(userInput.value); 
}

function outputResult(calcNumber, currentDesc) {
    currentCalcuation.textContent = currentDesc; 
    currentResult.textContent = calcNumber;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const currentDesc = `${resultBeforeCalc} ${operator} ${getUserInput()}`; 
    outputResult(calcNumber, currentDesc); 
}

function add(currentRes, usrInput) {
    return currentRes + usrInput; 
}
function subtract(currentRes, usrInput) {
    return currentRes - usrInput; 
}
function multiply(currentRes, usrInput) {
    return currentRes * usrInput; 
}
function divide(currentRes, usrInput) {
    return currentRes / usrInput; 
}

function calculation(operator) {
    const usrInput = getUserInput(); 
    const currentValue = parseInt(currentResult.textContent);
    const defaultValue = 0; 
    let initialRes = defaultValue; 
    let currentRes = defaultValue; 

    switch(operator) { 
        case '+':
            initialRes = currentValue; 
            currentRes = add(initialRes, usrInput); 
            createAndWriteOutput('+', initialRes, currentRes); 
            break; 
        case '-':
            initialRes = currentValue; 
            currentRes = subtract(initialRes, usrInput); 
            createAndWriteOutput('-', initialRes, currentRes); 
            break; 

        case '*':
            initialRes = currentValue; 
            currentRes = multiply(initialRes, usrInput); 
            createAndWriteOutput('*', initialRes, currentRes); 
            break; 

        case '/': 
            initialRes = currentValue; 
            currentRes = divide(initialRes, usrInput); 
            createAndWriteOutput('/', initialRes, currentRes); 
            break; 
    }
}