const prompt = require("prompt-sync")();

// let arr = [45 , 23 , 21];
// let a = arr.map((value , index , array)=>{
//     console.log(value , index , array);
    // return value+index; // it returns undefines values in a if return is not present
// })
// map is used to made a new array

// console.log(a);
// console.log(arr);

// let arr2 = [45 , 23 , 21 , 0 , 3 , 5];
// let a2 = arr2.filter((a)=>{
//     return a<10;
// })
// console.log(a2);
// console.log(arr2);

// REDUCE METHOD
// let arr3 = [1 , 2 , 3 ,  5 , 2 ,1 ];
// let newarr3 = arr3.reduce((h1 , h2)=>{
//     return h1+h2;
// })
const reduce_func = (h1 , h2) => {
    return h1+h2;
}
let newarr3 = arr3.reduce(reduce_func);
console.log(newarr3);

// ADVANTAGES OF USING SEPARATE SCRIPT FILE USING SRC ATTRIBUTE OF SCRIPT TAG 
// 1. Separation of concerns
// 2. Browser Caching