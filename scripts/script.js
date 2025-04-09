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
    display.textContent = value;
}

let a = null, b = null, operator = null;
let displayValue = 0;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator-btn");
const equals = document.querySelector(".equals-btn");
const clear = document.querySelector(".clear-btn");

display.textContent = displayValue;

digits.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue *= 10;
        displayValue += parseInt(button.textContent);
        update(display, displayValue);
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Operator button clicked");
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

        a = displayValue;
        displayValue = null;

        // do operations here? So 1 + 1 + 2 + 3 = shows 7, per odin requirements

    });
});

equals.addEventListener("click", () => {
    console.log("Equals button clicked");
    b = displayValue;

    displayValue = operate(a, b, operator);
    update(display, displayValue);
});

clear.addEventListener("click", () => {
    console.log("Clear button clicked");
    a = null;
    b = null;
    operator = null;
    displayValue = 0;
    update(display, displayValue);
});