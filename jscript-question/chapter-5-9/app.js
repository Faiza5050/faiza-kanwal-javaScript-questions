// Chapter # 5: Math expressions: Familiar Operators:
// // Question # 1:

// var sum = 25 + 30;
// alert(sum);


// // Question # 2:

// var num1 = 25;
// var num2 = 5;
// var sum = num1 + num2;
// alert(sum);


// // Question # 3:

// var modulusResult = 27 % 4;
// alert(modulusResult);


// Chapter # 6: Math expressions: Unfamiliar Operators:
// // Question # 1:

// var num = 3;
// var newNum = num++;
// alert("num: " + num);
// alert("newNum: " + newNum);


// // Question # 2:

// var counter = 10;
// counter++;
// counter++;
// alert(counter);


// // Question # 3:

// var initialPoints = 20;
// initialPoints--;
// ++initialPoints;
// alert(initialPoints);


// // Question # 4:

// var number = 0;
// ++number;
// ++number;
// ++number;
// alert(number);


// Chapter # 7: Math expressions: Eliminating ambiguity:
// // Question # 1:

// var calculation = 20 % 6;
// alert(calculation);

// // Combining with other arithmetic operations.
// var combine = (20 % 6) + 7 - 2;
// alert(combine);


// // Question # 2:

// var expressionValue =  (6 + 2) * (5 - 3);
// console.log(expressionValue);


// // Question # 3 & 4:

// 1) solve Parentheses (), i.e 
// (6 + 2) = 8 and (5 - 3) = 2.
// 2) solve exponent, i.e 8 * 2 = 16.
// 3) Final Total = 16


// Chapter # 8: Prompts:
// // Question # 1:

// var userName = prompt("What is your name?");
// alert(`Hello, ${userName}!`);


// // Question # 2:

// var age = prompt("How old are you?");
// if (age === null) {
//     alert("No age provided.");
// } else {
//     alert(`You are ${age} years old.`);
// }


// // Question # 3:

// var pets = prompt("How many pets do you have?");
// if (pets === "") {
//     alert("You didn't enter anything.");
// } else {
//     alert(`You have ${pets} pets.`);
// }


// // Question # 4:

// var userInput = prompt("Enter a number between 1 and 10:");
// var number = userInput;

// if (!isNaN(number) && number >= 1 && number <= 10) {
//     var result = number * 2;
//     alert(`The result is: ${result}`)
// } else {
//     alert("Please enter a number between 1 to 10.");
// }


// // Question # 5:

// var favNum = prompt("What is your favorite number?");
// if (favNum === "") {
//     alert("Favorite number is 7.");
// } else {
//     alert(`Your favorite number is: ${favNum}.`);
// }


// Chapter # 9: If statements:
// // Question # 1:

// var userInput = prompt("What is the capital of France?");
// if (userInput === "paris") {
//     alert("Correct!")
// } else {
//     alert("Try again!");
// }


// // Question # 2:

// var userInput = prompt("What is the capital of France?");
// if (userInput === "paris") {
//     alert("Correct!")
// } else {
//     alert("Incorrect, the correct answer is Paris.");
// }


// // Question # 3:

// var user = prompt("What is the capital of the United Kingdom?");
// if (user === "london" || user === "the united kingdom") {
//     alert("Correct!");
// } else {
//     alert("Incorrect!");
// }


// // Question # 4:

// var score = 0;
// var userAns = prompt("What is the capital of the United Kingdom?");
// if (userAns === "london" || userAns === "the united kingdom") {
//     score++;
//     alert(`Correct Answer! Your score is: ${score}`);
// } else {
//     alert(`Incorrect Answer! Your score is: ${score}`);
// }


// // Question # 5:

// var userAnswer = prompt("What is the capital of Germany?");
// var operatorAns = prompt("What is 10 + 10?");
// var correctAns = 0;

// if (userAnswer === "berlin") {
//     correctAns++;
// }
// if (operatorAns === "20") {
//     correctAns++;
// }
// if (correctAns === 2) {
//     alert("You got both right!");
// } else if (correctAns === 1) {
//     alert("You got one correct!");
// } else {
//     alert("You got both answers wrong!");
// }
