// ======================================
// Day 4 JavaScript Practice
// Operators
// ======================================


// ======================================
// 1. Arithmetic Operators
// ======================================

console.group("Arithmetic Operators");

let firstNumber = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter the second number:"));

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Remainder:", firstNumber % secondNumber);
console.log("Exponentiation:", firstNumber ** secondNumber);

console.groupEnd();


// ======================================
// 2. Assignment Operators
// ======================================

console.group("Assignment Operators");

let number = 10;

console.log("Initial Value:", number);

number += 5;
console.log("After += 5:", number);

number -= 3;
console.log("After -= 3:", number);

number *= 2;
console.log("After *= 2:", number);

number /= 4;
console.log("After /= 4:", number);

number %= 3;
console.log("After %= 3:", number);

number **= 2;
console.log("After **= 2:", number);

console.groupEnd();


// ======================================
// 3. Increment & Decrement
// ======================================

console.group("Increment & Decrement");

let count = 5;

console.log("Original:", count);

count++;
console.log("After count++:", count);

count--;

console.log("After count--:", count);

++count;
console.log("After ++count:", count);

--count;
console.log("After --count:", count);

console.groupEnd();


// ======================================
// 4. Comparison Operators
// ======================================

console.group("Comparison Operators");

console.log(10 == "10");
console.log(10 === "10");

console.log(10 != "10");
console.log(10 !== "10");

console.log(20 > 10);
console.log(20 < 10);

console.log(20 >= 20);
console.log(15 <= 10);

console.groupEnd();


// ======================================
// 5. Logical Operators
// ======================================

console.group("Logical Operators");

console.log(true && true);
console.log(true && false);

console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);

console.groupEnd();


// ======================================
// 6. Operator Precedence
// ======================================

console.group("Operator Precedence");

console.log(10 + 5 * 2);

console.log((10 + 5) * 2);

console.log(20 - 5 + 2);

console.log(20 - (5 + 2));

console.groupEnd();


// ======================================
// 7. Marks Calculator
// ======================================

console.group("Marks Calculator");

let english = Number(prompt("English Marks:"));
let math = Number(prompt("Math Marks:"));
let science = Number(prompt("Science Marks:"));
let computer = Number(prompt("Computer Marks:"));
let physics = Number(prompt("Physics Marks:"));

let totalMarks = 500;

let obtainedMarks = english + math + science + computer + physics;

let percentage = (obtainedMarks / totalMarks) * 100;

console.log("Obtained Marks:", obtainedMarks);
console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage);

console.groupEnd();


// ======================================
// 8. Profit / Loss Calculator
// ======================================

console.group("Profit / Loss Calculator");

let costPrice = Number(prompt("Enter Cost Price:"));
let sellingPrice = Number(prompt("Enter Selling Price:"));

let difference = sellingPrice - costPrice;

console.log("Cost Price:", costPrice);
console.log("Selling Price:", sellingPrice);
console.log("Difference:", difference);

console.groupEnd();


// ======================================
// 9. Percentage Calculator
// ======================================

console.group("Percentage Calculator");

let obtained = Number(prompt("Enter Obtained Marks:"));
let total = Number(prompt("Enter Total Marks:"));

let result = (obtained / total) * 100;

console.log("Percentage:", result);

console.groupEnd();


// ======================================
// 10. Challenge
// Predict the output before running
// ======================================

console.group("Operator Challenge");

console.log("10 + 5 * 2 =", 10 + 5 * 2);

console.log("(10 + 5) * 2 =", (10 + 5) * 2);

console.log("10 == '10' =", 10 == "10");

console.log("10 === '10' =", 10 === "10");

console.log("true && false =", true && false);

console.log("true || false =", true || false);

console.log("!true =", !true);

let value = 10;

console.log("Original:", value);

value++;

console.log("After value++:", value);

console.groupEnd();


// ======================================
// 11. Completion
// ======================================

alert("Congratulations! You completed Day 4 Practice.");

console.log("Day 4 Practice Completed Successfully!");