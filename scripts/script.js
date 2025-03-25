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

// Create the functions that populate the display when you click the digit 
// buttons. You should store the content of the display (the number) in a 
// variable for use in the next step.

// button events