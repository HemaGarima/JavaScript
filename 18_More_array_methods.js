// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// let num_even_more = [2344, 5666];
// console.log(num.length);
// delete num[0];
// console.log(num , num.length);

// let newArray = num.concat(num_more , num_even_more);
// console.log(newArray);
// console.log(num);
// console.log(num_more);

// sort method

// let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// let compare = (a,b)=>{
//     return a-b;
// }
// num1.sort(compare); // modifies the original array
// console.log(num1);

// num1.reverse(); // reverses the array
// console.log(num1);

// Splice and Slice
// let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// let m = num2.splice(2, 3, 1021, 1022, 1023); // modifies the same num2 array and returns deleted items in the form of array
// console.log(num2 , m , typeof m);

let num3 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
let k = num3.slice(4 , 7); // it creates a new array
console.log(k);