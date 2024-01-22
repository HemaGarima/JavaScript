const prompt = require("prompt-sync")();

let corr_num = Math.floor(Math.random() * 100);
// console.log(corr_num);

let num = prompt("Enter a number.");
let no_of_guesses = 0;
if(num == corr_num){
    console.log("You enter a correct number.");
}
no_of_guesses++;

while(num != corr_num){
    if(num > corr_num){
        console.log("Correct number is smaller than this number.");
    }
    else if(num < corr_num){
        console.log("Correct number is greater than this number.");
    }
    num = prompt("Enter a number.");
    no_of_guesses++;
    if(num == corr_num){
        console.log("You enter a correct number.");
    }
}
let score = 100 - no_of_guesses;
console.log("Your Score is " , score);
