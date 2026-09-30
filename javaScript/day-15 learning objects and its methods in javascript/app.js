// =========================================
// DAY 15 - OBJECTS
// Object Creation, Access, Update, Delete,
// Nested Objects, Methods & Object Methods
// =========================================

// =========================================
// LEVEL 1 - OBJECT CREATION & ACCESS
// =========================================

// 1. Create Student Object
console.group("1. Student Object");

let student = {
  name: "Muntazir",
  age: 23,
  university: "University of Sindh",
  department: "Computer Science",
  semester: 8,
  cgpa: 3.59,
};

console.log("Student:", student);

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("University:", student.university);
console.log("Department:", student.department);

console.groupEnd();

// 2. Bracket Notation
console.group("2. Bracket Notation");

console.log("Name:", student["name"]);
console.log("CGPA:", student["cgpa"]);

let property = "department";

console.log("Dynamic Property:", student[property]);

console.groupEnd();

// =========================================
// LEVEL 2 - UPDATE, ADD & DELETE
// =========================================

// 3. Update Property
console.group("3. Update Property");

student.age = 24;
student.cgpa = 3.7;

console.log("Updated Student:", student);

console.groupEnd();

// 4. Add New Property
console.group("4. Add Property");

student.email = "muntazir@example.com";
student.city = "Hyderabad";

console.log("After Adding Properties:", student);

console.groupEnd();

// 5. Delete Property
console.group("5. Delete Property");

delete student.city;

console.log("After Deleting City:", student);

console.groupEnd();

// =========================================
// LEVEL 3 - NESTED OBJECTS
// =========================================

// 6. Nested Object
console.group("6. Nested Object");

let studentProfile = {
  name: "Muntazir",
  age: 24,

  contact: {
    email: "muntazir@example.com",
    phone: "03001234567",
  },

  address: {
    city: "Hyderabad",
    country: "Pakistan",
  },
};

console.log("Student Profile:", studentProfile);

console.log("Email:", studentProfile.contact.email);
console.log("Phone:", studentProfile.contact.phone);
console.log("City:", studentProfile.address.city);
console.log("Country:", studentProfile.address.country);

console.groupEnd();

// 7. Update Nested Property
console.group("7. Update Nested Property");

studentProfile.address.city = "Karachi";

studentProfile.contact.email = "newemail@example.com";

console.log("Updated Profile:", studentProfile);

console.groupEnd();

// =========================================
// LEVEL 4 - OBJECT METHODS
// =========================================

// 8. Object Method
console.group("8. Object Method");

