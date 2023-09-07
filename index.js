 // JavaScript code for calculator functionality
 const display = document.getElementById("display");
 let currentInput = "0";
 let previousInput = "0";
 let operator = "";

 function updateDisplay() {
     display.textContent = currentInput;
 }

 function handleNumberClick(number) {
     if (currentInput === "0") {
         currentInput = number;
     } else {
         currentInput += number;
     }
     updateDisplay();
 }

 function handleOperatorClick(op) {
     operator = op;
     previousInput = currentInput;
     currentInput = "0";
 }

 function handleEqualsClick() {
     switch (operator) {
         case "+":
             currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
             break;
         case "-":
             currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
             break;
         case "*":
             currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
             break;
         case "/":
             if (currentInput === "0") {
                 currentInput = "Error";
             } else {
                 currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
             }
             break;
         case "^":
             currentInput = (Math.pow(parseFloat(previousInput), parseFloat(currentInput))).toString();
             break;
         case "√":
             currentInput = (Math.sqrt(parseFloat(currentInput))).toString();
             break;
         default:
             break;
     }
     operator = "";
     previousInput = "0";
     updateDisplay();
 }

 function handleClearClick() {
     currentInput = "0";
     previousInput = "0";
     operator = "";
     updateDisplay();
 }

 // Attach click event listeners to buttons
 document.getElementById("btn1").addEventListener("click", () => handleNumberClick("1"));
 document.getElementById("btn2").addEventListener("click", () => handleNumberClick("2"));
 document.getElementById("btn3").addEventListener("click", () => handleNumberClick("3"));
 document.getElementById("btn4").addEventListener("click", () => handleNumberClick("4"));
 document.getElementById("btn5").addEventListener("click", () => handleNumberClick("5"));
 document.getElementById("btn6").addEventListener("click", () => handleNumberClick("6"));
 document.getElementById("btn7").addEventListener("click", () => handleNumberClick("7"));
 document.getElementById("btn8").addEventListener("click", () => handleNumberClick("8"));
 document.getElementById("btn9").addEventListener("click", () => handleNumberClick("9"));
 document.getElementById("btn0").addEventListener("click", () => handleNumberClick("0"));
 document.getElementById("btnDecimal").addEventListener("click", () => handleNumberClick("."));
 document.getElementById("btnAdd").addEventListener("click", () => handleOperatorClick("+"));
 document.getElementById("btnSubtract").addEventListener("click", () => handleOperatorClick("-"));
 document.getElementById("btnMultiply").addEventListener("click", () => handleOperatorClick("*"));
 document.getElementById("btnDivide").addEventListener("click", () => handleOperatorClick("/"));
 document.getElementById("btnPower").addEventListener("click", () => handleOperatorClick("^"));
 document.getElementById("btnSquareRoot").addEventListener("click", () => handleOperatorClick("√"));
 document.getElementById("btnEquals").addEventListener("click", handleEqualsClick);
 document.getElementById("btnClear").addEventListener("click", handleClearClick);

 // Initialize the display
 updateDisplay();