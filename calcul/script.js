let currentInput = '';
let firstNumber = null;
let operator = null;
let awaitingSecondNumber = false;

const screen = document.querySelector('.screen');
const numberButtons = document.querySelectorAll('.numbers button');
const operatorButtons = document.querySelectorAll('.operators button');
const resultButton = document.querySelector('.result');

function updateScreen(text) {
    screen.textContent = text;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        updateScreen(currentInput);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Allow the operator to be entered only after a number
        if (currentInput === '') return;

        if (firstNumber === null) {
            firstNumber = parseFloat(currentInput);
            operator = button.textContent;
            currentInput = '';
            updateScreen(operator);
        } else {
            // Handle multiple operations like +5-10*10
            calculateIntermediateResult(button.textContent);
        }
    });
});

function calculateIntermediateResult(nextOperator) {
    if (currentInput === '') return;

    const secondNumber = parseFloat(currentInput);
    let intermediateResult;

    switch (operator) {
        case '+':
            intermediateResult = firstNumber + secondNumber;
            break;
        case '-':
            intermediateResult = firstNumber - secondNumber;
            break;
        case '*':
            intermediateResult = firstNumber * secondNumber;
            break;
        case '/':
            intermediateResult = secondNumber !== 0 ? firstNumber / secondNumber : "Error: Divide by 0";
            break;
    }

    firstNumber = intermediateResult; // Store the intermediate result
    operator = nextOperator; // Store the new operator
    currentInput = ''; // Reset current input for the next number
    updateScreen(intermediateResult + ' ' + operator); // Display intermediate result and new operator
}

resultButton.addEventListener('click', () => {
    if (firstNumber !== null && operator && currentInput !== '') {
        const secondNumber = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = secondNumber !== 0 ? firstNumber / secondNumber : "Error: Divide by 0";
                break;
        }

        updateScreen(result);
        // Reset for next calculation
        currentInput = '';
        firstNumber = null;
        operator = null;
    }
});
