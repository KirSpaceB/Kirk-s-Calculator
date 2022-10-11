var calcScreen = document.querySelector('.calculator-screen');
var numOne = document.querySelector('.one');
var numTwo = document.querySelector('.two');
var numThree = document.querySelector('.three');
var numFour = document.querySelector('.four');
var numFive = document.querySelector('.five');
var numSix = document.querySelector('.six');
var numSeven = document.querySelector('.seven');
var numEight = document.querySelector('.eight')
var numNine = document.querySelector('.nine');
var addition = document.querySelector('.addition');
var subtract = document.querySelector('.subtract');
var multiply = document.querySelector('.multiply');
var divide = document.querySelector('.divide');
var equal = document.querySelector('.equalsign');

//Giving the numbers clickability
//The functions searches the doc finds the id of the specific tag that has calc-screen then .value gets the integer value of 'calc-screen' then add numOne value to it.
function onClickButton1() {
    document.getElementById('calc-screen').value += numOne.value;
}
function onClickButton2() {
    document.getElementById('calc-screen').value += numTwo.value;
}
function onClickButton3() {
    document.getElementById('calc-screen').value += numThree.value;
}
function onClickButton4() {
    document.getElementById('calc-screen').value += numFour.value;
}
function onClickButton5() {
    document.getElementById('calc-screen').value += numFive.value
}
function onClickButton6() {
    document.getElementById('calc-screen').value += numSix.value;
}
function onClickButton7() {
    document.getElementById('calc-screen').value += numSeven.value;
}
function onClickButton8() {
    document.getElementById('calc-screen').value += numEight.value;
}
function onClickButton9() {
    document.getElementById('calc-screen').value += numNine.value;
}

//Giving operators clickability
function addOnClick() {
    document.getElementById('calc-screen').value += addition.value;
}
function subOnClick() {
    document.getElementById('calc-screen').value += subtract.value;
}
function multiplyOnClick() {
    document.getElementById('calc-screen').value += multiply.value;
}
function divideOnClick() {
    document.getElementById('calc-screen').value += divide.value;
}

operate(num1,num2,+) {
    
}
// How can we do an hold a number while calling the operational to add another number
