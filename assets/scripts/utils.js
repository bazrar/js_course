function getUserInput() {
    return parseInt(userInput.value); 
}

function outputResult(calcNumber, currentDesc) {
    currentCalcuation.textContent = currentDesc; 
    currentResult.textContent = calcNumber;
}

function generateLogs(logEntry) {
    const logEntries = []; 
    logEntries.push(logEntry); 
    return logEntries; 
}
// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
const usrInput = getUserInput(); 
    const currentDesc = `${resultBeforeCalc} ${operator} ${usrInput}`;
    const logEntry = {
        operation: operator, 
        prevNumber: resultBeforeCalc, 
        usrInput, 
        result: calcNumber
    }
    const logs = generateLogs(logEntry);
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

function calculateResult(operator, initValue, usrInput) {
    if(operator === '+') {
        const currentRes = add(initValue, usrInput); 
        createAndWriteOutput(operator, initValue, currentRes); 
    } else if(operator === '-') {
        const currentRes = subtract(initValue, usrInput); 
        createAndWriteOutput(operator, initValue, currentRes); 
    } else if(operator === '*') {
        const currentRes = multiply(initValue, usrInput); 
        createAndWriteOutput(operator, initValue, currentRes); 

    } else {
        const currentRes = divide(initValue, usrInput); 
        createAndWriteOutput(operator, initValue, currentRes); 
    }
}

function calculation(operator) {
    const usrInput = getUserInput(); 
    const currentValue = parseInt(currentResult.textContent);

    switch(operator) { 
        case '+':
            calculateResult(operator, currentValue, usrInput); 
            break; 

        case '-':
            calculateResult(operator, currentValue, usrInput); 
            break; 

        case '*':
            calculateResult(operator, currentValue, usrInput); 
            break; 

        case '/': 
            calculateResult(operator, currentValue, usrInput);  
            break; 
    }
}