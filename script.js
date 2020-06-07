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

function inputs(a) {
    elem.value = elem.value + a;
}

//button push modifies input

const buttonElem = Array.from(document.getElementsByClassName('but'));

//keypush modiefies input