//***********************************Level 1*******************************************
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
const userAge = prompt("Enter your age:");
if (userAge > 17) {
  console.log("You are old enough to drive");
} else {
  let moreYear = 18 - userAge;
  console.log(`To drive must wait ${moreYear} years`);
}

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
const myAge = 22;
if (userAge > 22) console.log("You older");
else if (userAge == 22) console.log("We are the same");
else console.log("I older");

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

// using if else
// ternary operator.
let a = 4;
let b = 3;
if (a > b) console.log("a is greater than b");
else console.log("a is less than b");

a > b ? console.log("a is greater than b") : console.log("a is less than b");

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

let userNumber = prompt("Enter a number:");
userNumber % 2 === 0 ? console.log("So chan") : console.log("So le");

// ***********************Level 2*****************************************
//1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
switch (true) {
  case userNumber >= 0 && userNumber < 50:
    console.log("F");
    break;
  case userNumber >= 50 && userNumber < 60:
    console.log("D");
    break;
  case userNumber >= 60 && userNumber < 70:
    console.log("C");
    break;
  case userNumber >= 70 && userNumber < 80:
    console.log("B");
    break;
  case userNumber >= 80 && userNumber <= 100:
    console.log("A");
    break;
  default:
    console.log("Number is outside the range");
}
//2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let userText = prompt("Enter month:");
switch (userText) {
  case "September":
  case "October":
  case "November":
    console.log("The season is Autumn");
    break;
  case "December":
    break;
  default:
    console.log("Chua dinh nghia");
}
