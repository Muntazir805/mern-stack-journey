// =========================================
// DAY 10 - LOOP PROBLEM SOLVING
// Practice File
// =========================================


// =========================================
// LEVEL 1 - LOOP + CONDITIONS
// =========================================


// =========================================
// 1. Count Numbers Divisible by 5
// =========================================

console.group("1. Count Numbers Divisible by 5");

let countDivisibleBy5 = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0) {
        countDivisibleBy5++;
    }

}

console.log(`Count: ${countDivisibleBy5}`);

console.groupEnd();


// =========================================
// 2. Numbers Divisible by 3 and 5
// =========================================

console.group("2. Numbers Divisible by 3 and 5");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }

}

console.groupEnd();


// =========================================
// 3. Sum of Multiples of 3
// =========================================

console.group("3. Sum of Multiples of 3");

let sumMultiplesOf3 = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0) {
        sumMultiplesOf3 += i;
    }

}

console.log(`Sum: ${sumMultiplesOf3}`);

console.groupEnd();


// =========================================
// 4. Sum of Multiples of 5
// =========================================

console.group("4. Sum of Multiples of 5");

let sumMultiplesOf5 = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0) {
        sumMultiplesOf5 += i;
    }

}

console.log(`Sum: ${sumMultiplesOf5}`);

console.groupEnd();


// =========================================
// 5. Skip Multiples of 3
// =========================================

console.group("5. Skip Multiples of 3");

for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0) {
        continue;
    }

    console.log(i);

}

console.groupEnd();


// =========================================
// 6. Stop at 50
// =========================================

console.group("6. Stop at 50");

for (let i = 1; i <= 100; i++) {

    if (i === 50) {
        break;
    }

    console.log(i);

}

console.groupEnd();


// =========================================
// 7. First Number Divisible by 17
// =========================================

console.group("7. First Number Divisible by 17");

for (let i = 1; i <= 100; i++) {

    if (i % 17 === 0) {
        console.log(`First number divisible by 17: ${i}`);
        break;
    }

}

console.groupEnd();


// =========================================
// 8. Even but NOT Divisible by 4
// =========================================

console.group("8. Even but NOT Divisible by 4");

let countEvenNotDivisibleBy4 = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0 && i % 4 !== 0) {
        countEvenNotDivisibleBy4++;
    }

}

console.log(`Count: ${countEvenNotDivisibleBy4}`);

console.groupEnd();


// =========================================
// 9. Even and Odd Counter
// =========================================

console.group("9. Even and Odd Counter");

let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }

}

console.log(`Even Numbers: ${evenCount}`);
console.log(`Odd Numbers: ${oddCount}`);

console.groupEnd();


// =========================================
// 10. Divisible by 3 OR 5
// =========================================

console.group("10. Divisible by 3 OR 5");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }

}

console.groupEnd();


// =========================================
// LEVEL 2 - USER INPUT + LOOPS
// =========================================


// =========================================
// 11. Factorial Calculator
// =========================================

console.group("11. Factorial Calculator");

let number11 = Number(prompt("Enter a number:"));
let factorial11 = 1;

for (let i = 1; i <= number11; i++) {

    factorial11 *= i;

}

console.log(`${number11}! = ${factorial11}`);

console.groupEnd();


// =========================================
// 12. Sum from 1 to N
// =========================================

console.group("12. Sum from 1 to N");

let number12 = Number(prompt("Enter a number:"));
let sum12 = 0;

for (let i = 1; i <= number12; i++) {

    sum12 += i;

}

console.log(`Sum: ${sum12}`);

console.groupEnd();


// =========================================
// 13. Multiplication Table
// =========================================

console.group("13. Multiplication Table");

let number13 = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {

    console.log(`${number13} × ${i} = ${number13 * i}`);

}

console.groupEnd();


// =========================================
// 14. Count Even Numbers
// =========================================

console.group("14. Count Even Numbers");

let number14 = Number(prompt("Enter a positive number:"));
let evenCount14 = 0;

for (let i = 1; i <= number14; i++) {

    if (i % 2 === 0) {
        evenCount14++;
    }

}

console.log(`Even Numbers: ${evenCount14}`);

console.groupEnd();


// =========================================
// 15. Sum of Digits
// =========================================

console.group("15. Sum of Digits");

let number15 = Number(prompt("Enter a number:"));
let temp15 = number15;
let sumDigits15 = 0;

while (temp15 > 0) {

    let digit15 = temp15 % 10;

    sumDigits15 += digit15;

    temp15 = Math.floor(temp15 / 10);

}

console.log(`Sum of digits: ${sumDigits15}`);

console.groupEnd();


// =========================================
// 16. Count Digits
// =========================================

console.group("16. Count Digits");

let number16 = Number(prompt("Enter a number:"));
let temp16 = number16;
let digitCount16 = 0;

if (temp16 === 0) {

    digitCount16 = 1;

} else {

    while (temp16 > 0) {

        temp16 = Math.floor(temp16 / 10);

        digitCount16++;

    }

}

console.log(`Number of digits: ${digitCount16}`);

console.groupEnd();


// =========================================
// 17. Reverse a Number
// =========================================

console.group("17. Reverse a Number");

let number17 = Number(prompt("Enter a number:"));
let temp17 = number17;
let reversed17 = 0;

while (temp17 > 0) {

    let digit17 = temp17 % 10;

    reversed17 = reversed17 * 10 + digit17;

    temp17 = Math.floor(temp17 / 10);

}

console.log(`Original: ${number17}`);
console.log(`Reversed: ${reversed17}`);

console.groupEnd();


// =========================================
// 18. Find Largest Digit
// =========================================

