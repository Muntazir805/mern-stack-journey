// =========================================
// DAY 12 - REAL-WORLD PROBLEMS PRACTICE
// USING THREE TYPES OF FUNCTIONS
// =========================================


// =========================================
// 1. Student Result System
// Function Declaration
// =========================================

console.group("1. Student Result System");

function getStudentInformation() {

    let studentName = prompt("Enter student name:");
    let totalMarks = +prompt("Enter total marks:");
    let obtainedMarks = +prompt("Enter obtained marks:");

    let percentage = calculatePercentage(obtainedMarks, totalMarks);

    let grade = calculateGrade(percentage);

    displayResult(studentName, totalMarks, obtainedMarks, percentage, grade);
}


function calculatePercentage(obtainedMarks, totalMarks) {

    return (obtainedMarks / totalMarks) * 100;
}


function calculateGrade(percentage) {

    if (percentage >= 90) {
        return "A+";

    } else if (percentage >= 80) {
        return "A";

    } else if (percentage >= 75) {
        return "B+";

    } else if (percentage >= 70) {
        return "B";

    } else if (percentage >= 65) {
        return "C+";

    } else if (percentage >= 60) {
        return "C";

    } else if (percentage >= 55) {
        return "D+";

    } else if (percentage >= 50) {
        return "D";

    } else {
        return "Fail";
    }
}


function displayResult(studentName, totalMarks, obtainedMarks, percentage, grade) {

    console.log("Student Name:", studentName);
    console.log("Total Marks:", totalMarks);
    console.log("Obtained Marks:", obtainedMarks);
    console.log("Percentage:", percentage + "%");
    console.log("Grade:", grade);
}


getStudentInformation();

console.groupEnd();


// =========================================
// 2. Bank Account Opening
// Function Expression
// =========================================

console.group("2. Bank Account Opening");


const getCustomerName = function () {

    return prompt("Enter your full name:");
};


const getCustomerAge = function () {

    return +prompt("Enter your age:");
};


const getCustomerCity = function () {

    return prompt("Enter your city:");
};


const getCustomerCNIC = function () {

    return prompt("Enter your CNIC number:");
};


const getInitialDeposit = function () {

    return +prompt("Enter initial deposit:");
};


const getAccountStatus = function (age, initialDeposit) {

    if (age >= 18 && initialDeposit > 0) {
        return "Approved";
    }

    return "Rejected";
};


const displayAccountInformation = function () {

    let name = getCustomerName();
    let age = getCustomerAge();
    let city = getCustomerCity();
    let cnic = getCustomerCNIC();
    let initialDeposit = getInitialDeposit();

    let status = getAccountStatus(age,initialDeposit);

    console.log("Account Status:", status);
    console.log("Customer Name:", name);
    console.log("Age:", age);
    console.log("City:", city);
    console.log("CNIC:", cnic);
    console.log("Initial Deposit:", initialDeposit);
};


displayAccountInformation();

console.groupEnd();


// =========================================
// 3. Banking Transaction System
// Arrow Function
// =========================================

console.group("3. Banking Transaction System");


let currentBalance = 50000;


const checkBalance = () => {

    console.log("Current Balance:", currentBalance);
};


const depositAmount = (amount) => {

    return currentBalance + amount;
};


const withdrawAmount = (amount) => {

    return currentBalance - amount;
};


const handleTransaction = () => {

    let userChoice = +prompt(
        "Choose an option:\n" +
        "1. Check Balance\n" +
        "2. Deposit\n" +
        "3. Withdraw"
    );


    if (userChoice === 1) {

        checkBalance();

    }

    else if (userChoice === 2) {

        let amount = +prompt( "Enter deposit amount:" );

        if (amount > 0) {

            let newBalance = depositAmount(amount);

            currentBalance = newBalance;

            console.log("Deposit:", amount);
            console.log("New Balance:", currentBalance);

        } else {

            console.log( "Deposit amount must be greater than 0." );
        }

    }

    else if (userChoice === 3) {

        let amount = +prompt( "Enter withdrawal amount:" );

        if (amount <= 0) {

            console.log("Invalid withdrawal amount.");

        }

        else if (amount > currentBalance) {

            console.log("Insufficient balance.");

        }

        else {

            let newBalance = withdrawAmount(amount);

            currentBalance = newBalance;

            console.log("Withdrawal:", amount);
            console.log("New Balance:", currentBalance);
        }

    }

    else {

        console.log("Invalid choice.");
    }
};


