const person = {firstName : "John" , lastName : "Doe"};

// Array Object:
const cars = ["Saab" , "Volvo" , "BMW"];

// Date Object:
const date = new Date("2024-04-14");

console.log(person.firstName, cars[2] , date);
console.log(person["lastName"], cars[2] , date);

let x = 18 + " Volvo";
x = 1 + 18 + " Volvo";
x = "Volvo " + 20 + 10;
console.log(x);

let c = 89.09;
console.log(c);

// Extra large or extra small numbers can be written with exponential or scientific notation.
let a = 32489e-9;
a = 98042e10;
console.log(a);

// JavaScript numbers are also of one type that is double which is 64 bit floating point.

let i = BigInt("123456789012345678901234567890");
console.log(i);
console.log(typeof(i));

let n;
console.log(typeof(n));

function myFunction(p1,p2){
    return p1*p2;
}
console.log(myFunction(4,5));