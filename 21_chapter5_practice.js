const prompt = require("prompt-sync")();

// Problem 1

let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a = prompt("Enter a number.");
a = Number.parseInt(a);
// let n = arr.push(a);
// console.log(arr , n);

// Problem 2
// while(a != 0){
//     arr.push(a);
//     a = prompt("Enter a number.");
//     a = Number.parseInt(a);
// }
// arr.push(a);
// console.log(arr);

// Problem 3
let arr1 = [1, 2, 30, 4, 50, 6, 7, 83 , 670];
// let new_arr = arr1.filter((x)=>{
//     return x%10 == 0;
// })
// console.log(new_arr);

// Problem 4
// let n = arr.map((x )=>{
//     return (x*x );
// })
// console.log(n);

// Problem 5
let arr2 = [1,2,3,4,5,6,7,8,9];
let an = arr2.reduce((x1,x2) =>{
    return x1*x2;
})
console.log(an);