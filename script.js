//calculator operations
const add = (a , b) => Math.round(a + b) * 1000000000 / 1000000000;
const sub = (a , b) => Math.round(a - b) * 1000000000 / 1000000000;
const mul = (a , b) => Math.round(a * b) * 1000000000 / 1000000000;

const div = (a , b) => {
    if (b == 0)
        return 'CANT DIVIDE BY ZERO';
    else
        return Math.round(a / b) * 1000000000 / 1000000000;
}

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

const pButton = document.getElementById('.');

pButton.addEventListener('click', function(e){
    if (!elem.innerHTML.includes('.'))
        elem.innerHTML = elem.innerHTML + pButton.id
});

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
    if (c !== '')
        a = operate(a , +elem.innerHTML , c);
    else
        a = +elem.innerHTML;
    c = 'add';
    elem.innerHTML = '';
});

subButton.addEventListener('click', function(e){
    if (c !== '')
        a = operate(a , +elem.innerHTML , c);
    else
        a = +elem.innerHTML;
    c = 'sub';
    elem.innerHTML = '';
});

mulButton.addEventListener('click', function(e){
    if (c !== '')
        a = operate(a , +elem.innerHTML , c);
    else
        a = +elem.innerHTML;
    c = 'mul';
    elem.innerHTML = '';
});

divButton.addEventListener('click', function(e){
    if (c !== '')
        a = operate(a , +elem.innerHTML , c);
    else
        a = +elem.innerHTML;
    c = 'div';
    elem.innerHTML = '';
});

entButton.addEventListener('click', function(e){
    b = +elem.innerHTML;
    elem.innerHTML = operate(a , b , c);
});