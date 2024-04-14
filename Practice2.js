const person = {
    firstName : "John",
    lastName : "Doe",
    id : 5566,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName);

// COMMON HTML ELEMENTS

// onchange : An HTML element has been changed
// onclick : The user clicks an HTML element
// onmouseover : The user moves the mouse over an HTML element
// onmouseout : The user moves the mouse away from an HTML element
// onkeydown : The user pushes a keyboard key
// onload : The browser has finished loading the page

// JSON

// {
//     "employees":[
//         {"firstName" : "John" , "lastName" : "Doe"},
//         {"firstName" : "Anna" , "lastName" : "Smith"},
//         {"firstName" : "Peter" , "lastName" : "Jones"},
//     ]
// }

// JAVASCRIPT CALLBACKS

// A callback is a function passed as an argument to another function . This technique allows a function to call another function . A callback function can run after another function has finished.

// function myFirst(){
//     myDisplayer("Hello");
// }
// function mySecond(){
//     myDisplayer("Goodbye");
// }
// myFirst();
// mySecond();