let user = {
  firstName: "Muntazir",
  lastName: "Hussain",

  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(user.getFullName());

console.groupEnd();

// 9. Employee Method
console.group("9. Employee Method");

let employee = {
  name: "Ahmed",
  department: "IT",
  salary: 60000,

  getDetails: function () {
    return `${this.name} works in ${this.department}`;
  },

  getAnnualSalary: function () {
    return this.salary * 12;
  },
};

console.log(employee.getDetails());
console.log("Annual Salary:", employee.getAnnualSalary());

console.groupEnd();

// =========================================
// LEVEL 5 - OBJECT.KEYS()
// =========================================

// 10. Object.keys()
console.group("10. Object.keys()");

let employeeData = {
  id: 101,
  name: "Ali",
  department: "Software Development",
  salary: 75000,
  city: "Hyderabad",
};

let employeeKeys = Object.keys(employeeData);

console.log("Keys:", employeeKeys);

console.groupEnd();

// =========================================
// LEVEL 6 - OBJECT.VALUES()
// =========================================

// 11. Object.values()
console.group("11. Object.values()");

let employeeValues = Object.values(employeeData);

console.log("Values:", employeeValues);

console.groupEnd();

// =========================================
// LEVEL 7 - OBJECT.ENTRIES()
// =========================================

// 12. Object.entries()
console.group("12. Object.entries()");

let employeeEntries = Object.entries(employeeData);

console.log("Entries:", employeeEntries);

console.groupEnd();

// =========================================
// LEVEL 8 - HASOWNPROPERTY()
// =========================================

// 13. hasOwnProperty()
console.group("13. hasOwnProperty()");

console.log("Has name:", employeeData.hasOwnProperty("name"));

console.log("Has age:", employeeData.hasOwnProperty("age"));

console.log("Has salary:", employeeData.hasOwnProperty("salary"));

console.groupEnd();

// =========================================
// LEVEL 9 - OPTIONAL CHAINING
// =========================================

// 14. Optional Chaining
console.group("14. Optional Chaining");

let person = {
  name: "Sara",
  contact: {
    email: "sara@example.com",
  },
};

console.log("Name:", person.name);
console.log("Email:", person.contact?.email);
console.log("Phone:", person.contact?.phone);
console.log("City:", person.address?.city);

console.groupEnd();

// =========================================
// LEVEL 10 - STUDENT DATABASE
// =========================================

// 15. Student Database
console.group("15. Student Database");

let studentDatabase = {
  studentId: 1001,
  name: "Muntazir Hussain",
  age: 23,

  academic: {
    university: "University of Sindh",
    department: "Computer Science",
    semester: 8,
    cgpa: 3.59,
  },

  contact: {
    email: "muntazir@example.com",
    phone: "03001234567",
  },

  address: {
    city: "Hyderabad",
    country: "Pakistan",
  },

  getStudentInfo: function () {
    return `${this.name} - ${this.academic.department}`;
  },
};

console.log("Student Name:", studentDatabase.name);
console.log("University:", studentDatabase.academic.university);
console.log("Department:", studentDatabase.academic.department);
console.log("CGPA:", studentDatabase.academic.cgpa);
console.log("Email:", studentDatabase.contact.email);
console.log("City:", studentDatabase.address.city);

console.log("Student Info:", studentDatabase.getStudentInfo());

console.groupEnd();

// =========================================
// 16. Update Student Database
// =========================================

console.group("16. Update Student Database");

studentDatabase.academic.cgpa = 3.7;

studentDatabase.academic.semester = 9;

studentDatabase.contact.phone = "03111234567";

studentDatabase.address.city = "Karachi";

console.log("Updated Database:", studentDatabase);

console.groupEnd();

// =========================================
// 17. Object Information
// =========================================

console.group("17. Student Object Information");

console.log("Properties:", Object.keys(studentDatabase));

console.log("Values:", Object.values(studentDatabase));

console.log("Entries:", Object.entries(studentDatabase));

console.groupEnd();

// =========================================
// LEVEL 11 - EMPLOYEE DATABASE
// =========================================

// 18. Employee Database
console.group("18. Employee Database");

let employeeDatabase = {
  employeeId: 501,

  name: "Ahmed Ali",

  position: "Junior Developer",

  department: "Software Development",

  salary: 70000,

  skills: {
    frontend: "JavaScript",
    backend: "Node.js",
    database: "MongoDB",
  },

  contact: {
    email: "ahmed@example.com",
    phone: "03221234567",
  },

  getEmployeeInfo: function () {
    return `${this.name} - ${this.position}`;
  },

  getAnnualSalary: function () {
    return this.salary * 12;
  },
};

console.log("Employee:", employeeDatabase.name);
console.log("Position:", employeeDatabase.position);
console.log("Department:", employeeDatabase.department);
console.log("Salary:", employeeDatabase.salary);

console.log("Frontend Skill:", employeeDatabase.skills.frontend);

console.log("Employee Info:", employeeDatabase.getEmployeeInfo());

console.log("Annual Salary:", employeeDatabase.getAnnualSalary());

console.groupEnd();

// =========================================
// 19. Employee Update & Delete
// =========================================

console.group("19. Employee Update & Delete");

employeeDatabase.salary = 80000;

employeeDatabase.position = "Software Developer";

employeeDatabase.skills.frontend = "React";

employeeDatabase.city = "Hyderabad";

delete employeeDatabase.city;

console.log("Updated Employee:", employeeDatabase);

console.groupEnd();

// =========================================
// 20. Final Object Practice
// =========================================

console.group("20. Final Object Practice");

console.log("Employee Properties:", Object.keys(employeeDatabase));

console.log("Employee Values:", Object.values(employeeDatabase));

console.log("Has Salary:", employeeDatabase.hasOwnProperty("salary"));

console.log("Has Age:", employeeDatabase.hasOwnProperty("age"));

console.log("Optional Phone:", employeeDatabase.contact?.phone);

console.log("Optional Address:", employeeDatabase.address?.city);

console.groupEnd();