console.group("18. Find Largest Digit");

let number18 = Number(prompt("Enter a number:"));
let temp18 = number18;
let largestDigit18 = 0;

while (temp18 > 0) {

    let digit18 = temp18 % 10;

    if (digit18 > largestDigit18) {
        largestDigit18 = digit18;
    }

    temp18 = Math.floor(temp18 / 10);

}

console.log(`Largest Digit: ${largestDigit18}`);

console.groupEnd();


// =========================================
// 19. Find Smallest Digit
// =========================================

console.group("19. Find Smallest Digit");

let number19 = Number(prompt("Enter a number:"));
let temp19 = number19;
let smallestDigit19 = 9;

while (temp19 > 0) {

    let digit19 = temp19 % 10;

    if (digit19 < smallestDigit19) {
        smallestDigit19 = digit19;
    }

    temp19 = Math.floor(temp19 / 10);

}

console.log(`Smallest Digit: ${smallestDigit19}`);

console.groupEnd();


// =========================================
// 20. Count Even and Odd Digits
// =========================================

console.group("20. Count Even and Odd Digits");

let number20 = Number(prompt("Enter a number:"));
let temp20 = number20;

let evenDigits20 = 0;
let oddDigits20 = 0;

if (temp20 === 0) {

    evenDigits20 = 1;

} else {

    while (temp20 > 0) {

        let digit20 = temp20 % 10;

        if (digit20 % 2 === 0) {
            evenDigits20++;
        } else {
            oddDigits20++;
        }

        temp20 = Math.floor(temp20 / 10);

    }

}

console.log(`Even Digits: ${evenDigits20}`);
console.log(`Odd Digits: ${oddDigits20}`);

console.groupEnd();


// =========================================
// LEVEL 3 - MORE PROBLEM SOLVING
// =========================================


// =========================================
// 21. Prime Number Checker
// =========================================

console.group("21. Prime Number Checker");

let number21 = Number(prompt("Enter a number:"));
let isPrime21 = true;

if (number21 <= 1) {

    isPrime21 = false;

} else {

    for (let i = 2; i < number21; i++) {

        if (number21 % i === 0) {

            isPrime21 = false;
            break;

        }

    }

}

if (isPrime21) {
    console.log(`${number21} is a Prime Number`);
} else {
    console.log(`${number21} is NOT a Prime Number`);
}

console.groupEnd();


// =========================================
// 22. Print Prime Numbers 1 to 100
// =========================================

console.group("22. Prime Numbers 1 to 100");

for (let number = 2; number <= 100; number++) {

    let isPrime = true;

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {

            isPrime = false;
            break;

        }

    }

    if (isPrime) {
        console.log(number);
    }

}

console.groupEnd();


// =========================================
// 23. Find Factors
// =========================================

console.group("23. Find Factors");

let number23 = Number(prompt("Enter a number:"));

console.log(`Factors of ${number23}:`);

for (let i = 1; i <= number23; i++) {

    if (number23 % i === 0) {
        console.log(i);
    }

}

console.groupEnd();


// =========================================
// 24. Count Factors
// =========================================

console.group("24. Count Factors");

let number24 = Number(prompt("Enter a number:"));
let factorCount24 = 0;

for (let i = 1; i <= number24; i++) {

    if (number24 % i === 0) {
        factorCount24++;
    }

}

console.log(`Number of factors: ${factorCount24}`);

console.groupEnd();


// =========================================
// 25. Perfect Number
// =========================================

console.group("25. Perfect Number");

let number25 = Number(prompt("Enter a number:"));
let sumFactors25 = 0;

for (let i = 1; i < number25; i++) {

    if (number25 % i === 0) {
        sumFactors25 += i;
    }

}

if (sumFactors25 === number25) {
    console.log(`${number25} is a Perfect Number`);
} else {
    console.log(`${number25} is NOT a Perfect Number`);
}

console.groupEnd();


// =========================================
// LEVEL 4 - NESTED LOOPS & PATTERNS
// =========================================


// =========================================
// 26. Right Triangle
// =========================================

console.group("26. Right Triangle");

for (let row = 1; row <= 5; row++) {

    let stars = "";

    for (let column = 1; column <= row; column++) {

        stars += "*";

    }

    console.log(stars);

}

console.groupEnd();


// =========================================
// 27. Reverse Triangle
// =========================================

console.group("27. Reverse Triangle");

for (let row = 5; row >= 1; row--) {

    let stars = "";

    for (let column = 1; column <= row; column++) {

        stars += "*";

    }

    console.log(stars);

}

console.groupEnd();


// =========================================
// 28. Number Pattern
// =========================================

console.group("28. Number Pattern");

for (let row = 1; row <= 5; row++) {

    let numbers = "";

    for (let column = 1; column <= row; column++) {

        numbers += column;

    }

    console.log(numbers);

}

console.groupEnd();


// =========================================
// 29. Square Pattern
// =========================================

console.group("29. Square Pattern");

for (let row = 1; row <= 5; row++) {

    let stars = "";

    for (let column = 1; column <= 5; column++) {

        stars += "*";

    }

    console.log(stars);

}

console.groupEnd();


// =========================================
// 30. Multiplication Tables 1 to 5
// =========================================

console.group("30. Multiplication Tables 1 to 5");

for (let table = 1; table <= 5; table++) {

    console.log(`Table of ${table}`);

    for (let i = 1; i <= 10; i++) {

        console.log(`${table} × ${i} = ${table * i}`);

    }

    console.log("--------------------");

}

console.groupEnd();


// =========================================
// DAY 10 COMPLETE
// =========================================

console.log("Day 10 - Loop Problem Solving Completed!");