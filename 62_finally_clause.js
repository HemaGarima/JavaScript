// try{
//     let a = 0;
//     console.log(program); // This is an error.
//     console.log("Program ran Successfully");
// }
// catch(err){
//     console.log("This is an error.");
//     console.log(p); // This is also an error.
// }
// finally{
//     console.log("I am a good girl.");
// close the file
// Exit the loop
// Write to the log file
// }

const f = () => {
  try {
    let a = 0;
    // console.log(program); // This is an error.
    console.log("Program ran Successfully");
    return;
  } catch (err) {
    console.log("This is an error.");
    console.log(p); // This is also an error.
  } finally {
    console.log("I am a good girl."); //  it runs after return
  }
};

f();
console.log("End");