// =========================================
// Day 7 - Conditional Statements Practice
// =========================================

// =========================================
// Practice 1 - Age Checker
// =========================================

console.group("Practice 1 - Age Checker");

let age = Number(prompt("Enter your age:"));

if (age >= 60) {
    console.log("Senior Citizen");
} else if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}

console.groupEnd();


// =========================================
// Practice 2 - Grade System
// =========================================

console.group("Practice 2 - Grade System");

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}

console.groupEnd();


// =========================================
// Practice 3 - Login System
// =========================================

console.group("Practice 3 - Login System");

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username === "admin") {

    if (password === "12345") {
        console.log("Login Successful");
    } else {
        console.log("Invalid Password");
    }

} else {
    console.log("Invalid Username");
}

console.groupEnd();


// =========================================
// Practice 4 - Traffic Signal
// =========================================

console.group("Practice 4 - Traffic Signal");

let signal = prompt("Enter signal color (red, yellow, green):");

switch (signal.toLowerCase()) {

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
// Practice 5 - Discount Calculator
// =========================================

console.group("Practice 5 - Discount Calculator");

let price = Number(prompt("Enter product price:"));
let discount = 0;

if (price >= 10000) {
    discount = 30;
} else if (price >= 5000) {
    discount = 20;
} else if (price >= 2000) {
    discount = 10;
} else {
    discount = 0;
}

let finalPrice = price - (price * discount / 100);

console.log(`Original Price : ${price}`);
console.log(`Discount       : ${discount}%`);
console.log(`Final Price    : ${finalPrice}`);

console.groupEnd();


// =========================================
// Practice 6 - Electricity Bill
// =========================================

console.group("Practice 6 - Electricity Bill");

let units = Number(prompt("Enter electricity units:"));
let bill = 0;

if (units <= 100) {
    bill = units * 10;
} else if (units <= 200) {
    bill = units * 15;
} else {
    bill = units * 20;
}

console.log(`Units : ${units}`);
console.log(`Bill  : ${bill}`);

console.groupEnd();


// =========================================
// Practice 7 - Leap Year Checker
// =========================================

console.group("Practice 7 - Leap Year");

let year = Number(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is NOT a Leap Year`);
}

console.groupEnd();


// =========================================
// Practice 8 - ATM Simulation
// =========================================

console.group("Practice 8 - ATM");

let balance = 10000;

let choice = prompt(
`Choose an option:

1. Check Balance
2. Withdraw
3. Deposit`
);

switch (choice) {

    case "1":
        console.log(`Current Balance: ${balance}`);
        break;

    case "2":

        let withdraw = Number(prompt("Enter amount to withdraw:"));

        if (withdraw <= balance) {
            balance = balance - withdraw;
            console.log(`Withdrawal Successful`);
            console.log(`Remaining Balance: ${balance}`);
        } else {
            console.log("Insufficient Balance");
        }

        break;

    case "3":

        let deposit = Number(prompt("Enter deposit amount:"));

        balance = balance + deposit;

        console.log(`Deposit Successful`);
        console.log(`Current Balance: ${balance}`);

        break;

    default:
        console.log("Invalid Option");
}

console.groupEnd();


// =========================================
// Practice 9 - Ternary Operator
// =========================================

console.group("Practice 9 - Ternary Operator");

let number = Number(prompt("Enter a number:"));

let result = number % 2 === 0 ? "Even Number" : "Odd Number";

console.log(result);

console.groupEnd();


// =========================================
// Practice 10 - Truthy & Falsy
// =========================================

console.group("Practice 10 - Truthy & Falsy");

let value = prompt("Enter anything:");

if (value) {
    console.log("Truthy Value");
} else {
    console.log("Falsy Value");
}

console.groupEnd();