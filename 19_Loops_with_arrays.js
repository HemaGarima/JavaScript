const prompt = require("prompt-sync")();

let num = [3, 54, 1, 2, 4];
// for(let i = 0;i<num.length;i++){
//     console.log(num[i]);
// }
// console.log("\n");

// FOREACH LOOP 
// num.forEach((Element)=>{
//     console.log(Element*Element);
// })
// console.log("");

// Array.from
// let name = "Harry is a good boy";
// let arr = Array.from(name);
// console.log(arr);

// for...of
for(let i of num){
    console.log(i);
}

// for...in
for(let i in num){
    console.log(i , num[i]);
}