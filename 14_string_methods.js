const prompt = require("prompt-sync")();

let name = "Harry";
console.log(name.length);
console.log(name);

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2,4));
console.log(name.slice(1));
console.log(name.replace("Har" , "Per"));

let friend = "Naman";
console.log(name.concat(" is a friend of " , friend , " OK "));

let naam = "  Hema          ";
console.log(naam);
console.log(naam.trim());

let fr = "Shivika";
console.log(fr[0]);
let f = "Raman" + "Shivika" + "Harry";
console.log(f);
// f[0] = "i" // This is not possible
// We can even use + operator to concatenate strings.
// Quick Quiz : Use a for loop to print a string.