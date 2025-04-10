const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) {
                console.log("Tried to divide by 0. Please don't.");
                return;
            } else {
                return divide(a, b);
            }
        default:
            console.log("ERR: UNKNOWN OPERATION");
    }
}

const update = function (display, value) {
    let displayFontSize = 52;
    let maxDecimalPlaces = 9;
    let displayString = value.toLocaleString(undefined, {maximumFractionDigits: maxDecimalPlaces})
    
    if (displayString.length > 10) {
        for (let i = 0; i < displayString.length; i++) {
            displayFontSize -= 2;
        }
    }
    display.style.fontSize = displayFontSize < 28 ? "28px" : displayFontSize + "px";
    display.textContent = displayString;
}

let a = null, b = null, operator = null;
let displayValue = 0;
let operationsComplete = false;

let numDigits = 0;
const maxDigits = 12;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator-btn");
const equals = document.querySelector(".equals-btn");
const clear = document.querySelector(".clear-btn");

display.textContent = displayValue;

digits.forEach((button) => {
    button.addEventListener("click", () => {
        if (operationsComplete) {
            displayValue = 0;
            operationsComplete = false;
        }
        if (numDigits < maxDigits) {
            displayValue *= 10;
            displayValue += parseInt(button.textContent);
            update(display, displayValue);
            numDigits++;
        }
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Operator button clicked");
        numDigits = 0; // about to enter a new number, reset digit counter

        if (!operator) // if operator isn't set it's the first operation, otherwise we're chaining operations
            a = displayValue;
        else {
            b = displayValue;
            a = operate(a, b, operator);
            displayValue = a;
        }

        if (button.classList.contains("add"))
            operator = '+';
        else if (button.classList.contains("subtract"))
            operator = '-';
        else if (button.classList.contains("multiply"))
            operator = '*';
        else if (button.classList.contains("divide"))
            operator = '/';
        else console.log("Unknown operator button clicked");

        console.log("Operator: " + operator);
        
        update(display, displayValue);
        displayValue = null;        
        
        operationsComplete = false;
    });
});

equals.addEventListener("click", () => {
    console.log("Equals button clicked");
    numDigits = 0; // about to enter a new number, reset digit counter
    
    if (a === null)
        a = displayValue;
    if (operator != null) {
        b = displayValue;

        displayValue = operate(a, b, operator);
        update(display, displayValue);

        operator = null;
        operationsComplete = true;
    }
});

clear.addEventListener("click", () => {
    console.log("Clear button clicked");
    a = null;
    b = null;
    operator = null;
    displayValue = 0;
    update(display, displayValue);
});