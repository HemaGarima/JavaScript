// Synchronous Programming
let a = prompt("What is your age?");
let b = prompt("What is your age?");
let c = prompt("What is your favourite color?");
console.log(a + "is" + b + "years old and has" + c + "favourite color.");

// Asynchronous Programming
console.log("Start");
setTimeout(function(){
    console.log("Hey I am good.");
}, 3000);
console.log("End");

// Callbacks
function loadScript(src , callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC: " + src)
        callback(null , src);
    }
    script.onerror = function(){
        console.log("Error loading script with SRC: " + src);
        callback(new Error("Src got some error"));
    }
    document.body.appendChild(script);
} 

function hello(error , src){
    if(error){
        console.log(error);
        return;
    }
    alert('Hello World!' + src);
}

function goodmorning(error , src){
    if(error){
        console.log(error);
        return;
    }
    alert('goodmorning!' + src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" , hello)