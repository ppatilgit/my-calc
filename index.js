
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


let firstNumber = prompt("First number: ");
let operator = prompt("Operator: ");
let secondNumber = prompt("Second number: ");


const addNum = (num1, num2) => num1+num2;
const subNum = (num1, num2) => num1-num2;
const mulNum = (num1, num2) => num1*num2;
const divNum = (num1, num2) => num1/num2;

const calculate = (operator, firstNumber, secondNumber) => {
    let calcValue = null;
    firstNumber=Number(firstNumber);
    secondNumber=Number(secondNumber);
    if(operator== '+'){
        calcValue= addNum(firstNumber, secondNumber) ;
    }else if(operator== '-'){
        calcValue= subNum(firstNumber, secondNumber) ;
    }else if(operator== '*'){
        calcValue= mulNum(firstNumber, secondNumber) ;
    }else if(operator== '/'){
        calcValue= divNum(firstNumber, secondNumber) ;
    }else{
        calcValue= "Not defined operator";
    }
    console.log(calcValue);
    return calcValue;
};


alert(`${firstNumber} ${operator} ${secondNumber} = ${calculate(operator, firstNumber, secondNumber)}`);


// CODE GOES HERE