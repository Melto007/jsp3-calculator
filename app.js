let output = document.querySelector('.output')
let numbers = document.querySelectorAll('.numbers')
let clear = document.querySelector('.clear')
let back = document.querySelector('.back')
let equals = document.querySelector('.equals')

numbers.forEach((arr,index) => {
    numbers[index].addEventListener('click', function() {
        insert(numbers[index].value)
    })
})

function insert(value) {
    let position = output.value.charAt(output.value.length-1)
    if((position === value) && (position === '+' || position === '-' || position === '/' || position === '.' || position === '%' || position === '*')) {
        output.value = output.value.slice(0,-1)
    }else if((position === '+' || position === '-' || position === '/' || position === '.' || position === '%' || position === '*') && (value === '+' || value === '-' || value === '/' || value === '.' || value === '%' || value === '*')){
        output.value = output.value.slice(0,-1)
    }

    if(output.value.length < 18) {
        output.value += value
    }
}

function clearFn() {
    output.value = ''
}

clear.addEventListener('click', clearFn)

function backFn() {
    output.value = output.value.slice(0,-1)
}

back.addEventListener('click', backFn)

function equalsFn() {
    try {
        output.value = eval(output.value)
    }catch(err) {
        output.value = err
    }  
}
equals.addEventListener('click',equalsFn)

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case '1':
            insert('1')
            break
        case '2':
            insert('2')
            break
        case '3':
            insert('3')
            break
        case '4':
            insert('4')
            break
        case '5':
            insert('5')
            break
        case '6':
            insert('6')
            break
        case '7':
            insert('7')
            break
        case '8':
            insert('8')
            break
        case '9':
            insert('9')
            break
        case '0':
            insert('0')
            break
        case '/':
            insert('/')
            break
        case '+':
            insert('+')
            break
        case '*':
            insert('*')
            break
        case '-':
            insert('-')
            break
        case '.':
            insert('.')
            break
        case '%':
            insert('%')
            break
        case '=':
            equalsFn()
            break
        case 'Delete':
            clearFn()
            break
        case 'Backspace':
            backFn()
            break
        default:
            break
    }
}) 
