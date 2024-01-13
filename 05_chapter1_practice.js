// Question 1 
let a = "Hema";
let b = 6;
console.log(a + b);

// Question 2
console.log(typeof(a+b));

// Question 3
const c = {
    name: "Harry",
    section: 1,
    isPrinciple: false
}
// c = 9;
// NO , I can not change a javascript object to a number.

// Question 4
c['friend'] = 'Shubham';
c['name'] = 'Lovish';
console.log(c);
// YES , I can add a new key to the object.
// c = {} // wrong

// Question 5
const dict = {
    appreciate : "recognize the full worth of",
    ataraxia : "a state of freedom from emotional disturbance and anxiety",
    yakka : "work , especially hardwork"
}
console.log(dict.yakka);
console.log(dict["yakka"]);