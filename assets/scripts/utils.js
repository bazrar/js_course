function outputResult(currentValue, currentDescription) {
    currentCalcuation.textContent = currentDescription; 
    currentResult.textContent = currentValue;
}

function calculation(operator) {
    const input = parseInt(userInput.value); 
    const currentValue = parseInt(currentResult.textContent);
    let currentDescription;
    let res = 0; 
    switch(operator) { 
        case '+': 
        currentDescription = `${currentValue} + ${input}`;
        res = currentValue + input; 
        outputResult(res, currentDescription);
        break; 

        case '-': 
        currentDescription = `${currentValue} - ${input}`;
        res = currentValue - input; 
        outputResult(res, currentDescription);
        break;

        case '*': 
        currentDescription = `${currentValue} * ${input}`;
        res = currentValue * input; 
        outputResult(res, currentDescription);   
        break;

        case '/': 
        currentDescription = `${currentValue} / ${input}`;
        res = currentValue / input; 
        outputResult(res, currentDescription);
        break;
    }
}