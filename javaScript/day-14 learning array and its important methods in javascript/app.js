// =========================================
// DAY 14 - ARRAYS
// Array Methods & Problem Solving
// =========================================

// =========================================
// LEVEL 1 - CREATE, ACCESS & UPDATE
// =========================================

// 1. Create and Access Array
console.group("1. Create and Access Array");

let students = ["Ali", "Ahmed", "Sara", "Ayesha", "Hamza"];

console.log("Students:", students);
console.log("First Student:", students[0]);
console.log("Last Student:", students[students.length - 1]);
console.log("Third Student:", students[2]);

console.groupEnd();

// 2. Update Array Element
console.group("2. Update Array Element");

students[1] = "Usman";

console.log("Updated Students:", students);

console.groupEnd();

// 3. Delete Array Element
console.group("3. Delete Array Element");

delete students[3];

console.log("After Delete:", students);

console.groupEnd();

// =========================================
// LEVEL 2 - ADD & REMOVE ELEMENTS
// =========================================

// 4. push()
console.group("4. Push");

let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");

console.log(fruits)

console.groupEnd();

// 5. pop()
console.group("5. Pop");

fruits.pop();
 
console.log(fruits)

console.groupEnd();

// 6. unshift()
console.group("6. Unshift");

fruits.unshift("Grapes");

console.log(fruits);

console.groupEnd();

// 7. shift()
console.group("7. Shift");

fruits.shift();

console.log(fruits);

console.groupEnd();

// =========================================
// LEVEL 3 - SLICE, SPLICE & CONCAT
// =========================================

// 8. splice()
console.group("8. Splice");

let colors = ["Red", "Green", "Blue", "Yellow", "Black"];

colors.splice(2, 1, "Purple");

console.log("After Splice:", colors);

console.groupEnd();

// 9. slice()
console.group("9. Slice");

let selectedColors = colors.slice(1, 4);

console.log("Original:", colors);
console.log("Selected:", selectedColors);

console.groupEnd();

// 10. concat()
console.group("10. Concat");

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node.js", "Express"];

let technologies = frontend.concat(backend);

console.log("Technologies:", technologies);

console.groupEnd();

// =========================================
// LEVEL 4 - SEARCHING
// =========================================

// 11. includes()
console.group("11. Includes");

let languages = ["JavaScript", "Python", "Java", "C++"];

console.log("JavaScript exists:", languages.includes("JavaScript"));

console.log("PHP exists:", languages.includes("PHP"));

console.groupEnd();

// 12. indexOf()
console.group("12. IndexOf");

console.log("Position of Java:", languages.indexOf("Java"));

console.groupEnd();

// 13. find()
console.group("13. Find");

let marks = [45, 67, 82, 91, 55, 76];

let firstHighMark = marks.find(function (mark) {
  return mark >= 80;
});

console.log("First mark above 80:", firstHighMark);

console.groupEnd();

// 14. findIndex()
console.group("14. FindIndex");

let firstHighMarkIndex = marks.findIndex(function (mark) {
  return mark >= 80;
});

console.log("Index:", firstHighMarkIndex);

console.groupEnd();

// =========================================
// LEVEL 5 - MAP, FILTER & REDUCE
// =========================================

// 15. map()
console.group("15. Map");

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log("Original:", numbers);
console.log("Doubled:", doubledNumbers);

console.groupEnd();

// 16. filter()
console.group("16. Filter");

let passingMarks = marks.filter(function (mark) {
  return mark >= 50;
});

console.log("Passing Marks:", passingMarks);

console.groupEnd();

// 17. reduce()
console.group("17. Reduce");

let prices = [500, 1000, 750, 250];

let totalPrice = prices.reduce(function (total, price) {
  return total + price;
}, 0);

console.log("Total Price:", totalPrice);

console.groupEnd();

// =========================================
// LEVEL 6 - SOME & EVERY
// =========================================

// 18. some()
console.group("18. Some");

let hasFailedStudent = marks.some(function (mark) {
  return mark < 50;
});

console.log("Any student failed:", hasFailedStudent);

