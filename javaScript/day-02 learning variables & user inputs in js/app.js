// ======================================
// Day 2 JavaScript Practice
// ======================================

// ======================================
// 1. Welcome Message
// ======================================

alert("Welcome to Day 2 JavaScript Practice!");

console.log("Let's start practicing JavaScript.");

// ======================================
// 2. Student Profile
// ======================================

console.group("Student Profile");

let studentName = prompt("Enter your name:");
let studentAge = prompt("Enter your age:");
let university = prompt("Enter your university:");
let department = prompt("Enter your department:");

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("University:", university);
console.log("Department:", department);

console.groupEnd();

// ======================================
// 3. Variable Reassignment Practice
// ======================================

console.group("Variable Reassignment");

let favoriteLanguage = "JavaScript";

console.log("Favorite Language:", favoriteLanguage);

favoriteLanguage = "Python";

console.log("Updated Language:", favoriteLanguage);

console.groupEnd();

// ======================================
// 4. const Practice
// ======================================

console.group("Const Practice");

const country = "Pakistan";

console.log("Country:", country);

console.groupEnd();

// ======================================
// 5. var Practice
// ======================================

console.group("Var Practice");

var city = "Hyderabad";

console.log("City:", city);

city = "Karachi";

console.log("Updated City:", city);

console.groupEnd();

// ======================================
// 6. User Registration
// ======================================

console.group("User Registration");

alert("Please fill in your details.");

let fullName = prompt("Enter your full name:");
let age = prompt("Enter your age:");
let userCity = prompt("Enter your city:");
let language = prompt("Enter your favorite programming language:");

let submit = confirm("Do you want to submit your information?");

console.log("Name:", fullName);
console.log("Age:", age);
console.log("City:", userCity);
console.log("Favorite Language:", language);
console.log("Submitted:", submit);

console.groupEnd();

// ======================================
// 7. Completion Message
// ======================================

alert("Congratulations! You completed today's practice.");

console.log("Day 2 Practice Completed Successfully!");
