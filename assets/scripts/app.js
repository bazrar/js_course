const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentCalcuation = document.getElementById('current-calculation');
const currentResult = document.getElementById('current-result');

// create the child nodes
const buttons = document.getElementById('btn-add').parentNode.children;
const nodes = [...buttons];
nodes.forEach(node => myEventListener(node)); 

function myEventListener(btn) {
    btn.addEventListener('click', () => calculation(btn.textContent));
}
