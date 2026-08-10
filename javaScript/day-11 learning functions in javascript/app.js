// =========================================
// DAY 11 - FUNCTIONS
// Practice File
// =========================================


// =========================================
// LEVEL 1 - FUNCTION DECLARATION
// =========================================


// =========================================
// 1. Simple Greeting
// =========================================

console.group("1. Simple Greeting");

function greet() {
    console.log("Welcome to JavaScript!");
}

greet();

console.groupEnd();


// =========================================
// 2. Display User Information
// =========================================

console.group("2. User Information");

function showUserInfo() {
    console.log("Name: Muntazir");
    console.log("Department: Computer Science");
    console.log("Goal: Become a Full Stack Developer");
}

showUserInfo();

console.groupEnd();


// =========================================
// 3. Addition Function
// =========================================

console.group("3. Addition");

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

console.groupEnd();


// =========================================
// 4. Subtraction Function
// =========================================

console.group("4. Subtraction");

function subtract(a, b) {
    return a - b;
}

console.log(subtract(20, 10));

console.groupEnd();


// =========================================
// 5. Multiplication Function
// =========================================

console.group("5. Multiplication");

function multiply(a, b) {
    return a * b;
}

console.log(multiply(10, 5));

console.groupEnd();


// =========================================
// 6. Division Function
// =========================================

console.group("6. Division");

function divide(a, b) {
    return a / b;
}

console.log(divide(20, 5));

console.groupEnd();


// =========================================
// LEVEL 2 - PARAMETERS & ARGUMENTS
// =========================================


// =========================================
// 7. Personalized Greeting
// =========================================

console.group("7. Personalized Greeting");

function greetUser(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser("Muntazir"));
console.log(greetUser("Ali"));

console.groupEnd();


// =========================================
// 8. Age Calculator
// =========================================

console.group("8. Age Calculator");

function calculateAge(birthYear) {

    let currentYear = 2026;

    return currentYear - birthYear;
}

console.log(calculateAge(2002));

console.groupEnd();


// =========================================
// 9. Even or Odd
// =========================================

console.group("9. Even or Odd");

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

console.groupEnd();


// =========================================
// 10. Find Largest of Two Numbers
// =========================================

console.group("10. Largest Number");

function findLargest(a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }

}

console.log(findLargest(25, 40));

console.groupEnd();


// =========================================
// LEVEL 3 - FUNCTIONS + LOOPS
// =========================================


// =========================================
// 11. Multiplication Table
// =========================================

console.group("11. Multiplication Table");

function multiplicationTable(number) {

    for (let i = 1; i <= 10; i++) {

        console.log(`${number} × ${i} = ${number * i}`);

    }

}

multiplicationTable(5);

console.groupEnd();


// =========================================
// 12. Sum from 1 to N
// =========================================

console.group("12. Sum from 1 to N");

function calculateSum(number) {

    let sum = 0;

    for (let i = 1; i <= number; i++) {

        sum += i;

    }

    return sum;
}

console.log(calculateSum(10));

console.groupEnd();


// =========================================
// 13. Factorial
// =========================================

console.group("13. Factorial");

function factorial(number) {

    let result = 1;

    for (let i = 1; i <= number; i++) {

        result *= i;

    }

    return result;
}

console.log(factorial(5));

console.groupEnd();


// =========================================
// 14. Count Even Numbers
// =========================================

console.group("14. Count Even Numbers");

function countEvenNumbers(number) {

    let count = 0;

    for (let i = 1; i <= number; i++) {

        if (i % 2 === 0) {
            count++;
        }

    }

    return count;
}

console.log(countEvenNumbers(20));

console.groupEnd();


// =========================================
// 15. Sum of Digits
// =========================================

console.group("15. Sum of Digits");

function sumOfDigits(number) {

    let sum = 0;

    while (number > 0) {

        let digit = number % 10;

        sum += digit;

        number = Math.floor(number / 10);

    }

    return sum;
}

console.log(sumOfDigits(1234));

console.groupEnd();


// =========================================
// LEVEL 4 - FUNCTIONS + CONDITIONS
// =========================================


// =========================================
// 16. Grade Calculator
// =========================================

console.group("16. Grade Calculator");

function calculateGrade(marks) {

    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "Fail";
    }

}

