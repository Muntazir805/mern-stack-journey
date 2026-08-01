// ======================================
// Day 3 JavaScript Practice
// Data Types & Type Conversion
// ======================================


// ======================================
// 1. Primitive Data Types
// ======================================

console.group("Primitive Data Types");

let fullName = "Muntazir Hussain";
let age = 22;
let isStudent = true;
let city;
let country = null;
let largeNumber = 1234567890123456789012345678901234567890n;
let uniqueId = Symbol("id");

console.log(fullName);
console.log(age);
console.log(isStudent);
console.log(city);
console.log(country);
console.log(largeNumber);
console.log(uniqueId);

console.groupEnd();


// ======================================
// 2. typeof Operator
// ======================================

console.group("typeof Operator");

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof country);
console.log(typeof largeNumber);
console.log(typeof uniqueId);

console.groupEnd();


// ======================================
// 3. User Input
// ======================================

console.group("User Input");

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

console.log(userName);
console.log(userAge);

console.log(typeof userName);
console.log(typeof userAge);

console.groupEnd();


// ======================================
// 4. Explicit Type Conversion
// ======================================

console.group("Explicit Type Conversion");

let numberString = "100";
let decimalString = "12.5";
let word = "Hello";
let booleanValue = true;

console.log(Number(numberString));
console.log(String(500));
console.log(Boolean(1));

console.log(parseInt(numberString));
console.log(parseFloat(decimalString));

console.log(Number(word));
console.log(String(booleanValue));

console.groupEnd();


// ======================================
// 5. Calculator using prompt()
// ======================================

console.group("Calculator");

let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);

console.groupEnd();


// ======================================
// 6. Data Type Checker
// ======================================

console.group("Data Type Checker");

let value = prompt("Enter any value:");

console.log("Value:", value);
console.log("Data Type:", typeof value);

console.groupEnd();


// ======================================
// 7. Type Conversion Practice
// ======================================

console.group("Type Conversion Practice");

console.log(Number("123"));
console.log(Number("12.5"));
console.log(Number("Hello"));

console.log(String(123));
console.log(String(true));

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("JavaScript"));

console.log(parseInt("25"));
console.log(parseInt("25.99"));

console.log(parseFloat("25.99"));

console.groupEnd();


// ======================================
// 8. Type Coercion Practice
// Predict the output first!
// ======================================

console.group("Type Coercion");

console.log("5" + 2);
console.log("5" - 2);

console.log(true + 1);
console.log(false + 10);

console.log(null + 5);
console.log(undefined + 5);

console.log("10" * 2);
console.log(10 + true);

console.groupEnd();


// ======================================
// 9. Completion Message
// ======================================

alert("Congratulations! You completed Day 3 Practice.");

console.log("Day 3 Practice Completed Successfully!");