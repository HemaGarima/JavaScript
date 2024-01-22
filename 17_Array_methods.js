// Array Methods

let num = [1, 2, 3, 34, 4];
let b = num.toString(); // b is now a string
console.log(b ,typeof b);

let c = num.join("_");
console.log(c , typeof c);

let n = num.pop();
console.log(n); // changes made in same array and returns the popped element

console.log(num);

let m = num.push(56);
console.log(m); // it returns the new array length and modifies the same num array

console.log(num);

let k = num.shift(); // it returns the popped element from the first and modifies the same array num
console.log(k);
console.log(num);

let l = num.unshift(9); // it returns the new array length and add the element in the same array at the first position
console.log(l);
console.log(num);