handleTransaction();

console.groupEnd();


// =========================================
// 4. E-Commerce Product Purchase
// Function Expression
// =========================================

console.group("4. E-Commerce Product Purchase");


const calculateSubtotal = function (productPrice,productQuantity) {

    return productPrice * productQuantity;
};


const calculateDiscount = function (subtotal) {

    if (subtotal >= 5000) {

        return subtotal * 0.10;

    } else if (subtotal >= 3000) {

        return subtotal * 0.05;

    } else {

        return 0;
    }
};


const calculateFinalPrice = function (subtotal,discount) {

    return subtotal - discount;
};


const displayOrderSummary = function () {

    let productName = prompt("Enter product name:");

    let productPrice = +prompt("Enter product price:");

    let productQuantity = +prompt("Enter quantity:");

    let subtotal = calculateSubtotal(productPrice,productQuantity);

    let discount = calculateDiscount(subtotal);

    let finalPrice = calculateFinalPrice(subtotal,discount);

    console.log("Product:", productName);
    console.log("Price:", productPrice);
    console.log("Quantity:", productQuantity);
    console.log("Subtotal:", subtotal);
    console.log("Discount:", discount);
    console.log("Final Price:", finalPrice);
};


displayOrderSummary();

console.groupEnd();



// =========================================
// 5. Mobile Package Purchase
// Function Declaration
// =========================================

console.group("5. Mobile Package Purchase");


function showPackagePrice(packageName) {

    if (packageName.toLowerCase() === "basic") {

        return 500;

    } else if (packageName.toLowerCase() === "standard") {

        return 1000;

    } else if (packageName.toLowerCase() === "premium") {

        return 1500;

    } else {

        return 0;
    }
}


function calculatePackageTax(price) {

    let taxRate = 0.10;

    return price * taxRate;
}


function calculatePackageFinalPrice(price, tax) {

    return price + tax; 
}


function displayPackageDetails() {

    let packageName = prompt("Enter package : \n Basic \n Standard \n Premium ");

    let price = showPackagePrice( packageName );

    if (price === 0) {

        console.log("Invalid package.");

        return;
    }

    let tax = calculatePackageTax(price);

    let finalPrice = calculatePackageFinalPrice(price, tax );

    console.log( "Selected Package:", packageName );

    console.log( "Package Price:", price );

    console.log( "Tax:",tax );

    console.log( "Final Price:", finalPrice );
}


displayPackageDetails();

console.groupEnd();


// =========================================
// 6. Restaurant Order System
// Function Expression
// =========================================

console.group("6. Restaurant Order System");


const calculateRestaurantSubtotal = function (itemPrice, quantity) {

        return itemPrice * quantity;
    };


const calculateServiceCharge = function (subtotal) {

        let serviceRate = 0.10;

        return subtotal * serviceRate;
    };


const calculateFinalBill = function (subtotal, serviceCharge) {

        return subtotal + serviceCharge;
    };


const displayRestaurantBill =
    function () {

        let customerName = prompt("Enter customer name:");

        let itemName = prompt("Enter food item:");

        let itemPrice = +prompt("Enter item price:");

        let quantity = +prompt("Enter quantity:");

        let subtotal = calculateRestaurantSubtotal(itemPrice, quantity);

        let serviceCharge = calculateServiceCharge(subtotal);

        let finalBill = calculateFinalBill(subtotal, serviceCharge );

        console.log("Customer:", customerName);
        console.log("Item:", itemName);
        console.log("Quantity:", quantity);
        console.log("Subtotal:", subtotal);
        console.log("Service Charge:", serviceCharge);
        console.log("Final Bill:", finalBill);
    };


displayRestaurantBill();

console.groupEnd();


// =========================================
// 7. Employee Salary Calculator
// Arrow Function
// =========================================

console.group("7. Employee Salary Calculator");


const calculateAllowance = (salary) => {

    if (salary >= 50000) {

        return salary * 0.10;

    } else {

        return salary * 0.05;
    }
};


const calculateSalaryTax = (salary) => {

    if (salary >= 100000) {

        return salary * 0.10;

    } else if (salary >= 50000) {

        return salary * 0.05;

    } else {

        return 0;
    }
};


const calculateNetSalary = (salary, allowance, tax ) => {

    return salary + allowance - tax;
};


