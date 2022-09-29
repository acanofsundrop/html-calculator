const calcDisplay = document.getElementById("display");
const oneKey = document.getElementById("1");
const twoKey = document.getElementById("2");
const threeKey = document.getElementById("3");
const fourKey = document.getElementById("4");
const fiveKey = document.getElementById("5");
const sixKey = document.getElementById("6");
const sevenKey = document.getElementById("7");
const eightKey = document.getElementById("8");
const nineKey = document.getElementById("9");
const zeroKey = document.getElementById("0");
const pointKey = document.getElementById("point");
const equalsKey = document.getElementById("equals");
const addKey = document.getElementById("add");
const subtractKey = document.getElementById("subtract");
const multiplyKey = document.getElementById("multiply");
const divideKey = document.getElementById("divide");
const clearKey = document.getElementById("clear");
const deleteKey = document.getElementById("delete");

var termCurrent;
var operatorCurrent;
var termNextString = "";
var termNextValue = 0;
var operatorNext;

function clear() {
    termCurrent = undefined;
    operatorCurrent = undefined;
    termNextString = "";
    termNextValue = 0;
    operatorNext = undefined;
    calcDisplay.innerText = termNextValue;
}

function backspace() {
    termNextString = termNextString.slice(0, -1);
    calcDisplay.innerText = termNextString;
}

function input(number) {
    termNextString = termNextString + number;
    console.log(`Input ${number}. Current term ${termNextString}.`)
    calcDisplay.innerText = termNextString;
    termNextValue = Number(termNextString);
}

function pointHandler() {
    if (termNextString.indexOf(".") === -1) {
        input(".");
    }
}

function operate(operatorInput) {
    if (operatorCurrent) {
        switch (operatorCurrent) {
            case "add":
                termCurrent = (termCurrent + termNextValue);

                console.log("Add successful.");
                break;
            case "subtract":
                termCurrent = (termCurrent - termNextValue);

                console.log("Subtract successful.");
                break;
            case "multiply":
                termCurrent = (termCurrent * termNextValue);

                console.log("Multiply successful.");
                break;
            case "divide":
                termCurrent = (termCurrent / termNextValue);
                if (termCurrent === Infinity) {
                    alert("Nah man.");
                    termCurrent = 0;
                }

                console.log("Divide successful.");
                break;
            case "equals":

                console.log("Evaluation successful.");
                break;
            default:
                break;
        }
    } else { termCurrent = termNextValue; }
    let roundedTerm = (Math.round(termCurrent * 100000) / 100000);
    calcDisplay.innerText = roundedTerm;
    termNextString = "";
    termNextValue = 0;
    operatorCurrent = operatorInput;
    //add shit here
}

addKey.addEventListener("click", () => { operate("add") });
subtractKey.addEventListener("click", () => { operate("subtract") });
multiplyKey.addEventListener("click", () => { operate("multiply") });
divideKey.addEventListener("click", () => { operate("divide") });
equalsKey.addEventListener("click", () => { operate("equals") });

oneKey.addEventListener("click", () => { input("1") });
twoKey.addEventListener("click", () => { input("2") });
threeKey.addEventListener("click", () => { input("3") });
fourKey.addEventListener("click", () => { input("4") });
fiveKey.addEventListener("click", () => { input("5") });
sixKey.addEventListener("click", () => { input("6") });
sevenKey.addEventListener("click", () => { input("7") });
eightKey.addEventListener("click", () => { input("8") });
nineKey.addEventListener("click", () => { input("9") });
zeroKey.addEventListener("click", () => { input("0") });

pointKey.addEventListener("click", pointHandler);
clearKey.addEventListener("click", clear);
deleteKey.addEventListener("click", backspace);