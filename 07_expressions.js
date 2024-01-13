// let a = prompt("Hey whats your age?"); // puts question and asking for answer
// alert("Gir Ja"); // It use to only show the statements
// console.log(typeof a); 

// let b = "56";
// b = Number.parseInt(b); // Converting the string to a number
// console.log(typeof b);
// if(b > 0){
//     alert("This is a valid age.");
// }

let a = -3;
if(a<0){
    console.log("Invalid age.");
}
else if(a<9){
    console.log("You are a kid and you cannot even think to drive.");
}
else if(a<18 && a>=9){
    console.log("You are a kid and you can think of drive after eighteen.");
}
else{
    console.log("You can think of drive.");
}
console.log("done");

// HOME WORK - Explore switch statement and write a basic program

// TERNARY OPERATOR
let age = 20;
console.log("You can", (age<18?"not drive" : "drive"));
console.log("hema");

// switch statements:

switch(age){
    case 20:
        console.log("You are Eighteen. ");
        break;
    case 45:
        console.log("You are fourty five.");
}