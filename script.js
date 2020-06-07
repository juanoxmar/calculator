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

const buttonId = Array.from(document.getElementsByClassName('numBut'));

const eventButton = buttonId.map(x => x.addEventListener('click', function(e){
    elem.innerHTML = elem.innerHTML + x.id
}));

//document.getElementById('9').addEventListener('click', );
//const clickFunction = document.getElementById('9').addEventListener('click', function(e){
//    elem.innerHTML = elem.innerHTML + document.getElementById('9').id
//});

//button push modifies input
//const buttonId = Array.from(document.getElementsByClassName('but'));
//buttonId[9].addEventListener('click', inputs(buttonId[9].id));