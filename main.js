var numBtn = document.querySelectorAll('.numberBtn');
var opBtn = document.querySelectorAll('.operatorBtn')
var screen1 = document.getElementById('currentOperationScreen');
var screen2 = document.getElementById('previousScreenOperation');

var inputOne = " ";



function appendNum(number) {
    parseInt(number)
    screen1.textContent += number;
    inputOne = number
}

function appendOp(operator) {
    screen1.textContent += operator;
}

function moveToScreen2() {

}

opBtn.forEach((operator) =>
    operator.addEventListener('click', () => appendOp(operator.textContent)),
)

numBtn.forEach((button) => 
    button.addEventListener('click', () => appendNum(button.textContent))
)

//parse the values to integers, after add them together and save to new variable, then covert variable num.toString, 
//then set the inner HTML to the bottom div first, then add the one thats set to the top, make sure to make both divs innerHTML. 
//Remeber to covert variables back and fourth