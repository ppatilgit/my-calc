
// User clicks a number button
    // User continues to click numbers
    // Each number is added to the FIRST NUMBER
    // FIRST NUMBER is shown on the screen
// User clicks an operator button
    // OPERATOR is stored in a variable
// User clicks more number buttons
    // Creating SECOND NUMBER
    // SECOND NUMBER is shown on the screen
// User clicks equals button
    // CALCULATE function uses FIRST NUMBER, SECOND NUMBER and OPERATOR to create the RESULT
// RESULT is shown on the screen


// CALCULATE FUNCTION
    // - can ADD, SUBTRACT, DIVIDE or MULTIPLY
    // - can PERCENTAGE
    // - can SQUARE ROOT
    // - can handle three or more numbers

// const firstNumber = prompt("First number: ");
// const operator = prompt("Operator: ");
// const secondNumber = prompt("Second number: ");

// alert(`${firstNumber} ${operator} ${secondNumber}`);
const calculator ={
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
}

const updateDisplay = ()=>{
    const display = document.querySelector('.calculator__screen');
    display.value = calculator.displayValue;
};

const inputDigit = (digit)=>{
    const displayValue = calculator.displayValue;
    const waitingForSecondOperand=calculator.waitingForSecondOperand;

    if(waitingForSecondOperand===true){
        calculator.displayValue=digit;
        calculator.waitingForSecondOperand=false;
    }else{
        calculator.displayValue=displayValue==='0'?digit: displayValue+digit;
    }
    console.log(calculator);
}

const inputDecimal=(decimal)=>{
    if(!calculator.displayValue.includes(decimal)){
        calculator.displayValue +=decimal;
    }
}

const handleOperator= (operatorForCal)=>{
    const firstOperand = calculator.firstOperand;
    const displayValue = calculator.displayValue;
    const operator= calculator.operator;

    const inputValue = parseFloat(displayValue);

    if(firstOperand===null && !isNaN(inputValue)){
        calculator.firstOperand=inputValue;
    } else if(operator){
        const result =calculate(firstOperand, inputValue, operator);
        calculator.displayValue=String(result);
        calculator.firstOperand=result;
        console.log(calculator);
    }
    calculator.waitingForSecondOperand=true;
    calculator.operator=operatorForCal;
}

const calculate = ( firstNumber, secondNumber,operator) => {    
    if(operator== '+'){
        return firstNumber+secondNumber ;
    }else if(operator== '-'){
        return firstNumber-secondNumber ;
    }else if(operator== '*'){
        return firstNumber*secondNumber;
    }else if(operator== '/'){
        return firstNumber/secondNumber ;
    }else{
        return secondNumber;
    }

};

//Handle Key click
const keys = document.querySelector('.buttons');
keys.addEventListener('click', (event) => {
    // Access the clicked element
    
    const target = event.target;

    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.classList.contains('op__button')&&!target.classList.contains('num__button')&&!target.classList.contains('act__button')) {
        return;
    }

    if (target.classList.contains('op__button')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    
    if (target.classList.contains('clr_button')) {
        console.log('clear', target.value);
        return;
    }
    if (target.classList.contains('cal_button')) {
        console.log('calculate', target.value);
        return;
    }
    if (target.classList.contains('del_button')) {
        console.log('delete', target.value);
        return;
    }
    if (target.classList.contains('dot_button')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});