console.groupEnd();

// 19. every()
console.group("19. Every");

let allStudentsPassed = marks.every(function (mark) {
  return mark >= 40;
});

console.log("Everyone passed:", allStudentsPassed);

console.groupEnd();

// =========================================
// LEVEL 7 - SORT & REVERSE
// =========================================

// 20. sort()
console.group("20. Sort");

let numbersForSort = [50, 10, 100, 25, 5];

numbersForSort.sort(function (a, b) {
  return a - b;
});

console.log("Ascending:", numbersForSort);

numbersForSort.sort(function (a, b) {
  return b - a;
});

console.log("Descending:", numbersForSort);

console.groupEnd();

// 21. reverse()
console.group("21. Reverse");

let names = ["Ali", "Ahmed", "Sara", "Hamza"];

names.reverse();

console.log("Reversed:", names);

console.groupEnd();

// =========================================
// LEVEL 8 - FLAT & FLATMAP
// =========================================

// 22. flat()
console.group("22. Flat");

let nestedNumbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let flatNumbers = nestedNumbers.flat();

console.log("Nested:", nestedNumbers);
console.log("Flat:", flatNumbers);

console.groupEnd();

// 23. flatMap()
console.group("23. FlatMap");

let numbersForFlatMap = [1, 2, 3, 4];

let doubledFlatNumbers = numbersForFlatMap.flatMap(function (number) {
  return [number, number * 2];
});

console.log("Result:", doubledFlatNumbers);

console.groupEnd();

// =========================================
// LEVEL 9 - ARRAY ITERATION
// =========================================

// 24. for Loop
console.group("24. For Loop");

let programmingLanguages = ["JavaScript", "Python", "Java", "C++"];

for (let i = 0; i < programmingLanguages.length; i++) {
  console.log(programmingLanguages[i]);
}

console.groupEnd();

// 25. for...of
console.group("25. For...of");

for (let language of programmingLanguages) {
  console.log(language);
}

console.groupEnd();

// 26. forEach()
console.group("26. forEach");

programmingLanguages.forEach(function (language) {
  console.log(language);
});

console.groupEnd();

// =========================================
// LEVEL 10 - REAL PROBLEM SOLVING
// =========================================

// 27. Student Result System
console.group("27. Student Result System");

let studentMarks = [85, 72, 91, 64, 78];

let totalMarks = studentMarks.reduce(function (total, mark) {
  return total + mark;
}, 0);

let averageMarks = totalMarks / studentMarks.length;

let passedStudents = studentMarks.filter(function (mark) {
  return mark >= 50;
});

console.log("Marks:", studentMarks);
console.log("Total:", totalMarks);
console.log("Average:", averageMarks);
console.log("Passed Students:", passedStudents.length);

console.groupEnd();

// 28. Product Price System
console.group("28. Product Price System");

let productPrices = [1200, 2500, 800, 4500, 3000];

let expensiveProducts = productPrices.filter(function (price) {
  return price >= 2500;
});

let discountedPrices = productPrices.map(function (price) {
  return price - (price * 10) / 100;
});

console.log("Original Prices:", productPrices);
console.log("Expensive Products:", expensiveProducts);
console.log("10% Discount Prices:", discountedPrices);

console.groupEnd();

// 29. Find User
console.group("29. Find User");

let usernames = ["muntazir", "ahmed", "ali", "sara"];

let searchedUser = usernames.find(function (username) {
  return username === "ali";
});

console.log("User Found:", searchedUser);

console.groupEnd();

// 30. Array Statistics
console.group("30. Array Statistics");

let statisticsNumbers = [12, 45, 7, 89, 34, 23, 67];

let largestNumber = Math.max(...statisticsNumbers);
let smallestNumber = Math.min(...statisticsNumbers);

let totalNumbers = statisticsNumbers.reduce(function (total, number) {
  return total + number;
}, 0);

console.log("Numbers:", statisticsNumbers);
console.log("Largest:", largestNumber);
console.log("Smallest:", smallestNumber);
console.log("Total:", totalNumbers);

console.groupEnd();
