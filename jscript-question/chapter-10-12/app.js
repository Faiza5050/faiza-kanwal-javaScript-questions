// Chapter # 10: Function:
// // Question # 1:

// function twoNumber(number1 , number2) {
//     return number1 + number2;
// };
// console.log(`The Sum Of Two Number is: ${twoNumber(5,2)}`);


// // Question # 2:

// function temperature(c) {
//     return c * (9 / 5) + 32;
// }
// let celsius = prompt("Enter number to convert Celsius into Fahrenheit:");
// let fahrenheit = temperature(celsius)
// console.log(`${celsius}°C is equal to ${fahrenheit}°F.`);


// // Question # 3:

// let user = prompt("Please enter a number to check Prime Number:");
// function prime(number) {
//     if (number === 1) {
//         console.log(`${number} is neither Prime nor Composite.`);
//     }
//     else if (number > 1) {
//     for (let i = 2; i <= number/2; i++) {
//         if (number % 1 == 0);
//         number = false;
//     }
// }
// if (isPrime) {
//     console.log(`Number ${number} is a Prime Number.`);
// } else {
//     console.log(`Number ${number} is not a Prime Number.`);
// }
// }


// // Question # 4:

// function reverse(str) {
//     return str.split('').reverse('').join('');
// }
// let originalStr = prompt("Write a Word or Sentence:");
// let reverseStr = reverse(originalStr);
// console.log(reverseStr);


// // Question # 5:

// function factorial(number) {
//     if (number < 0) return undefined;
//     let result = 1;
//     for (let i = 2; i <= number; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));


// // Question # 6:

// function greeting() {
//     console.log("Hello, welcome!");
// }
// greeting();


// // Question # 7:

// function greetName(name) {
//     console.log(`Hello, ${name}!`);
// }
// greetName("Faiza");


// // Question # 8:

// function sum(number1 , number2) {
//     return number1 + number2;
// }
// console.log(sum(3,6));


// // Question # 9:

// function randomNumber() {
//     return Math.floor(Math.random() * 101);
// }
// console.log(randomNumber());


// // Question # 10:

// let age = prompt("Enter Your age:")
// function vote(age) {
//     return age >= 18;
// }
// console.log(vote(age));


// Chapter # 11: Arrow Function:
// // Question # 1:

// let user = prompt("Enter a number:");
// let square = (number) => number * number;
// let result = square(user);
// if (!isNaN == user) {
//     console.log("Please enter a valid number.");
// } else {
//     console.log(`The Square of ${user} is ${result}.`);
// }


// //  Question # 2:

// let evenNum = (arr) => {
//     return arr.filter(number => number % 2 === 0);
// };
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const number = evenNum(numbers);
// console.log(number);


// // Question # 3:

// let twoString = (str1, str2) => str1 + str2;
// let result = twoString("Hello, " , "World!");
// console.log(result);


// // Question # 4:

// let maxNum = (arr) => Math.max(...arr);
// let arrNumbers = [2, 3, 25, 20, 15, 17];
// let max = maxNum(arrNumbers);
// console.log(`Maximum Number is ${max}.`);


// // Question # 5:

// let sums = (arr) => {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }
// const numbers = [3, 2, 4, 7, 8];
// let total = sums(numbers);
// console.log(total);


// // Question # 6:

// let print = () => {
//     console.log("Hello World");
// };
// print();


// // Question # 7:

// let square = (number) => number * number;
// console.log(square(3));


// // Question # 8:

// let number = (num) => num > 0;

// console.log(`Given Number is Positive, ${number(4)}.`);
// console.log(`Given Number is Negative, ${number(-4)}.`);
// console.log(`Given Number is Zero, ${number(0)}.`);


// // Question # 9:

// let randomNumber = () => Math.floor(Math.random() * 50);
// console.log(randomNumber());


// // Question # 10:

// let minute = (minutes) => minutes * 60;

// let second = minute(2);
// console.log(second);


// Chapter # 12: Annoynumus Function:
// // Question # 1:

// (function() {
//     console.log("Hello");
// })();


// // Question # 2:

// let sum = function(a, b) {
//     return a + b;
// };
// console.log(sum(4, 9));


// // Question # 3:

// const numbers = [2, 3, 6, 6, 9, 8, 5];
// numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(numbers);


// // Question # 4:

// (function(name) {
//     console.log(`Hello, ${name}!`);
// })("Faiza");


// // Question # 5:

// let userInput = prompt("Enter a Number:");
// let check = function(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is an Even Number.`);
//     } else {
//         console.log(`${number} is an Odd Number.`);
//     }
// };
// check(userInput);


// // Question # 6:

// let odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let oddNum = odd.filter(function(num) {
//     return num % 2 !== 0;
// });
// console.log(oddNum);


// // Question # 7:

// let user = prompt("Enter a number");
// let factorial = function(number) {
//     if (number < 0) return undefined;
//     let result = 1;
//     for (let i = 2; i <= number; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(user));


// Question # 8:
// Set Time Out


// // Question # 9:

// let sumArray = [2, 5, 1, 6];
// let sum = sumArray.reduce(function(num1, num2) {
//     return num1 + num2;
// });
// console.log(sum);


// // Question # 10:

// let userInput = prompt("Enter your age:");
// (function(age) {
//     if (age >= 18) {
//         console.log(`Your Age is ${age}: You are Eligible to Vote.`);
//     } else {
//         console.log(`Your Age is ${age}: You are not Eligible to Vote.`);
//     }
// })(userInput);
