// =========================================
// Day 8 - Conditional Problem Solving
// 30 Practice Problems
// =========================================

// =========================================
// Problem 1 - Even or Odd
// =========================================

console.group("Problem 1 - Even or Odd");

let number1 = Number(prompt("Enter a number:"));

if (number1 % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

console.groupEnd();

// =========================================
// Problem 2 - Positive, Negative, or Zero
// =========================================

console.group("Problem 2 - Positive, Negative, or Zero");

let number2 = Number(prompt("Enter a number:"));

if (number2 > 0) {
  console.log("Positive");
} else if (number2 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

console.groupEnd();

// =========================================
// Problem 3 - Largest of Two Numbers
// =========================================

console.group("Problem 3 - Largest of Two Numbers");

let num3A = Number(prompt("Enter first number:"));
let num3B = Number(prompt("Enter second number:"));

if (num3A > num3B) {
  console.log(`Largest Number: ${num3A}`);
} else if (num3B > num3A) {
  console.log(`Largest Number: ${num3B}`);
} else {
  console.log("Both numbers are equal");
}

console.groupEnd();

// =========================================
// Problem 4 - Smallest of Two Numbers
// =========================================

console.group("Problem 4 - Smallest of Two Numbers");

let num4A = Number(prompt("Enter first number:"));
let num4B = Number(prompt("Enter second number:"));

if (num4A < num4B) {
  console.log(`Smallest Number: ${num4A}`);
} else if (num4B < num4A) {
  console.log(`Smallest Number: ${num4B}`);
} else {
  console.log("Both numbers are equal");
}

console.groupEnd();

// =========================================
// Problem 5 - Voting Eligibility
// =========================================

console.group("Problem 5 - Voting Eligibility");

let age5 = Number(prompt("Enter your age:"));

if (age5 >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

console.groupEnd();

// =========================================
// Problem 6 - Driving Eligibility
// =========================================

console.group("Problem 6 - Driving Eligibility");

let age6 = Number(prompt("Enter your age:"));

if (age6 >= 18) {
  console.log("Eligible to drive");
} else {
  console.log("Not eligible to drive");
}

console.groupEnd();

// =========================================
// Problem 8 - Divisible by 5
// =========================================

console.group("Problem 8 - Divisible by 5");

let number8 = Number(prompt("Enter a number:"));

if (number8 % 5 === 0) {
  console.log("The number is divisible by 5");
} else {
  console.log("The number is not divisible by 5");
}

console.groupEnd();

// =========================================
// Problem 9 - Divisible by 3 and 5
// =========================================

console.group("Problem 9 - Divisible by 3 and 5");

let number9 = Number(prompt("Enter a number:"));

if (number9 % 3 === 0 && number9 % 5 === 0) {
  console.log("The number is divisible by both 3 and 5");
} else {
  console.log("The number is not divisible by both 3 and 5");
}

console.groupEnd();

// =========================================
// Problem 11 - Largest of Three Numbers
// =========================================

console.group("Problem 11 - Largest of Three Numbers");

let num11A = Number(prompt("Enter first number:"));
let num11B = Number(prompt("Enter second number:"));
let num11C = Number(prompt("Enter third number:"));

if (num11A >= num11B && num11A >= num11C) {
  console.log(`Largest Number: ${num11A}`);
} else if (num11B >= num11A && num11B >= num11C) {
  console.log(`Largest Number: ${num11B}`);
} else {
  console.log(`Largest Number: ${num11C}`);
}

console.groupEnd();

// =========================================
// Problem 12 - Smallest of Three Numbers
// =========================================

console.group("Problem 12 - Smallest of Three Numbers");

let num12A = Number(prompt("Enter first number:"));
let num12B = Number(prompt("Enter second number:"));
let num12C = Number(prompt("Enter third number:"));

if (num12A <= num12B && num12A <= num12C) {
  console.log(`Smallest Number: ${num12A}`);
} else if (num12B <= num12A && num12B <= num12C) {
  console.log(`Smallest Number: ${num12B}`);
} else {
  console.log(`Smallest Number: ${num12C}`);
}

console.groupEnd();

// =========================================
// Problem 14 - Scholarship Eligibility
// =========================================

console.group("Problem 14 - Scholarship Eligibility");

let marks14 = Number(prompt("Enter your marks:"));
let income14 = Number(prompt("Enter family income:"));

if (marks14 >= 85 && income14 <= 50000) {
  console.log("Eligible for Scholarship");
} else {
  console.log("Not Eligible for Scholarship");
}

console.groupEnd();

// =========================================
// Problem 15 - Temperature Checker
// =========================================

console.group("Problem 15 - Temperature Checker");

let temperature15 = Number(prompt("Enter temperature:"));

if (temperature15 < 10) {
  console.log("Very Cold");
} else if (temperature15 < 20) {
  console.log("Cold");
} else if (temperature15 < 30) {
  console.log("Normal");
} else if (temperature15 < 40) {
  console.log("Hot");
} else {
  console.log("Very Hot");
}

console.groupEnd();

// =========================================
// Problem 16 - BMI Category
// =========================================

console.group("Problem 16 - BMI Category");

let weight16 = Number(prompt("Enter weight in kg:"));
let height16 = Number(prompt("Enter height in meters:"));

let bmi16 = weight16 / (height16 * height16);

console.log(`BMI: ${bmi16}`);

if (bmi16 < 18.5) {
  console.log("Underweight");
} else if (bmi16 < 25) {
  console.log("Normal");
} else if (bmi16 < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

console.groupEnd();

// =========================================
// Problem 17 - Password Validator
// =========================================

console.group("Problem 17 - Password Validator");

let password17 = prompt("Enter your password:");

if (password17.length >= 8) {
  console.log("Password is valid");
} else {
  console.log("Password is too short");
}

console.groupEnd();

// =========================================
// Problem 18 - Username Checker
// =========================================

console.group("Problem 18 - Username Checker");

let username18 = prompt("Enter username:");

username18 = username18.trim();

if (username18 === "") {
  console.log("Username is required");
} else if (username18.length < 5) {
  console.log("Username is too short");
} else {
  console.log("Username is valid");
}

console.groupEnd();

// =========================================
// Problem 19 - Number Range Checker
// =========================================

console.group("Problem 19 - Number Range Checker");

let number19 = Number(prompt("Enter a number:"));

if (number19 >= 0 && number19 <= 10) {
  console.log("Small");
} else if (number19 <= 50) {
  console.log("Medium");
} else if (number19 <= 100) {
  console.log("Large");
} else {
  console.log("Very Large");
}

console.groupEnd();

// =========================================
// Problem 21 - Tax Calculator
// Practice Tax Rules
// =========================================

console.group("Problem 21 - Tax Calculator");

let income21 = Number(prompt("Enter annual income:"));
let tax21 = 0;

if (income21 <= 600000) {
  tax21 = 0;
} else if (income21 <= 1200000) {
  tax21 = income21 * 0.05;
} else {
  tax21 = income21 * 0.1;
}

console.log(`Annual Income: ${income21}`);
console.log(`Tax: ${tax21}`);
console.log(`Income After Tax: ${income21 - tax21}`);

console.groupEnd();

// =========================================
// Problem 22 - Shipping Cost Calculator
// =========================================

console.group("Problem 22 - Shipping Cost");

let orderAmount22 = Number(prompt("Enter order amount:"));
let shipping22;

if (orderAmount22 < 2000) {
  shipping22 = 300;
} else if (orderAmount22 < 5000) {
  shipping22 = 150;
} else {
  shipping22 = 0;
}

let total22 = orderAmount22 + shipping22;

console.log(`Order Amount: ${orderAmount22}`);
console.log(`Shipping Cost: ${shipping22}`);
console.log(`Total Amount: ${total22}`);

console.groupEnd();

// =========================================
// Problem 26 - ATM Withdrawal
// =========================================

console.group("Problem 26 - ATM Withdrawal");

let balance26 = 10000;
let withdrawal26 = Number(prompt("Enter withdrawal amount:"));

if (withdrawal26 <= balance26) {
  balance26 = balance26 - withdrawal26;

  console.log("Withdrawal Successful");
  console.log(`Remaining Balance: ${balance26}`);
} else {
  console.log("Insufficient Balance");
}

console.groupEnd();

// =========================================
// Problem 28 - Traffic Signal
// =========================================

console.group("Problem 28 - Traffic Signal");

let signal28 = prompt("Enter signal color:");
signal28 = signal28.trim().toLowerCase();

switch (signal28) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}

console.groupEnd();

// =========================================
// Problem 29 - Simple Calculator
// =========================================

console.group("Problem 29 - Simple Calculator");

let number29A = Number(prompt("Enter first number:"));
let number29B = Number(prompt("Enter second number:"));
let operator29 = prompt("Enter operator (+, -, *, /, %):");

switch (operator29) {
  case "+":
    console.log(`Result: ${number29A + number29B}`);
    break;

  case "-":
    console.log(`Result: ${number29A - number29B}`);
    break;

  case "*":
    console.log(`Result: ${number29A * number29B}`);
    break;

  case "/":
    console.log(`Result: ${number29A / number29B}`);
    break;

  case "%":
    console.log(`Result: ${number29A % number29B}`);
    break;

  default:
    console.log("Invalid Operator");
}

console.groupEnd();

// =========================================
// Problem 30 - Student Admission Eligibility
// =========================================

console.group("Problem 30 - Student Admission Eligibility");

let marks30 = Number(prompt("Enter marks:"));
let age30 = Number(prompt("Enter age:"));

if (marks30 >= 80 && age30 >= 18) {
  console.log("Eligible for Merit Category");
} else if (marks30 >= 60 && age30 >= 18) {
  console.log("Eligible for Admission");
} else {
  console.log("Not Eligible for Admission");
}

console.groupEnd();
