

// const firstPromise= new Promise(function(resolve, reject){
   
//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve();
//     },2000)
// })


// firstPromise.then(function(){
//     console.log("Promise completed")
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 promise completed")
// })



// const promiseThree=new Promise(function(resolve, reject){

//     setTimeout(function(){

//         resolve({username:'vishal', gmail:'prabhuvishal2018@gmail.com'});
         
//     },1000)
// })

// promiseThree.then(function(userData){
//    console.log(userData);
// })







// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//            if (!error){
//             resolve({username:'vishal', gmail:'prabhuvishal2018@gmail.com'})
//            }
//             else{
//                 reject('Error! something wrong has occured')
            
//            }

//     },1000)

// })

// promiseFour
// .then(function(user){
//     // console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Finally the result is either resolved or rejected");
// })




// const promiseFive=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=false;

//         if(!error){
//             resolve({username:'vishal', gmail:'prabhuvishal2018@gmail.com'});
//         }
//         else{
//             reject('Error! Something went wrong.');
//         }
//     },1000);

// })

// async function consumePromiseFive(){

//     try{
//         const result=await promiseFive;
//       console.log(result);
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// consumePromiseFive();



// const fetch = require('node-fetch');

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     return response.json();
// })
// .then((data)=>{
//    console.log(data)
// })
// .catch(function(error){
//     console.log(error);
//  })

// async function promiseFetch(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }

// promiseFetch();