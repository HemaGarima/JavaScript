document.write("Hello");

const sum = (a, b) => {
    console.log("Yes I am running." + (a+b));
    return a + b;
}

setTimeout(sum, 1000, 1, 2);
// let a = setTimeout(function(){
//     alert("I am inside of settimeout.")
// },5000);
// let b = prompt("Do you want to run the settimeout?");
// if(b == "n"){
//     clearTimeout(a);
// }
// clearTimeout(a);
// console.log(a);

setInterval(function(){
    alert("setInterval");
},3000)