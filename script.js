const buttons = document.querySelectorAll('.btn')
const screenUp = document.querySelector('.upper-line')
const screenDown = document.querySelector('.down-line')

buttons.forEach(btn => {
    btn.addEventListener('click', (e => {
        console.log(e)
    }))
})