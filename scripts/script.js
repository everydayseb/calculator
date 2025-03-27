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

let a, b, operator;
let displayValue = 0;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".number-btn");
display.textContent = displayValue;

digits.forEach((ele) => {
    ele.addEventListener("click", () => {
        displayValue *= 10;
        displayValue += parseInt(ele.textContent);
        display.textContent = displayValue;
    });
});
