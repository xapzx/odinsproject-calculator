const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-op]');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const operand = document.getElementsByClassName("screen");
const pointButton = document.getElementById('point');
var number;
var shouldClear = false;
var operation = null;
var firstOperand;
var secondOperand;
var pointFlag = false;

//Add event listeners for each number button to display number when pressed
numberButtons.forEach((button) =>
    button.addEventListener('click', () => displayVal(button.textContent))
)

//Operation buttons functions
operationButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

equalsButton.addEventListener('click', () => equate());
clearButton.addEventListener('click', () => clear());
pointButton.addEventListener('click', () => appendPoint());

//Basic operation functions
function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//Perform operation on two numbers
function operate(op, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch(op) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return substract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            if(num2 === 0) {
                return "Divide by Zero Error!";
            }
            return divide(num1, num2);
            break; 
    }
}

//Display number on calculator screen
function displayVal(num) {
    if(shouldClear) {
        operand[0].textContent = '0';
        shouldClear = false;
    }

    if(operand[0].textContent === '0') {
        operand[0].textContent = "";
    }
    operand[0].textContent += num;
}

//Set the operation or evaluate expression if present
function setOperation(op) {
    if(operation !== null) {
        secondOperand = operand[0].textContent;
        equate(operation, firstOperand, secondOperand);
    }
    firstOperand = operand[0].textContent;
    operation = op;
    shouldClear = true;
    pointFlag = false;
}

//Clear the screen and variables
function clear() {
    operand[0].textContent = '0';
    operation = null;
    firstOperand = '';
    secondOperand = '';
    pointFlag = false;
}

//Evaluate expression
function equate() {
    if(operation === null)
        return null;
    secondOperand = operand[0].textContent;
    operand[0].textContent = operate(operation, firstOperand, secondOperand);
    operation = null;
}

//Append decimal point
function appendPoint() {
    if(pointFlag)
        return null;
    operand[0].textContent += '.';
    pointFlag = true;
}