//selecting numbers andoperators from html
var numBtn = document.querySelectorAll('.numberBtn'), opBtn = document.querySelectorAll('.operatorBtn')
//getting the screens from html
var screen1 = document.getElementById('currentOperationScreen'), screen2 = document.getElementById('secondOperationScreen');
//num value1 and num value2
var value1 = screen1.innerText, value2 = screen2.innerText;
var value3 = value1 + value2;
//equals sign
var equalSign = document.getElementById('equalsBtn');

//gets numbers from html to screen1
var appendNumber = function(number) {
    screen1.textContent += number;
    value1 = screen1.innerText;
    value2 = screen2.innerText;
    value1 = parseInt(screen1.innerText);
    value2 = parseInt(screen2.innerText);
    value3 = value1 + value2;
    equalSign.addEventListener('click', function() {
        screen1.textContent = value3;
    })
}

//main issue I cant get value1,2,3 to get screen elements inside them

//gets operators from html doc and appends screen1 values to screen2
var appendOperator = function(operator) {
    screen1.textContent += operator;
    screen2.appendChild(screen1.firstChild);
}

//when clicked moves operators to screen1
opBtn.forEach((operator) =>
    operator.addEventListener('click', () => appendOperator(operator.textContent))
);

//when clicked moves numbers to screen one
numBtn.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

var addingScreen1AndScreen2 = function(num1,num2){
    console.log('penis')
    
}

// when operator is clicked += screen2.screen1 or screen2.appendChild.screen1

//parse the values to integers, after add them together and save to new variable, then covert variable num.toString, 
//then set the inner HTML to the bottom div first, then add the one thats set to the top, make sure to make both divs innerHTML. 
//Remeber to covert variables back and fourth