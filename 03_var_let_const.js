console.log("Javascritp tutorial 3 : var , let and const");
var a = 45;
var a = 'p';
let b = "Harry";
var c = null;
var d = undefined;
const author = "Hema";
// let author = 5;can't be redeclared as author is const and , throws an error
// const harry; // declared it first and then after it runs
// scope of let is within block
// var can be redeclared
// let can be updated but can't be redeclared
{
    let b = 'this';
    console.log(b);
}
console.log(b);