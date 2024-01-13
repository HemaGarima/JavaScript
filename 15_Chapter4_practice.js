const prompt = require("prompt-sync")();
 
// PROBLEM 1:
// let str = "har\"";
// console.log(str.length);

// PROBLEM 2:
// const sentence = 'fox The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(sentence.includes(word));
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// console.log(sentence.startsWith(word));

// PROBLEM 3:
// let hye = "HEMA";
// console.log(hye.toLowerCase(hye));

// PROBLEM 4:
// let str2 = "Please give Rs 1000";
// let amount = str2.slice("Please give Rs ".length);
// console.log(amount);
// console.log(typeof amount);
// let a = Number.parseInt(amount);
// console.log(typeof a);

// PROBLEM 5:
let friend = "Deepika";
friend[3] = "R"; // Do not gives array but this is not possible because string is inmutable.
console.log(friend);