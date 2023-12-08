let x = 0;
let y = 0;
let setFirst = -1;
let setSecond = -1;
let operation = '';
let setEqual = false;

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    x = 0;
    y = 0;
    operation = '';
    setEqual = false;
    setFirst = -1;
    setSecond = -1;
    document.querySelector('.input').textContent = '';
});

const buttons = document.querySelectorAll('.calc-body button');
buttons.forEach((button) => {
    button.addEventListener('click', () => 
        updateDisplay(button.textContent)
    );
});

function updateDisplay(buttonVal) {
    document.querySelector('.input').textContent += buttonVal;
    let display = document.querySelector('.input').textContent;
    if ('+-*/'.includes(buttonVal) && setFirst === -1) {
        operation = buttonVal;
        setFirst = display.length;
        x = parseFloat(display.slice(0, display.length));
    } else if (setEqual) {
        operation = buttonVal;
        setFirst = display.length;
        setEqual = false;
    } else if ('+-*/'.includes(buttonVal) || buttonVal === '=') {
        y = parseFloat(display.slice(setFirst, display.length));
        x = operate(x, y, operation);
        if ('+-*/'.includes(buttonVal)) {
            operation = buttonVal;
            setFirst = display.length;
        } else if (buttonVal === '=') {
            document.querySelector('.input').textContent = x;
            setFirst = document.querySelector('.input').textContent.length;
            setEqual = true;
        }
         
        setSecond = -1;
        y = 0;
    }
}

function operate(x, y, operation) {
    if (operation === '*') {
        return multiply(x, y);
    } else if (operation === '+') {
        return add(x, y);
    } else if (operation === '-') {
        return subtract(x, y);
    } else {
        return divide(x, y);
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) return "Divide by 0 Error";
    return x / y;
}