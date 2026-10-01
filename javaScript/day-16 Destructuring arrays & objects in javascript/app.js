// =========================================
// DAY 16 - DESTRUCTURING
// Array & Object Destructuring Practice
// =========================================

// =========================================
// 1. BASIC ARRAY DESTRUCTURING
// =========================================

console.group("1. Basic Array Destructuring");

let studentInfo = ["Muntazir", 23, "Computer Science"];

let [studentName, studentAge, department] = studentInfo;

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Department:", department);

console.groupEnd();

// =========================================
// 2. SKIP ARRAY VALUES
// =========================================

console.group("2. Skipping Array Values");

let colors = ["Red", "Green", "Blue", "Yellow"];

let [firstColor, , thirdColor] = colors;

console.log("First Color:", firstColor);
console.log("Third Color:", thirdColor);

console.groupEnd();

// =========================================
// 3. DEFAULT VALUES
// =========================================

console.group("3. Array Default Values");

let userData = ["Muntazir"];

let [name, age = 18, country = "Pakistan"] = userData;

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

console.groupEnd();

// =========================================
// 4. REST PATTERN
// =========================================

console.group("4. Rest Pattern");

let programmingLanguages = ["JavaScript", "Python", "Java", "C++", "PHP"];

let [firstLanguage, secondLanguage, ...otherLanguages] = programmingLanguages;

console.log("First Language:", firstLanguage);
console.log("Second Language:", secondLanguage);
console.log("Other Languages:", otherLanguages);

console.groupEnd();

// =========================================
// 5. SWAP TWO VARIABLES
// =========================================

console.group("5. Swap Variables");

let firstNumber = 10;
let secondNumber = 20;

console.log("Before Swap:");
console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);

[firstNumber, secondNumber] = [secondNumber, firstNumber];

console.log("After Swap:");
console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);

console.groupEnd();

// =========================================
// 6. BASIC OBJECT DESTRUCTURING
// =========================================

console.group("6. Basic Object Destructuring");

let student = {
  name: "Muntazir",
  age: 23,
  university: "University of Sindh",
  department: "Computer Science",
};

let {
  name: studentFullName,
  age: studentAgeValue,
  university,
  department: studentDepartment,
} = student;

console.log("Name:", studentFullName);
console.log("Age:", studentAgeValue);
console.log("University:", university);
console.log("Department:", studentDepartment);

console.groupEnd();

// =========================================
// 7. OBJECT PROPERTY RENAMING
// =========================================

console.group("7. Object Property Renaming");

let employee = {
  name: "Ahmed",
  position: "Frontend Developer",
  salary: 60000,
};

let {
  name: employeeName,
  position: employeePosition,
  salary: employeeSalary,
} = employee;

console.log("Employee Name:", employeeName);
console.log("Position:", employeePosition);
console.log("Salary:", employeeSalary);

console.groupEnd();

// =========================================
// 8. OBJECT DEFAULT VALUES
// =========================================

console.group("8. Object Default Values");

let account = {
  username: "muntazir805",
  email: "example@gmail.com",
};

let { username, email, country: accountCountry = "Pakistan" } = account;

console.log("Username:", username);
console.log("Email:", email);
console.log("Country:", accountCountry);

console.groupEnd();

// =========================================
// 9. NESTED OBJECT DESTRUCTURING
// =========================================

console.group("9. Nested Object Destructuring");

let studentProfile = {
  name: "Muntazir",
  education: {
    university: "University of Sindh",
    degree: "BS Computer Science",
    semester: 8,
  },
};

let {
  name: profileName,
  education: { university: profileUniversity, degree, semester },
} = studentProfile;

console.log("Name:", profileName);
console.log("University:", profileUniversity);
console.log("Degree:", degree);
console.log("Semester:", semester);

console.groupEnd();

// =========================================
// 10. ARRAY + OBJECT DESTRUCTURING
// =========================================

console.group("10. Array + Object Destructuring");

let students = [
  {
    name: "Ali",
    age: 22,
  },
  {
    name: "Ahmed",
    age: 23,
  },
];

let [firstStudent, secondStudent] = students;

let { name: firstStudentName, age: firstStudentAge } = firstStudent;

let { name: secondStudentName, age: secondStudentAge } = secondStudent;

console.log("First Student:", firstStudentName);
console.log("Age:", firstStudentAge);

console.log("Second Student:", secondStudentName);
console.log("Age:", secondStudentAge);

console.groupEnd();

// =========================================
// 11. DESTRUCTURING FUNCTION PARAMETERS
// =========================================

console.group("11. Destructuring Function Parameters");

function showStudent({ name, age, department }) {
  console.log("Student Name:", name);
  console.log("Student Age:", age);
  console.log("Department:", department);
}

let studentData = {
  name: "Muntazir",
  age: 23,
  department: "Computer Science",
};

showStudent(studentData);

console.groupEnd();

// =========================================
// 12. ARRAY DESTRUCTURING IN FUNCTION
// =========================================

console.group("12. Array Destructuring in Function");

function showNumbers([first, second, third]) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Third:", third);
}

showNumbers([10, 20, 30]);

console.groupEnd();

// =========================================
// 13. NESTED ARRAY DESTRUCTURING
// =========================================

console.group("13. Nested Array Destructuring");

let marks = [
  ["HTML", 90],
  ["CSS", 85],
  ["JavaScript", 95],
];

let [[htmlSubject, htmlMarks], [cssSubject, cssMarks], [jsSubject, jsMarks]] =
  marks;

console.log(htmlSubject, htmlMarks);
console.log(cssSubject, cssMarks);
console.log(jsSubject, jsMarks);

console.groupEnd();

// =========================================
// 14. STUDENT PROFILE
// =========================================

console.group("14. Student Profile");

let profile = {
  personal: {
    name: "Muntazir",
    age: 23,
  },

  academic: {
    university: "University of Sindh",
    department: "Computer Science",
    cgpa: 3.59,
  },
};

let {
  personal: { name: finalName, age: finalAge },

  academic: { university: finalUniversity, department: finalDepartment, cgpa },
} = profile;

console.log("Name:", finalName);
console.log("Age:", finalAge);
console.log("University:", finalUniversity);
console.log("Department:", finalDepartment);
console.log("CGPA:", cgpa);

console.groupEnd();

// =========================================
// 15. FINAL PRACTICE
// Combine Multiple Destructuring Concepts
// =========================================

console.group("15. Final Destructuring Practice");

let developer = {
  name: "Muntazir",
  skills: ["HTML", "CSS", "JavaScript"],
  experience: {
    level: "Beginner",
    projects: 5,
  },
};

let {
  name: developerName,
  skills: [skillOne, skillTwo, skillThree],
  experience: { level, projects },
} = developer;

console.log("Developer:", developerName);
console.log("Skill 1:", skillOne);
console.log("Skill 2:", skillTwo);
console.log("Skill 3:", skillThree);
console.log("Level:", level);
console.log("Projects:", projects);

console.groupEnd();
