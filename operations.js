const numberButtons = document.querySelectorAll('[data-number]');

numberButtons.forEach((button) =>
    button.addEventListener('click', () => displayVal(button.textContent))
)

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

function operate(op, num1, num2) {
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
            return divide(num1, num2);
            break; 
    }
}

var number;
function displayVal(num) {
    var element = document.getElementsByClassName("screen");
    element[0].textContent += num;
}