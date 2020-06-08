//calculator operations
const add = (a , b) => a + b;
const sub = (a , b) => a - b;
const mul = (a , b) => a * b;
const div = (a , b) => a / b;

function operate(a , b , c) {
    switch (c) {
        case 'add':
            return add(a , b);
            break;
        case 'sub':
            return sub(a , b);
            break;
        case 'mul':
            return mul(a , b);
            break;
        case 'div':
            return div(a , b);
            break;
    }
}

//input selection and modification
const elem = document.getElementById('inputs');

//numbers go in display
const buttonId = Array.from(document.getElementsByClassName('numBut'));
const eventButton = buttonId.map(x => x.addEventListener('click', function(e){
    elem.innerHTML = elem.innerHTML + x.id
}));

let a = 0;
let b = 0;
let c = '';
let d = 1

//Clear Button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function(e){
    elem.innerHTML = '';
    a = 0;
    b = 0;
    c = '';
    d = 1;
});

//Operation Buttons
const addButton = document.getElementById('plus');
const subButton = document.getElementById('subtract');
const mulButton = document.getElementById('multiply');
const divButton = document.getElementById('divide');
const entButton = document.getElementById('enter');

addButton.addEventListener('click', function(e){
    a = +elem.innerHTML + a;
    c = 'add';
    elem.innerHTML = '';
});

subButton.addEventListener('click', function(e){
    a = +elem.innerHTML - a;
    c = 'sub';
    elem.innerHTML = '';
});

mulButton.addEventListener('click', function(e){
    a = +elem.innerHTML * d;
    d = a;
    c = 'mul';
    elem.innerHTML = '';
});

divButton.addEventListener('click', function(e){
    if ( a == 0)
        a = +elem.innerHTML;
    else
        a = d / +elem.innerHTML;
    d = a;
    c = 'div';
    elem.innerHTML = '';
});

entButton.addEventListener('click', function(e){
    b = +elem.innerHTML;
    elem.innerHTML = Math.round(operate(a , b , c) * 1000000000) / 1000000000;
});