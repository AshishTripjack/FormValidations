// const PromiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();

//     },1000)
// });

// PromiseOne.then(function(){
//     console.log("Asysc task resolved");

// })

// or we can also make promise without storing in a variable

// new Promise(function(resolve,reject){
//    if (false) {
//     setTimeout(()=>{
//         console.log("Hello promise task");
//         resolve();

//     });

//    } else {
//     reject();

//    }
// }).then(function(){
//     console.log("promise task resolved");

// }).catch(function(){
//     console.log("promise task rejected");

// })

// we can pass an arugument to then method by passing parameter in resolve

// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({userName:"Ashish", email:"ashish@gmail.com"});
//     });
// });

// promiseThree.then((userDetails)=>{
//     console.log(userDetails);

// });

// Promise Chaining

// const PromiseFour = new Promise((resolve, reject) => {
//   let error = false;
//   if (!error) {
//     resolve({ userName: "Ashish", email: "ashish@gmail.com" });
//   } else {
//     reject("ERROR: Something went Wrong");
//   }
// });

// const pro = PromiseFour.then((userDetails) => {
//   console.log(userDetails);
//   return userDetails.userName;
// })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(()=>console.log("Finally the promise is either resolved or rejected"))

// console.log(pro); // return a promise

// We can also handle the promise by async await

// const PromiseFive = new Promise((resolve, reject) => {
//   let error = false;
//   if (!error) {
//     resolve({ userName: "Ashish", email: "ashish@gmail.com" });
//   } else {
//     reject("ERROR: Something went Wrong");
//   }
// });

// async function handlePromise() {
//   try {
//     const response = await PromiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// handlePromise();

//Fetch an api through asysnc await

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };

// getAllUsers();


// fetch an api using then catch

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
     return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>{
    console.log(error);
    
});



