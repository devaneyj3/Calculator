//jshint esversion:6
const output = document.querySelector('.output');
let buffer = '0';
let previousOperator;
let runningTotal = 0;

document.querySelector('.calculation').addEventListener('click', function(event) {
    buttonClick(event.target.textContent);
});

function buttonClick(value) {
    if ( isNaN(parseInt(value))) {
        handleSymbol(value);
    }
    else {
        handleNumber( value);
    }
}

function handleNumber( value) {
    if( buffer === '0') {
        buffer = value;
        output.textContent = value;
    }
    else {
        console.log('here');
        buffer += value;
        console.log("Running total inside HandleNumber function is ", buffer);
        output.textContent = buffer;
    }
}