console.log(calculateGrade(85));
console.log(calculateGrade(45));

console.groupEnd();


// =========================================
// 17. BMI Category
// =========================================

console.group("17. BMI Category");

function bmiCategory(bmi) {

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }

}

console.log(bmiCategory(23));

console.groupEnd();


// =========================================
// 18. Prime Checker
// =========================================

console.group("18. Prime Checker");

function isPrime(number) {

    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return false;
        }

    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

console.groupEnd();


// =========================================
// 19. Currency Converter
// Fixed practice rate
// =========================================

console.group("19. Currency Converter");

function convertCurrency(usd) {

    const exchangeRate = 285;

    return usd * exchangeRate;
}

console.log(convertCurrency(10));

console.groupEnd();


// =========================================
// 20. Temperature Converter
// Celsius → Fahrenheit
// =========================================

console.group("20. Celsius to Fahrenheit");

function celsiusToFahrenheit(celsius) {

    return (celsius * 9 / 5) + 32;

}

console.log(celsiusToFahrenheit(25));

console.groupEnd();


// =========================================
// LEVEL 5 - FUNCTION EXPRESSIONS
// =========================================


// =========================================
// 21. Function Expression - Addition
// =========================================

console.group("21. Function Expression");

const addition = function (a, b) {

    return a + b;

};

console.log(addition(15, 25));

console.groupEnd();


// =========================================
// 22. Function Expression - Even/Odd
// =========================================

console.group("22. Function Expression - Even/Odd");

const evenOdd = function (number) {

    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
};

console.log(evenOdd(8));

console.groupEnd();


// =========================================
// LEVEL 6 - ARROW FUNCTIONS
// =========================================


// =========================================
// 23. Arrow Function - Addition
// =========================================

console.group("23. Arrow Function");

const arrowAdd = (a, b) => {
    return a + b;
};

console.log(arrowAdd(10, 30));

console.groupEnd();


// =========================================
// 24. Arrow Function - Square
// =========================================

console.group("24. Arrow Function - Square");

const square = (number) => {
    return number * number;
};

console.log(square(5));

console.groupEnd();


// =========================================
// 25. Arrow Function - Short Syntax
// =========================================

console.group("25. Arrow Function - Short Syntax");

const cube = number => number * number * number;

console.log(cube(3));

console.groupEnd();


// =========================================
// LEVEL 7 - DEFAULT PARAMETERS
// =========================================


// =========================================
// 26. Default Name
// =========================================

console.group("26. Default Parameter");

function welcome(name = "Guest") {

    return `Welcome, ${name}!`;

}

console.log(welcome("Muntazir"));
console.log(welcome());

console.groupEnd();


// =========================================
// 27. Default Country
// =========================================

console.group("27. Default Country");

function showCountry(country = "Pakistan") {

    return `Country: ${country}`;

}

console.log(showCountry("Pakistan"));
console.log(showCountry());

console.groupEnd();


// =========================================
// LEVEL 8 - REST PARAMETERS
// =========================================


// =========================================
// 28. Sum Multiple Numbers
// =========================================

console.group("28. Rest Parameter - Sum");

function sumNumbers(...numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {

        total += numbers[i];

    }

    return total;
}

console.log(sumNumbers(10, 20));
console.log(sumNumbers(10, 20, 30, 40));

console.groupEnd();


// =========================================
// 29. Count Multiple Arguments
// =========================================

console.group("29. Rest Parameter - Count");

function countNumbers(...numbers) {

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {

        count++;

    }

    return count;
}

console.log(countNumbers(10, 20, 30, 40, 50));

console.groupEnd();


// =========================================
// LEVEL 9 - USER INPUT + FUNCTIONS
// =========================================


// =========================================
// 30. User Calculator
// =========================================

console.group("30. User Calculator");

let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

console.log(`Addition: ${add(firstNumber, secondNumber)}`);
console.log(`Subtraction: ${subtract(firstNumber, secondNumber)}`);
console.log(`Multiplication: ${multiply(firstNumber, secondNumber)}`);
console.log(`Division: ${divide(firstNumber, secondNumber)}`);

console.groupEnd();


// =========================================
// DAY 11 COMPLETE
// =========================================

console.log("Day 11 - Functions Practice Completed!");