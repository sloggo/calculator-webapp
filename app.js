const operatorButtons = document.querySelectorAll('.operatorButton');
const numberButtons = document.querySelectorAll('.numberButton')
let currentNumber = '';
let currentNumberDisplay = document.querySelector('.currentDisplay#number')

let numberOne = null;
let numberOneDisplay = document.querySelector('p.numberOne');

let numberTwo = null;
let numberTwoDisplay = document.querySelector('p.numberTwo');

let operator = '';
let operatorDisplay = document.querySelector('p.operatorDisplay');

function operatorButtonClick(button){
    console.log(button.id+ ' clicked')
    if(!numberOne){
        operator = button.id;
        numberOne = parseInt(currentNumber)
        numberOneDisplay.textContent = numberOne
        currentNumber='';
        currentNumberDisplay.textContent = currentNumber;
        operatorDisplay.textContent = button.textContent
    } else{
        operator = button.id;
        console.log('must operate')
        //operate(numberOne, numberTwo, operator)
        numberTwo = parseInt(currentNumber)
        numberTwoDisplay.textContent = numberTwo
        currentNumber='';
        currentNumberDisplay.textContent = currentNumber;
        operatorDisplay.textContent = button.textContent
    }

}

function numberButtonClick(button){
    console.log(button.id+ ' clicked')
    currentNumber += button.id
    console.log('Current Number: '+currentNumber)
    currentNumberDisplay.textContent = currentNumber
}


for(const button of operatorButtons){
    button.addEventListener('click', (event) => operatorButtonClick(event.target))
}

for(const button of numberButtons){
    button.addEventListener('click', (event) => numberButtonClick(event.target))
}