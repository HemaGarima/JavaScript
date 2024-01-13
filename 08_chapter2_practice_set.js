// CHAPTER 2 PRACTICE SET

const prompt = require("prompt-sync")(); // files included to use prompt function 
// alert("Hello World");

// PROBLEM 1:
/*
let age = prompt("Whats your age?");
console.log("age is " , age);
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20.");
}
else{
    console.log("Your age doesn't lies between 10 and 20.");
}
*/


// PROBLEM 2:
/*
let age = prompt("What is your age ?");
switch(age){
    case '12':
        console.log("Your age is 12");
        break;
    case '13':
        console.log("Your age is 13");
        break;
    case '14':
        console.log("Your age is 14");
        break;
    case '15':
        console.log("Your age is 15");
        break;
    default:
        console.log("Your age is not special.");
}
*/

// PROBLEM 3:
/*
let num = prompt("Enter a number.");
num = Number.parseInt(num);
if(num%2 == 0 && num%3 == 0){
    console.log("Number is divisible by 2 and 3.");
}
else{
    console.log("Number is not divisible by 2 and 3.");
}
*/

// PROBLEM 4:
/*
let num = prompt("Enter a number.");
num = Number.parseInt(num);
if(num%2 == 0 || num%3 == 0){
    console.log("Number is divisible by 2 or 3.");
}
else{
    console.log("Number is not divisible by 2 or 3.");
}
*/

// PROBLEM 5:
let age = prompt("Enter your age.");
console.log(age>=18 ? "You can drive." : "You can not drive.");