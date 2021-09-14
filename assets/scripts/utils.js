function outputResult(value) {
    currentResult.textContent = value; 
}
function calculation(operator) {
    const input = parseInt(userInput.value); 
    const currentValue = parseInt(currentResult.textContent);
    let res = 0; 
    switch(operator) { 
        case '+': 
        res = currentValue + input; 
        outputResult(res)
        break; 

        case '-': 
        res = currentValue - input; 
        outputResult(res)
        break;

        case '*': 
        res = currentValue * input; 
        outputResult(res)
        break;

        case '/': 
        res = currentValue / input; 
        outputResult(res)
        break;
    }
}