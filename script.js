const buttons = document.querySelectorAll('.btn')
const mathButtons = document.querySelectorAll('.btn-math')
const divBtn = document.querySelector('#divBtn')
const multBtn = document.querySelector('#multBtn')
const subtBtn = document.querySelector('#subtBtn')
const pointBtn = document.querySelector('#pointBtn')
const equalBtn = document.querySelector('#equalBtn')
const sumBtn = document.querySelector('#sumBtn')

const screenUp = document.querySelector('.upper-line')
const screenDown = document.querySelector('.down-line')

screenDown.textContent = 0

buttons.forEach(btn => {
    btn.addEventListener('click', (e => {
        if (screenDown.textContent === '0') {
            screenDown.textContent = btn.textContent
        } else screenDown.textContent += btn.textContent
    }))
})
/*
divBtn.addEventListener('click', (e => {
    let val1 = Number(screenDown.textContent)
    screenUp.textContent = screenDown.textContent + ' ' + divBtn.textContent
    screenDown.textContent = ''
}))
*/

mathButtons.forEach(btn => {
    btn.addEventListener('click', (e => {
        let val1 = Number(screenDown.textContent)
        screenDown.textContent += btn.textContent
    }))
})