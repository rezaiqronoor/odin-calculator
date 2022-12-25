const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const multiply = (numA, numB) => numA * numB;
const divide = (numA, numB) => numA / numB;

const operate = (numA, numB, operator) => {
   let result = 0;
   switch (operator) {
      case "+":
         result = add(numA, numB);
      case "-":
         result = subtract(numA, numB);
      case "*":
         result = multiply(numA, numB);
      case "/":
         result = divide(numA, numB);
   }
   return Math.round(result * 10) / 10;
};

let displayValue = "0";
let num1 = 0;
let num2 = 0;
let prevOperator = "";

const displayNumber = document.querySelector(".display-number");
displayNumber.innerHTML = displayValue;

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) =>
   btn.addEventListener("click", () => {
      if (displayValue === "0") displayValue = "";
      if (!isNaN(Number(btn.getAttribute("value")))) {
         displayValue += btn.getAttribute("value");
         displayNumber.innerHTML = displayValue;
      }
      else {
         checkOperator(btn.getAttribute("value"));
      }
   })
);

const checkOperator = (operator) => {
   if(operator === "=") {
      if(num1 === 0) {
         alert("Add Operator First!");
      }
      else if(num1 !== 0) {
         num2 = Number(displayValue);
         displayNumber.innerHTML = operate(num1, num2, prevOperator);
      }
   }
   else {
      if(num1 === 0) {
         num1 = Number(displayValue);
         prevOperator = operator;
         displayValue = "0";
         displayNumber.innerHTML = displayValue;
      }
      else if(num1 !== 0) {
         const curNum = Number(displayValue);
         num1 = operate(num1, curNum, operator);
         prevOperator = operator;

         displayValue = "0";
         displayNumber.innerHTML = num1;
      }
   }
};


