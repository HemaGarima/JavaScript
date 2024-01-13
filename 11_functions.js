const prompt = require("prompt-sync")();
const hello = ()=>{
    console.log("Hey , how are you , I am fine.");
}
const hell = ()=>{
    console.log("Hey , how are you , I am fine.");
    return "fine";
}
let a = 1;
let b = 2;
let c = 3;
function OnePlusAvg(x,y){
    return 1+(x+y)/2;
}
// Mostly used in current scenario.
const sum = (p,q)=>{
    return p+q;
}
hello();
let v = hell();
console.log(v);
console.log("One plus Average of a and b is ", OnePlusAvg(a,b));
console.log("One plus Average of c and b is ", OnePlusAvg(c,b));
console.log("One plus Average of a and c is ", OnePlusAvg(a,c));
console.log(sum(9,7));