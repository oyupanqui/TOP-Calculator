const buttons = document.querySelectorAll('.btn');
const mathButtons = document.querySelectorAll('.btn-math');

const equalBtn = document.querySelector('#equalBtn');

const screenUp = document.querySelector('.upper-line');
const screenDown = document.querySelector('.down-line');

const resetBtn = document.querySelector('.reseter');

screenUp.textContent = '';
screenDown.textContent = 0;

let val1 = 0;
let val2 = 0;
let operator = '';

function addition (val1, val2) {
    return val1 + val2;
}

function subtract (val1, val2) {
    return val1 - val2;
}

function multiplication (val1, val2) {
    return val1 * val2;
}

function division (val1, val2) {
    if (val2 === 0) {
        alert('You broke the calculator!')
        return 'null'}
    else return val1 / val2;
}

buttons.forEach(btn => {
    btn.addEventListener('click', (e => {
        if (screenDown.textContent === '0') {
            screenDown.textContent = btn.textContent
        } else screenDown.textContent += btn.textContent
    }))
})

mathButtons.forEach(btn => {
    btn.addEventListener('click', (e => {
        val1 = Number(screenDown.textContent);
        screenUp.textContent = screenDown.textContent;
        screenUp.textContent += btn.textContent;
        screenDown.textContent = '0'
        operator = btn.textContent
    }))
})

equalBtn.addEventListener('click', (e => {
    val2 = Number(screenDown.textContent);
    screenUp.textContent += screenDown.textContent

    switch (operator) {
        case '+':
            return screenDown.textContent = addition (val1, val2);
        case '-':
            return screenDown.textContent = subtract (val1, val2);
        case '*':
            return screenDown.textContent = multiplication (val1, val2);
        case '/':
            return screenDown.textContent = division (val1, val2);
        default:
            return null
    }
}))

resetBtn.addEventListener('click', (e => {
    let val1 = 0;
    let val2 = 0;
    let operator = '';
    screenDown.textContent = '0'
    screenUp.textContent = ''
}))