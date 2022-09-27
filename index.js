
// CALCULATE FUNCTION
    // - can ADD, SUBTRACT, DIVIDE or MULTIPLY
    // - can PERCENTAGE
    // - can SQUARE ROOT
    // - can handle three or more numbers

const calculator ={
    previousEquation: [],
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
}


const updateDisplay = ()=>{
    const display = document.querySelector('.calculator__screen');
    const previousEquation = document.querySelector('.equation__screen');
    display.value = calculator.displayValue;
    previousEquation.value=calculator.previousEquation;
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
    calculator.previousEquation=calculator.previousEquation+digit;
}

const inputDecimal=(decimal)=>{
    if(!calculator.displayValue.includes(decimal)){
        calculator.displayValue +=decimal;
        calculator.previousEquation +=decimal;
    }
}

const handleOperator= (operatorForCal)=>{
    const firstOperand = calculator.firstOperand;
    const displayValue = calculator.displayValue;
    const operator= calculator.operator;
    const inputValue = parseFloat(displayValue);
    
    if(operatorForCal==='√'){
        calculator.previousEquation +=`√`; 
    }else if(operatorForCal==='∓'){
        calculator.previousEquation =`negate`; 
    }else if(operatorForCal==='x²'){
        calculator.previousEquation =`sqr`; 
    }else if(operatorForCal==='¹/ₓ'){
        calculator.previousEquation =`1/`;
    }else if(operatorForCal==="="){
        calculator.previousEquation=`(${calculator.previousEquation})`;
    }else{
        calculator.previousEquation+=operatorForCal;
    }
    
    if(operator && calculator.waitingForSecondOperand){
        calculator.operator=operatorForCal;
        return;
    }

    if(firstOperand===null && !isNaN(inputValue)){
        calculator.firstOperand=inputValue;
    } else if(operator){
        const result =calculate(firstOperand, inputValue, operator, operatorForCal);
        calculator.displayValue=String(result);
        calculator.firstOperand=result;
       
    }
    calculator.waitingForSecondOperand=true;
    calculator.operator=operatorForCal;
        
}

const calculate = ( firstNumber, secondNumber,operator, currentOperator) => {    
    if(currentOperator==="%"){
        if(operator== "+"){
            return firstNumber +((secondNumber/100)*firstNumber);
        } else if(operator=="-"){
            return firstNumber - ((secondNumber/100)*firstNumber);
        }else if(operator=="×"){
            return firstNumber * ((secondNumber/100)*firstNumber);
        }else if(operator=="÷"){
            return firstNumber / ((secondNumber/100)*firstNumber);
        }else{
            return secondNumber/100;
        }
    }else{
        if(operator== '+'){
            return firstNumber+secondNumber ;
        }else if(operator== '-'){
            return firstNumber-secondNumber ;
        }else if(operator== '×'){
            return firstNumber*secondNumber;
        }else if(operator== '÷'){
            return firstNumber/secondNumber ;
        }else if(operator== "√"){
            return Math.sqrt(secondNumber);
        }else if(operator== "∓"){
            return -secondNumber;
        }else if(operator== '¹/ₓ'){
            return 1/secondNumber ;
        }else if(operator== 'x²'){
            return secondNumber*secondNumber;
        }else{
            return secondNumber;
        }
    }
};
const resetCalculator = () =>{
    calculator.previousEquation= '',
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }

  const deleteInput = () =>{
    let previousEquation= calculator.previousEquation;
    calculator.displayValue='0';
    if(calculator.operator!=null){
        calculator.previousEquation=previousEquation.substring(0, previousEquation.indexOf(calculator.operator)+1);  
    }else{
        calculator.previousEquation = '';
    }

  }
  const clearDisplay = () =>{
    if(calculator.displayValue==='0'){
        calculator.previousEquation=''; 
        return;
    }
    calculator.previousEquation=calculator.displayValue;   
}
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

    if (target.classList.contains('op__button') || target.classList.contains('cal_button')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    
    if (target.classList.contains('allclr_button')) {
        resetCalculator();
        updateDisplay();
        return;
    }
    if (target.classList.contains('clr_button')) {
        clearDisplay();
        updateDisplay();
        return;
    }

    if (target.classList.contains('del_button')) {
        deleteInput();
        updateDisplay();
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





