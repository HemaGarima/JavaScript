const prompt = require("prompt-sync")();

let name = "Harry";
// console.log(name);
console.log(name[0]);
console.log(name.length);
let friend = 'Prakash';
console.log(friend);
// let myfriend = "Shubh'; // Don't do this.

// TEMPLATE LITERALS
let boy1 = "Promod";
let boy2 = "Nikhil";
// Nikhil is a friend of Promod
let sentence = `${boy1} is a friend of ${boy2}\n`;
console.log(sentence);
let sentence1 = `Hye , this is 'hemlata' "sharma"`;
console.log(sentence1);

// ESCAPE SEQUENCE CHARACTERS
let fruit = 'Ban\'ana';
console.log(fruit);
console.log(fruit.length);