// 7 primitives data types 
// nn bb ss u;
// n -> numbers
// n -> null
// b -> Boolean
// b -> BigInt
// s -> Symbol
// s -> String
// u -> undefined

let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a nice Symbol.");
// let g = undefined;
let g;
console.log(a , b , c, d, e, f , g);
console.log(typeof d);
  
// Non primitive data type - Objects in JS
const item = {
    "Harry" : true,
    "Shubh" : false,
    "Lovish" : 67,
    "Rohan" : undefined
}
console.log(item["Shubh"]);

let hema = {
    "name" : "hemlata",
    "Phone No." : 4589430852,
    "marks" : 78
}
console.log(hema["marks"]);