// setTimeout(function(){
//     console.log('third');
// }, 3000)

// function sys(){
//     console.log('first');
// }
// sys();

// console.log('second')

//syn code
// let mypromise = new Promise((resolve, reject) => {

//     console.log('I am inside promise');
//     resolve(1998);
    
// })
// console.log('Pehla');

// async code resolved

// let mypromise = new Promise((resolve, reject) => {
// setTimeout(function(){
// console.log('I am inside promise');
// }, 5000);
    
//     resolve(2233);
    
// });
// console.log('Pehla');

// let mypromise = new Promise((resolve, reject) => {
// setTimeout(function(){
// console.log('I am inside promise');
// }, 2000);
    
//     resolve(2233);
//     // reject(new Error('Eoor bhai aaye hai'))
    
// });
// console.log('Pehla');

// let mypromise1 = new Promise((resolve, reject) => {
// setTimeout(function(){
// console.log('I am inside promise1');
// }, 3000);
    
//     // resolve(228679033);
//     reject(new Error('Eoor bhai aaye hai'))
    
// });

// mypromise1.then((value)=>{console.log(value)});
// console.log('Pehla');
// mypromise1.catch((error) => {console.log("Received an error")})

// let waadaa1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('set time out 1 started');
//     },2000);
//     resolve(true);
// })

// let output =  waadaa1.then(()=>{
//     let waadaa2 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('set timeout 2 started');
//         },3000);
//         resolve("waada 2 resolved");
//     })
//     return waadaa2;
// })

// output.then((value) => console.log(value));


// async function abc(){
//     return 7;
// }
// console.log(abc());

// async function utility(){
// let content = await fetch('https://jsonplaceholder.typicode.com/posts/1')
// let output = await content.json();
// console.log(output);
// }

// utility();


// api post call

// async function helper(){
// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'pankaj',
//       body: 'strong',
//       userId: 7081,
//       place: 'delhi',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   };

//   let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);

//   let response = content.json();

//   return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }
// utility();

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName();
  }
  let func1 = init();

  func1();

  