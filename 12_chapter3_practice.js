const prompt = require("prompt-sync")();

// PROBLEM 1:
let marks = {
    harry : 90,
    shubham : 9,
    lovish : 56,
    Monika : 4
}
// for(let i = 0;i<Object.keys(marks).length;i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// PROBLEM 2:
// for(let i in marks){
//     // console.log(i);
//     console.log("The marks of " + i + " are " + marks[i]);
// }

// PROBLEM 3:
// let cn = 43;
// let i ;
// i = prompt("Enter a number");   
// while(i != cn){ 
//     console.log("Try again");
//     i = prompt("Enter a number");
// }
// console.log("You have entered a correct number.")

// PROBLEM 4:
const mean = (a,b,c,d) =>{
    return (a+b+c+d)/4;
}
console.log("Mean of 4,5,6,7" , " is " , mean(4,5,6,7) );