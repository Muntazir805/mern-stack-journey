// ======================================
// Day 5 JavaScript Practice
// Strings
// ======================================


// ======================================
// 1. Creating Strings
// ======================================

console.group("Creating Strings");

let firstName = 'Muntazir';
let lastName = "Hussain";
let language = `JavaScript`;

console.log(firstName);
console.log(lastName);
console.log(language);

console.groupEnd();


// ======================================
// 2. Template Literals
// ======================================

console.group("Template Literals");

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

console.log("My name is " + name + " and I am " + age + " years old.");

console.log(`My name is ${name} and I am ${age} years old.`);

console.groupEnd();


// ======================================
// 3. Escape Characters
// ======================================

console.group("Escape Characters");

console.log("I'm learning JavaScript.");
console.log('She said, "Hello!"');
console.log("C:\\Users\\Student");
console.log("HTML\nCSS\nJavaScript");
console.log("Name\tAge\tCity");

console.groupEnd();


// ======================================
// 4. String Length
// ======================================

console.group("String Length");

let fullName = prompt("Enter your full name:");

console.log(fullName);
console.log(fullName.length);

console.groupEnd();


// ======================================
// 5. Case Conversion
// ======================================

console.group("Case Conversion");

let city = prompt("Enter your city:");

console.log(city.toUpperCase());
console.log(city.toLowerCase());

console.groupEnd();


// ======================================
// 6. Trim Methods
// ======================================

console.group("Trim Methods");

let username = prompt("Enter username with spaces:");

console.log(username);

console.log(username.trim());

console.log(username.trimStart());

console.log(username.trimEnd());

console.groupEnd();


// ======================================
// 7. Search Methods
// ======================================

console.group("Search Methods");

let sentence = prompt("Enter a sentence:");

console.log(sentence.includes("JavaScript"));

console.log(sentence.startsWith("I"));

console.log(sentence.endsWith("."));

console.log(sentence.indexOf("JavaScript"));

console.log(sentence.lastIndexOf("a"));

console.groupEnd();


// ======================================
// 8. Slice & Substring
// ======================================

console.group("Slice & Substring");

let word = prompt("Enter a word:");

console.log(word.slice(0, 4));

console.log(word.substring(0, 4));

console.groupEnd();


// ======================================
// 9. Replace Methods
// ======================================

console.group("Replace Methods");

let text = prompt("Enter a sentence:");

console.log(text.replace("JavaScript", "JS"));

console.log(text.replaceAll("JavaScript", "JS"));

console.groupEnd();


// ======================================
// 10. Split Method
// ======================================

console.group("Split Method");

let skills = prompt("Enter skills separated by commas:");

console.log(skills);

console.log(skills.split(","));

console.groupEnd();


// ======================================
// 11. String Concatenation
// ======================================

console.group("String Concatenation");

let first = prompt("Enter first name:");
let last = prompt("Enter last name:");

let fullNameOne = first + " " + last;

console.log(fullNameOne);

let fullNameTwo = `${first} ${last}`;

console.log(fullNameTwo);

console.groupEnd();


// ======================================
// 12. Username Formatter
// ======================================

console.group("Username Formatter");

let user = prompt("Enter username:");

console.log(user.trim().toLowerCase());

console.groupEnd();


// ======================================
// 13. Email Formatter
// ======================================

console.group("Email Formatter");

let email = prompt("Enter your email:");

console.log(email.trim().toLowerCase());

console.log(email.includes("@"));

console.groupEnd();


// ======================================
// 14. Password Length Checker
// ======================================

console.group("Password Length Checker");

let password = prompt("Enter your password:");

console.log(password);

console.log(password.length);

console.log(password.length >= 8);

console.groupEnd();


// ======================================
// 15. Completion
// ======================================

alert("Congratulations! You completed Day 5 Practice.");

console.log("Day 5 Practice Completed Successfully!");