const displaySalarySlip = () => {

    let employeeName = prompt( "Enter employee name:" );

    let basicSalary = +prompt( "Enter basic salary:" );

    let allowance = calculateAllowance(basicSalary);

    let tax = calculateSalaryTax(basicSalary);

    let netSalary = calculateNetSalary(basicSalary, allowance, tax );


    console.log( "Employee Name:", employeeName );

    console.log( "Basic Salary:", basicSalary );

    console.log( "Allowance:", allowance );

    console.log( "Tax:", tax );

    console.log( "Net Salary:", netSalary );
};


displaySalarySlip();

console.groupEnd();


// =========================================
// 8. Electricity Bill System
// Function Declaration
// =========================================

console.group("8. Electricity Bill System");


function calculateElectricityBill(units) {

    let bill = 0;


    if (units <= 100) {

        bill = units * 10;

    }

    else if (units <= 200) {

        bill = (100 * 10) + ((units - 100) * 15);

    }

    else {

        bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
    }


    return bill;
}


function calculateElectricityTax(bill) {

    let taxRate = 0.05;

    return bill * taxRate;
}


function calculateFinalElectricityBill(bill, tax) {

    return bill + tax;
}


function displayElectricityBill() {

    let customerName = prompt( "Enter customer name:");

    let units = +prompt( "Enter consumed units:" );

    let bill = calculateElectricityBill( units );

    let tax = calculateElectricityTax(bill);

    let finalBill = calculateFinalElectricityBill(bill, tax );


    console.log( "Customer Name:", customerName );

    console.log( "Consumed Units:", units );

    console.log( "Bill:", bill );

    console.log( "Tax:", tax );

    console.log( "Final Bill:", finalBill );
}


displayElectricityBill();

console.groupEnd();


// =========================================
// 9. Online Course Enrollment
// Function Expression
// =========================================

console.group("9. Online Course Enrollment");


const checkEligibility = function (age) {

    return age >= 16;
};


const getCoursePrice = function (course) {

    let courseName = course.toLowerCase();


    if (courseName === "web development") {

        return 10000;

    } else if (courseName === "graphic design") {

        return 8000;

    } else if (courseName === "data science") {

        return 12000;

    } else {

        return 0;
    }
};


const calculateCourseDiscount = function (price) {

        if (price >= 10000) {

            return price * 0.10;

        } else {

            return price * 0.05;
        }
    };


const calculateFinalCourseFee = function (price, discount) {

        return price - discount;
    };


const displayEnrollment = function () {

        let studentName = prompt( "Enter student name:");

        let studentAge = +prompt( "Enter student age:");

        let course = prompt(
            "Enter course:\n" +
            "Web Development\n" +
            "Graphic Design\n" +
            "Data Science"
        );


        if (!checkEligibility(studentAge)) {

            console.log( "Enrollment Rejected: " + "Student must be at least 16 years old." );

            return;
        }


        let coursePrice = getCoursePrice(course);


        if (coursePrice === 0) {

            console.log( "Invalid course selected." );

            return;
        }


        let discount = calculateCourseDiscount(coursePrice);


        let finalFee = calculateFinalCourseFee( coursePrice, discount);


        console.log( "Student Name:", studentName );

        console.log( "Course:", course );

        console.log( "Course Price:", coursePrice);

        console.log( "Discount:", discount);

        console.log( "Final Fee:", finalFee );
    };


displayEnrollment();

console.groupEnd();


// =========================================
// 10. ATM Withdrawal System
// Arrow Function
// =========================================

console.group("10. ATM Withdrawal System");


let atmBalance = 50000;

let correctPIN = "1234";


const checkPIN = (pin) => {

    return pin === correctPIN;
};


const checkATMBalance = () => {

    return atmBalance;
};


const withdrawMoney = (amount) => {

    if (amount <= 0) {

        return "Invalid withdrawal amount.";

    }

    if (amount > atmBalance) {

        return "Insufficient balance.";
    }


    atmBalance = atmBalance - amount;

    return atmBalance;
};


const displayTransaction = () => {

    let pin = prompt( "Enter ATM PIN:" );


    if (!checkPIN(pin)) {

        console.log( "Transaction Rejected: Incorrect PIN." );

        return;
    }


    console.log( "Current Balance:", checkATMBalance());


    let amount = +prompt( "Enter withdrawal amount:" );


    let result = withdrawMoney(amount);


    if (typeof result === "number") {

        console.log( "Transaction Successful" );

        console.log( "Amount Withdrawn:", amount);

        console.log( "Remaining Balance:", result );

    } else {

        console.log(result);
    }
};


displayTransaction();

console.groupEnd();

