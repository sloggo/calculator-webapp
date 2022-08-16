const operatorButtons = document.querySelectorAll('.operatorButton');
let numberOne = null;
let numberOneDisplay = document.querySelector('p.numberOne');
let numberTwo = null;
let numberTwoDisplay = document.querySelector('p.numberTwo');
let operator = '';
let operatorDisplay = document.querySelector('p.operatorDisplay');

function operatorButtonClick(button){
    console.log(button.id+ ' clicked')
    const currentNumber = document.querySelector('.currentDisplay#number')
    if(!numberOne){
        numberOne = parseInt(currentNumber.textContent)
        numberOneDisplay.textContent = numberOne
    } else{
        numberTwo = parseInt(currentNumber.textContent)
        numberTwoDisplay.textContent = numberTwo
    }
    operator = button.id;
    operatorDisplay.textContent = button.textContent
    console.log(numberOne)
    console.log(numberTwo)
}


for(const button of operatorButtons){
    button.addEventListener('click', (event) => operatorButtonClick(event.target))
}