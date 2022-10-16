//selecting numbers andoperators from html
var numBtn = document.querySelectorAll('.numberBtn'), opBtn = document.querySelectorAll('.operatorBtn');
//getting the screens from html
var screen1 = document.getElementById('currentOperationScreen'), screen2 = document.getElementById('secondOperationScreen');
//num value1 and num value2
var value1 = ' ', value2 = ' ';

//equals sign
var equalSign = document.getElementById('equalsBtn');
//all clear
var clearScreens = document.getElementById('clearBtn');

var globalOperator = opBtn.innerText;

var appendNumber = function(number) {
    screen1.textContent += number;
    value1 = parseFloat(screen1.textContent);
    value2 = parseFloat(screen2.textContent);
}

for (i = 0; i < opBtn.length; i++) {
    opBtn[i].addEventListener('click', function() {
        screen2.textContent = value1;
    })
}
equalSign.addEventListener('click', e => {
    if (globalOperator === '+') {
        screen1.textContent = value1 + value2;
        screen2.textContent = ' ';
        value1 = screen1.textContent;
    } else if (globalOperator === '-') {
        screen1.textContent = value2 - value1;
        screen2.textContent = ' ';
        value1 = screen1.textContent;
    } else if (globalOperator === '×') {
        screen1.textContent = value2*value1; 
        screen2.textContent = ' ';
        value1 = screen1.textContent;
    } else if (globalOperator === '÷') {
        screen1.textContent = value2 / value1;
        value1 = screen1.textContent;
    }
})

clearScreens.addEventListener('click', e => {
    screen1.textContent = ' ';
    screen2.textContent = ' ';
})

var appendOperator = function(operator) {
    screen1.textContent = operator;
    opBtn = screen2.appendChild(screen1.firstChild);
    globalOperator = operator;    
}

opBtn.forEach((operator) =>
    operator.addEventListener('click', () => appendOperator(operator.textContent))
);

numBtn.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);


      

