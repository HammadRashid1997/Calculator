let Total = 0;      // Total score
let buff = "0";     // what is in queue
let prevop;         // what operation took place previously

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if(isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buff;
}

function handleSymbol(sym) {
    switch(sym) {
        case 'C':
            buff = '0';
            Total = 0;
            break;
        case '=':
            if(prevop === null) {
                return;
            }
            flushOperation(parseInt(buff));
            prevop = null;
            buff = Total;
            Total = 0;
            break;
        case '+':
        case '-': 
        case '*':
        case '/':
        case '%':
            handleMath(sym);
            break;
        case '+/-': // Toggles the number's sign
            buff = (parseInt(buff) * -1).toString();
            break;
    }
}

function handleMath(symbol) {
    if(buff === '0' && symbol !== '+/-') {
        return;
    }
    const Buffer = parseInt(buff);
    if(Total === 0) {
        Total = Buffer;
    } else {
        flushOperation(Buffer);
    }
    prevop = symbol;
    buff = '0';
}

function flushOperation(Buffer) {
    if(prevop === '+') {
        Total = Total + Buffer;
    }
    if(prevop === '-') {
        Total = Total - Buffer;
    }
    if(prevop === '*') {
        Total = Total * Buffer;
    }
    if(prevop === '/') {
        // if(Buffer === 0) {
        //     return "Math Error";
        // }
        if(Total === 0) {
            return 0;
        }
        Total = Total / Buffer;
    }
    if(prevop === '%') {
        if(Total === 0) {
            return;
        } else {
            Total = Total / 100;
        }
    }
}

function handleNumber(numberString) {
    if(buff === "0") {
        buff = numberString;
    } else {
        buff = buff + numberString;
    }
}

function init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText)
    })
}

init();
