// async function harry1(){
//     return 5;
// }
// harry1().then((x)=>{
//     console.log(x);
// })

async function harry2() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degrees");
    }, 1000);
  });
  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 degrees");
    }, 2000);
  });
  // delhiWeather.then((x)=>{
  //     console.log("Delhi Weather is " + x);
  // })
  // bangaloreWeather.then((x)=>{
  //     console.log("Bangalore Weather is " + x);
  // })
  console.log("Fetching Delhi Weather please wait .....");
  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather is " + delhiW);
  console.log("Fetching Bangalore Weather please wait .....");
  let bangaloreW = await bangaloreWeather;
  console.log("Fetched Bangalore Weather is " + bangaloreW);
  return { delhiW, bangaloreW };
}
const cherry = async() => {
//   console.log("Hey I am cherry and I am not waiting.");
  console.log("Hey I am cherry and I am waiting.");
};
// console.log("Welcome to weather control room.");
// let a = harry2();
// let b = cherry();
// a.then((value)=>{
//     console.log(value);
// })

const main1 = async () => {
  console.log("Welcome to weather control room.");
  let a = await harry2();
  let b = await cherry();
};
main1();