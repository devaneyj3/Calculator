//jshint esversion:6
const calculation = document.querySelector('.calculation');
const output = document.querySelector('.output');

let buffer = '0';

let operator;

calculation.addEventListener('click', (event) => {
    buttonClick(event.target.textContent);
    
});

function buttonClick( value) {
    if ( isNaN(parseInt(value))) {
        //handle symbol button
        handleSymbol( value);
        }
    else {
        //handle number button when pressed
        handleNumber( value);
    }
}

function handleNumber( value) {
    if( buffer === '0') {
        buffer = value;
    }
    else {
        buffer += value;
        output.textContent = buffer;
    }
}

function handleSymbol( value) {
    resetBuffer();
    operator = value;
    switch (operator){
        case 'C':
            buffer = "0";
            output.textContent = buffer;
            break;
        case '/':
            divide();
            console.log("You are dividing");
            break;
        case 'X':
            multiply();
            console.log("You are multiplying");
            break;
        case '-':
            subtract();
            console.log("You are subtracting");
            break;
        case '+':
            outputNum = add(1, 2);
            console.log("You are adding = " + outputNum);
            return outputNum;
        case '=':
            console.log("You are equaling " + outputNum);
            output.textContent = outputNum;
            break;
    }
}

function add( a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function resetBuffer() {
    buffer = ' ';
    output.textContent = buffer;
}