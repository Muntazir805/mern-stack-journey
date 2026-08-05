// ==================================================
//    Student Registration Form To Practice Js Code
// ==================================================

console.group("Student Registration!");

console.group("Personal Information");

let studentName = prompt("Enter your full name : ");
const FatherName = prompt("Enter your father name : ");
let studentAge = +prompt("Enter your age : ");
const studentGender = prompt("Enter your gender : ");
let studentEmail = prompt("Enter your email address : ");
let phoneNumber = +prompt("Enter your phone number : ");
let address = prompt("Enter your address : ");

console.log("Student's Name : " + studentName);
console.log("Student's Father's Name : " + FatherName);
console.log("Student's Age is : " + studentAge);
console.log("Student's Gender is : " + studentGender);
console.log("Student's Email Address is : " + studentEmail);
console.log("Student's Phone Number is : " + phoneNumber);
console.log("Student's Address is : " + address);

console.groupEnd();

console.group("Academic Information");

let universityName = prompt("Enter your University Name : ");
let department = prompt("Enter your Department : ");
let semester = +prompt("Enter your Semester in number : ");
let rollNumber = prompt("Enter your RollNumber : ");
let cgpa = +prompt("Enter your previous semester cgpa : ");

console.log("University : " + universityName);
console.log("Department : " + department);
console.log("Semester : " + semester);
console.log("RollNumber : " + rollNumber);
console.log("Previous Semester CGPA : " + cgpa);

console.groupEnd();

console.group("Course Information");

let course = prompt("Enter your course name : ");
let batch = +prompt("Enter your batch in year : ");
let mode = prompt("Enter your mode e.g onsite or online : ");
let timing = prompt("Enter your timing in hours and minutes e.g 12 : 30 : ");

console.log("Course : " + course);
console.log("Batch : " + batch);
console.log("Mode : " + mode);
console.log("Timing : " + timing);

console.groupEnd();

console.group("Emergency Contact");

let emergencyContactName = prompt("Enter your Emergency Contact Name : ");
let relationship = prompt(
  "Enter the relationship of Emergency Contact Name with you : ",
);
let emergencyContactNumber = +prompt("Enter number of emergency contact : ");

console.log("Name : " + emergencyContactName);
console.log("Relationship : " + relationship);
console.log("Contact Number : " + emergencyContactNumber);

console.groupEnd();

console.groupEnd();

// ===================================================
//    Making Mini Calculator To Practice JS Code
// ===================================================

console.group("Mini Calculator!");

let firstNumber = +prompt("Enter First Number : ");

let secondNumber = +prompt("Enter Second Number : ");

let result;

result = firstNumber + secondNumber;

console.log("The Addition of two number is : " + result);

result = firstNumber - secondNumber;

console.log("The Subtraction of two numbers is : " + result);

result = firstNumber / secondNumber;

console.log("The Division of two number is : " + result);

result = firstNumber % 2;

console.log("The Modulus of first number is : " + result);

console.groupEnd();
