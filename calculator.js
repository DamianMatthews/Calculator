const screen = document.createElement("div");
screen.id = "screen";
// screen.textContent = "S";
container.appendChild(screen);

const buttons = document.createElement("div");
buttons.id = "buttons";
container.appendChild(buttons);

for (x=0; x<16; x++) {
    const squares = document.createElement("button");
    squares.classList = "squares";
    squares.id = "square"+x;
    // squares.textContent = x;
    buttons.appendChild(squares);
}
 document.getElementById("square0").textContent = "7";
 document.getElementById("square1").textContent = "8";
 document.getElementById("square2").textContent = "9";
 document.getElementById("square3").textContent = "*";
 document.getElementById("square4").textContent = "4";
 document.getElementById("square5").textContent = "5";
 document.getElementById("square6").textContent = "6";
 document.getElementById("square7").textContent = "/";
 document.getElementById("square8").textContent = "1";
 document.getElementById("square9").textContent = "2";
 document.getElementById("square10").textContent = "3";
 document.getElementById("square11").textContent = "+";
 document.getElementById("square12").textContent = "C";
 document.getElementById("square13").textContent = "0";
 document.getElementById("square14").textContent = "=";
 document.getElementById("square15").textContent = "-";
 document.getElementById("square3").classList = 'operations';
 document.getElementById("square7").classList = 'operations';
 document.getElementById("square11").classList = 'operations';
 document.getElementById("square15").classList = 'operations';
 document.getElementById("square14").id = 'equals';
 document.getElementById("equals").className = 'equals';

 let a = null;
 let b = null;
 let result;
 let operator = null;
 let operatorClicked = false;
// add function 
function add (a, b) {
    return Number(a)+Number(b);
}
// subtract function 
function subtract (a, b) {
    return Number(a) - Number(b);
}
// division function 
function divide (a, b) {
    if (b === 0) {
        return Number(Infinity);
    } else {
        return Number(a)/Number(b);
    }
}
// multiplication function 
function multiply (a, b) {
    return Number(a)*Number(b);
}

function operate (operator, a, b) {
    if (operator === '*') {
        return multiply(a,b);
        } else if (operator === '+') {
        return add(a,b);
        } else if (operator === '/') {
        return divide(a,b);
        } else if (operator === '-') {
        return subtract(a, b);   
        }
}

const numbers = document.getElementsByClassName("squares");

for (i=0; i<numbers.length; i++) {
    numbers[i].addEventListener("click", function (e) {
        if (Number(screen.textContent) === result) {
            document.getElementById("screen").textContent = '';
        }
    document.getElementById("screen").textContent += e.target.textContent;
    operatorClicked = false;
    // console.log(operatorClicked);
    });
    
}

const operations = document.getElementsByClassName("operations");

for (i=0; i<operations.length; i++) {
    operations[i].addEventListener("click", function (e) {  
    if (operatorClicked === true) {
        operator = e.target.textContent;
        return false;
    } else {
        if (a===null) {
            a = document.getElementById("screen").innerText;
        } else {
            b = document.getElementById("screen").innerText;
        }
    document.getElementById("screen").textContent = '';
    if (operator === null) {
        operator = e.target.textContent;
    } else if (a && b) {
        result = operate(operator, a, b);
        screen.textContent = result;
        a = result;
        b = null;
        operator = e.target.textContent;
    } 
    operatorClicked = true;
        }
    });
}

const equals = document.getElementById("square14");

document.getElementById("equals").addEventListener("click", function () {
   if (a && b===null) {
    b = Number(screen.textContent);
    // console.log(a, screen.textContent);
    result = operate(operator, a, b);
    result === Infinity? screen.textContent = '0 Divisor Error':screen.textContent = result;
    // console.log(result, a, b);
    operatorClicked = true;
   } else {
       return false;
   }
});

const clear = document.getElementById("square12");

clear.addEventListener("click", function () {
    updateScreen();
});

function updateScreen () {
    screen.textContent = '';
    a = null;
    b = null;
    operator = null;
}

