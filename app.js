const operatorButtons = document.querySelectorAll('.operatorButton');
const numberButtons = document.querySelectorAll('.numberButton')
const equalsButtonDisplay = document.querySelector('.equalsButton')

let currentNumber = '';
let currentNumberDisplay = document.querySelector('.currentDisplay#number')

let numberOne = null;
let numberOneDisplay = document.querySelector('p.numberOne');

let numberTwo = null;
let numberTwoDisplay = document.querySelector('p.numberTwo');

let operator = '';
let operatorDisplay = document.querySelector('p.operatorDisplay');

let summedUp = false;

function operatorButtonClick(button){
    console.log(button.id+ ' clicked')
    if(!numberOne){
        operator = button.id;
        numberOne = parseInt(currentNumber)
        numberOneDisplay.textContent = numberOne
        currentNumber='.';
        currentNumberDisplay.textContent = currentNumber;
        operatorDisplay.textContent = button.textContent
    } else if(!numberTwo){
        operator = button.id;
        console.log('must operate')
        //operate(numberOne, numberTwo, operator)
        numberTwo = parseInt(currentNumber)
        let result = operate(numberOne, numberTwo, operator)
        numberOne = result;
        numberOneDisplay.textContent = numberOne;
        numberTwo = null;
        numberTwoDisplay.textContent = '';
        currentNumber='.';
        currentNumberDisplay.textContent = currentNumber;
        operator = button.id;
        operatorDisplay.textContent = button.id;
    } 

}

function numberButtonClick(button){
    if (summedUp === true) {
        summedUp = f
        reset()
    }
    console.log(button.id+ ' clicked')
    if(currentNumberDisplay.textContent === '.'){
        currentNumber = button.id
    } else{
        currentNumber += button.id
    }
    
    console.log('Current Number: '+currentNumber)
    currentNumberDisplay.textContent = currentNumber
}

function equalsButtonClick(button){
    console.log(button.id+ ' clicked')
    console.log(operator, numberOne, numberTwo)

    if((numberOne && operator) && !(numberTwo)){
        console.log('no num2')
        operator = '';
        operatorDisplay.textContent = '';
        numberTwo = null;
        numberTwoDisplay.textContent = '';
        currentNumberDisplay = numberOne;
    } else{
        numberTwo = parseInt(currentNumber)
        numberTwoDisplay.textContent = numberTwo
        currentNumber='';
        currentNumberDisplay.textContent = '.';
    }

    if(operator && numberOne && numberTwo){
        let product = operate(numberOne, numberTwo, operator)
        console.log(product)
        numberOne = product
        numberOneDisplay.textContent = numberOne
        numberTwo = null;
        numberTwoDisplay.textContent = numberTwo
        operator = '';
        operatorDisplay.textContent = operator

        summedUp = true
    }
}

function operate(num1, num2, op){
    return num1 + num2
}

function reset(){
    numberOne=null;
    numberOneDisplay.textContent = '.';
    numberTwo=null;
    numberTwoDisplay.textContent = '';
    operator='';
    operatorDisplay.textContent = '';
    currentNumber = '';
    currentNumberDisplay.textContent = '.';
}

for(const button of operatorButtons){
    button.addEventListener('click', (event) => operatorButtonClick(event.target))
}

for(const button of numberButtons){
    button.addEventListener('click', (event) => numberButtonClick(event.target))
}

equalsButtonDisplay.addEventListener('click', (event) => equalsButtonClick(event.target))