// let p1 = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds");
//         resolve(45);
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2");
//         },2000)
//     })
//     return p2;
// }).then((value)=>{
//     console.log(value);
//     console.log("We are done");
//     return 2;
// }).then((value)=>{
//     console.log(value);
//     console.log("now we are pakka done");
// })



// WRITE LOADSCRIPT FUNCTION WITH PROMISES

const loadScript = (src) =>{
    return new Promise((resolve , reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = () =>{
            resolve("Script has been loaded sir!");
        }
        script.onerror = ()=>{
            reject(0);
        }
    })
}
let p1 = loadScript("http://localhost:3000/index.js");
p1.then((value)=>{
    console.log(value);
    return loadScript("http://localhost:3000/index.js")
}).then((value)=>{
    console.log("Second script ready");
}).catch((error)=>{
    console.log("We are sorry but we are having problems on loading this script.");
})