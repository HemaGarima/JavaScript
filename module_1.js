// COMMON JS MODULES

const hello = ()=>{
    console.log("Hello Harry");
}
const ahello = (name)=>{
    console.log("Hello " + name);
}

module.exports = {hello , ahello}; 
// module.exports = {hello : hello , ahello : ahello}; // Same as above line