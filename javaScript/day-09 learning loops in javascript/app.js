// =========================================
// DAY 9 - LOOPS
// Practice File
// =========================================


// =========================================
// 1. FOR LOOP
// Print numbers 1 to 10
// =========================================

console.group("1. Print 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.groupEnd();


// =========================================
// 2. FOR LOOP
// Print numbers 10 to 1
// =========================================

console.group("2. Print 10 to 1");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.groupEnd();


// =========================================
// 3. FOR LOOP
// Print even numbers 1 to 20
// =========================================

console.group("3. Even Numbers 1 to 20");

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}

console.groupEnd();


// =========================================
// 4. FOR LOOP
// Print odd numbers 1 to 20
// =========================================

console.group("4. Odd Numbers 1 to 20");

for (let i = 1; i <= 20; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }

}

console.groupEnd();


// =========================================
// 5. FOR LOOP
// Multiples of 5
// =========================================

console.group("5. Multiples of 5");

for (let i = 5; i <= 50; i += 5) {
    console.log(i);
}

console.groupEnd();


// =========================================
// 6. MULTIPLICATION TABLE
// =========================================

console.group("6. Multiplication Table");

let tableNumber = Number(prompt("Enter a number for multiplication table:"));

for (let i = 1; i <= 10; i++) {

    console.log(`${tableNumber} × ${i} = ${tableNumber * i}`);

}

console.groupEnd();


// =========================================
// 7. SUM OF NUMBERS 1 TO 10
// =========================================

console.group("7. Sum of 1 to 10");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(`Sum: ${sum}`);

console.groupEnd();


// =========================================
// 8. SUM OF EVEN NUMBERS 1 TO 100
// =========================================

console.group("8. Sum of Even Numbers");

let evenSum = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {
        evenSum = evenSum + i;
    }

}

console.log(`Sum of even numbers: ${evenSum}`);

console.groupEnd();


// =========================================
// 9. WHILE LOOP
// Print 1 to 10
// =========================================

console.group("9. While Loop - 1 to 10");

let whileNumber = 1;

while (whileNumber <= 10) {

    console.log(whileNumber);

    whileNumber++;
}

console.groupEnd();


// =========================================
// 10. WHILE LOOP
// Print 10 to 1
// =========================================

console.group("10. While Loop - 10 to 1");

let countdown = 10;

while (countdown >= 1) {

    console.log(countdown);

    countdown--;
}

console.groupEnd();


// =========================================
// 11. WHILE LOOP
// Print even numbers
// =========================================

console.group("11. While Loop - Even Numbers");

let evenNumber = 2;

while (evenNumber <= 20) {

    console.log(evenNumber);

    evenNumber += 2;
}

console.groupEnd();


// =========================================
// 12. DO...WHILE LOOP
// Print 1 to 5
// =========================================

console.group("12. Do While Loop");

let doNumber = 1;

do {

    console.log(doNumber);

    doNumber++;

} while (doNumber <= 5);

console.groupEnd();


// =========================================
// 13. COUNTDOWN USING WHILE
// =========================================

console.group("13. Countdown");

let countdownNumber = 5;

while (countdownNumber >= 1) {

    console.log(countdownNumber);

    countdownNumber--;
}

console.log("Go!");

console.groupEnd();


// =========================================
// 14. BREAK
// Stop loop at 6
// =========================================

console.group("14. Break - Stop at 6");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}

console.groupEnd();


// =========================================
// 15. BREAK
// Stop at 50
// =========================================

console.group("15. Break - Stop at 50");

for (let i = 1; i <= 100; i++) {

    if (i === 50) {
        break;
    }

    console.log(i);
}

console.groupEnd();


// =========================================
// 16. BREAK
// Stop when number is found
// =========================================

console.group("16. Break - Find Number");

let targetNumber = 7;

for (let i = 1; i <= 20; i++) {

    console.log(`Checking: ${i}`);

    if (i === targetNumber) {
        console.log(`Found ${targetNumber}`);
        break;
    }
}

console.groupEnd();


// =========================================
// 17. CONTINUE
// Skip number 5
// =========================================

console.group("17. Continue - Skip 5");

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}

console.groupEnd();


// =========================================
// 18. CONTINUE
// Skip even numbers
// =========================================

console.group("18. Continue - Skip Even Numbers");

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

console.groupEnd();


// =========================================
// 19. CONTINUE
// Skip multiples of 3
// =========================================

console.group("19. Continue - Skip Multiples of 3");

for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}

console.groupEnd();


// =========================================
// 20. NESTED LOOP
// 5 x 5 Number Grid
// =========================================

console.group("20. 5 x 5 Number Grid");

for (let row = 1; row <= 5; row++) {

    for (let column = 1; column <= 5; column++) {

        console.log(`Row: ${row}, Column: ${column}`);

    }

}

console.groupEnd();


// =========================================
// 21. NESTED LOOP
// Multiplication Tables 1 to 5
// =========================================

console.group("21. Multiplication Tables 1 to 5");

for (let table = 1; table <= 5; table++) {

    console.log(`Table of ${table}`);

    for (let i = 1; i <= 10; i++) {

        console.log(`${table} × ${i} = ${table * i}`);

    }

}

console.groupEnd();


// =========================================
// 22. NESTED LOOP
// Star Pattern
// =========================================

console.group("22. Star Pattern");

for (let row = 1; row <= 5; row++) {

    let stars = "";

    for (let column = 1; column <= row; column++) {

        stars = stars + "*";

    }

    console.log(stars);
}

console.groupEnd();


// =========================================
// 23. NESTED LOOP
// Number Pattern
// =========================================

console.group("23. Number Pattern");

for (let row = 1; row <= 5; row++) {

    let numbers = "";

    for (let column = 1; column <= row; column++) {

        numbers = numbers + column;

    }

    console.log(numbers);
}

console.groupEnd();


// =========================================
// 24. LOOP + CONDITIONAL
// Numbers divisible by 3
// =========================================

console.group("24. Numbers Divisible by 3");

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0) {
        console.log(i);
    }

}

console.groupEnd();


// =========================================
// 25. LOOP + CONDITIONAL
// Positive-style Number Classification
// =========================================

console.group("25. Number Classification");

for (let i = -5; i <= 5; i++) {

    if (i > 0) {
        console.log(`${i} is Positive`);
    } else if (i < 0) {
        console.log(`${i} is Negative`);
    } else {
        console.log(`${i} is Zero`);
    }

}

console.groupEnd();


// =========================================
// DAY 9 COMPLETE
// =========================================

console.log("Day 9 Loop Practice Completed!");