// ========================================
// DAY 13 - SCOPE & HOISTING
// JavaScript Learning Journey
// ========================================


// ========================================
// PART 1 - GLOBAL SCOPE
// ========================================

// A variable declared outside a function
// has global scope.

var studentName = "Muntazir";

function showStudentName() {
    console.log("Student Name:", studentName);
}

showStudentName();


// ========================================
// PART 2 - FUNCTION SCOPE
// ========================================

// A variable declared inside a function
// can only be accessed inside that function.

function studentInfo() {

    var age = 23;

    console.log("Student Age:", age);
}

studentInfo();

// console.log(age);
// This will cause an error because age
// exists only inside studentInfo().


// ========================================
// PART 3 - BLOCK SCOPE WITH let
// ========================================

if (true) {

    let city = "Hyderabad";

    console.log("City:", city);
}

// console.log(city);
// Error because let has block scope.


// ========================================
// PART 4 - BLOCK SCOPE WITH const
// ========================================

if (true) {

    const country = "Pakistan";

    console.log("Country:", country);
}

// console.log(country);
// Error because const has block scope.


// ========================================
// PART 5 - var DOES NOT HAVE BLOCK SCOPE
// ========================================

if (true) {

    var course = "JavaScript";

}

console.log("Course:", course);


// ========================================
// PART 6 - FUNCTION SCOPE vs BLOCK SCOPE
// ========================================

function scopeExample() {

    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {

        var x = 40;
        let y = 50;
        const z = 60;

        console.log("Inside Block:");
        console.log("a:", a);
        console.log("b:", b);
        console.log("c:", c);
        console.log("x:", x);
        console.log("y:", y);
        console.log("z:", z);
    }

    console.log("Outside Block:");
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
    console.log("x:", x);

    // y and z cannot be accessed here.
}

scopeExample();


// ========================================
// PART 7 - VARIABLE SHADOWING
// ========================================

var name = "Global John";

function shadowExample() {

    var name = "Local John";

    console.log("Inside Function:", name);
}

shadowExample();

console.log("Outside Function:", name);


// ========================================
// PART 8 - let SHADOWING
// ========================================

let message = "Global Message";

if (true) {

    let message = "Block Message";

    console.log("Inside Block:", message);
}

console.log("Outside Block:", message);


// ========================================
// PART 9 - NESTED SCOPE
// ========================================

var university = "University of Sindh";

function outerFunction() {

    var department = "Computer Science";

    function innerFunction() {

        var semester = "Final Semester";

        console.log("University:", university);
        console.log("Department:", department);
        console.log("Semester:", semester);
    }

    innerFunction();
}

outerFunction();


// ========================================
// PART 10 - FUNCTION HOISTING
// ========================================

// Function declarations are hoisted.
// Therefore, the function can be called
// before its declaration.

greet();

function greet() {

    console.log("Hello JavaScript!");
}


// ========================================
// PART 11 - var HOISTING
// ========================================

console.log("Value of x:", x);

var x = 100;

console.log("Value after assignment:", x);


// ========================================
// PART 12 - UNDERSTANDING var HOISTING
// ========================================

// JavaScript behaves approximately like:
//
// var score;
// console.log(score);
// score = 90;

var score = 90;

console.log("Score:", score);


// ========================================
// PART 13 - let HOISTING / TEMPORAL DEAD ZONE
// ========================================

// let is also hoisted internally,
// but it cannot be accessed before
// its declaration.

let studentAge = 23;

console.log("Student Age:", studentAge);


// console.log(userAge);
// let userAge = 23;
//
// This causes a ReferenceError.


// ========================================
// PART 14 - const HOISTING / TEMPORAL DEAD ZONE
// ========================================

// const also cannot be accessed
// before its declaration.

// console.log(countryName);
// const countryName = "Pakistan";

// This causes a ReferenceError.


// ========================================
// PART 15 - FUNCTION DECLARATION HOISTING
// ========================================

calculateSum(10, 20);

function calculateSum(num1, num2) {

    var result = num1 + num2;

    console.log("Sum:", result);
}


// ========================================
// PART 16 - FUNCTION EXPRESSION
// ========================================

// Function expressions behave differently
// from function declarations.

var calculate = function (num1, num2) {

    return num1 + num2;
};

console.log("Function Expression:", calculate(10, 20));


// ========================================
// PART 17 - ARROW FUNCTION
// ========================================

var multiply = (num1, num2) => {

    return num1 * num2;
};

console.log("Arrow Function:", multiply(5, 4));


// ========================================
// PART 18 - HOISTING OUTPUT PRACTICE
// ========================================

console.log(firstNumber);

var firstNumber = 50;

console.log(firstNumber);


// ========================================
// PART 19 - SCOPE PRACTICE
// ========================================

var product = "Laptop";

function productDetails() {

    var price = 80000;

    if (price > 50000) {

        let discount = 5000;

        console.log("Product:", product);
        console.log("Price:", price);
        console.log("Discount:", discount);
    }

    console.log("Product Outside Block:", product);
    console.log("Price Outside Block:", price);

    // discount cannot be accessed here.
}

productDetails();


// ========================================
// PART 20 - REAL-WORLD SCOPE EXAMPLE
// Student Result System
// ========================================

var schoolName = "Saylani Mass IT Training";

function studentResult() {

    var student = "Muntazir";
    var totalMarks = 500;
    var obtainedMarks = 450;

    var percentage = (obtainedMarks / totalMarks) * 100;

    if (percentage >= 80) {

        let grade = "A";

        console.log("School:", schoolName);
        console.log("Student:", student);
        console.log("Percentage:", percentage + "%");
        console.log("Grade:", grade);
    }
}

studentResult();


// ========================================
// PART 21 - REAL-WORLD SCOPE EXAMPLE
// Bank Account
// ========================================

var bankName = "ABC Bank";

function bankAccount() {

    var balance = 50000;

    if (balance >= 50000) {

        let accountStatus = "Premium";

        console.log("Bank:", bankName);
        console.log("Balance:", balance);
        console.log("Account:", accountStatus);
    }
}

bankAccount();


// ========================================
// PART 22 - SCOPE + FUNCTION
// ========================================

var userName = "Muntazir";

function userProfile() {

    var age = 23;

    function displayProfile() {

        console.log("Name:", userName);
        console.log("Age:", age);
    }

    displayProfile();
}

userProfile();







