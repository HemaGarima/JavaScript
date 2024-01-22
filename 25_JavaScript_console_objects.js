const prompt = require("prompt-sync")();
// console.log(console); list all the methods of console.
// console.log("Hi Harry");
// 4
// console.error("Hey this is an error.");
// console.assert(555>53); // if assertion false it displays assertion failed otherwise nothing to worry
// console.assert;
// console.clear();
// obj = {a : 1 , b : 2, c: 3};
// console.table(obj);
// console.warn("Hey please don't drink soda.");
// console.info("Hey this is an important info");
// console.error("err");
// console.assert("err" != false);
// console.assert("err" == false);
// console.time("a");
// console.timeEnd("a");
// console.time("p1");
// console.timeEnd("p1");
console.time("forLoop");
for(let i = 0;i<50;i++){
    console.log(233);
}
console.timeEnd("forLoop");
console.time("whileLoop");
let i = 0;
while(i<50){
    console.log(233);i++;
}
console.timeEnd("whileLoop");