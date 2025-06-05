
const inputField = document.querySelector("input");
const defaultInput = 0;
inputField.value = defaultInput;


let firstNumber = null;
let currentOperator = null;
let secondNumber = null;
let waitingForSecondNumber = false;

document.getElementById("content").addEventListener("click", (e) => {
    const number = e.target.textContent

    if (e.target.classList.contains("number")) {
        if (waitingForSecondNumber) {
            inputField.value = number; // starta om inputfältet
            secondNumber = Number(inputField.value);
            waitingForSecondNumber = false;
        } else if (inputField.value === "0") {
            inputField.value = number;
            firstNumber = Number(inputField.value);
        } else {
            inputField.value += number;
            firstNumber = Number(inputField.value);
        }
    }

    if (e.target.id === "delete") {
        inputField.value = defaultInput;
    }

    if (e.target.id === "add") {
        currentOperator = "+";
        waitingForSecondNumber = true;
    }
    if (e.target.id === "subtract") {
        currentOperator = "-";
        waitingForSecondNumber = true;
    }
    if (e.target.id === "result") {
        switch (currentOperator) {
            case "+":
                inputField.value = add(firstNumber, secondNumber)
                break;
            case "-":
                inputField.value = subtract(firstNumber, secondNumber)

        }
        console.log(inputField.value);

    }
    console.log(firstNumber);
    console.log(currentOperator);
    console.log(secondNumber);

});


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;

}
function multiply(a, b) {
    return a * b;

}
function divide(a, b) {

    if (b === 0) {
        return "Error"
    }

    return a / b;

}