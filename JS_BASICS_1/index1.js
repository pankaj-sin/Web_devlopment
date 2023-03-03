// console.log('chliye suru krte hai')
// // create a object
// let rectangle = {
//     length:1,
//     breath:2,
//     draw: function() {
//         console.log('draw');
//     }
// };

//factory fuction , this function create object and return it.
// function createRectangle(){
//     let rectangle = {
//         length:1,
//         breath:2,
//         draw: function() {
//             console.log('drawing rectangle')
//         }
//     };
//     return rectangle;
// }
//another way of implimentation
// function createRectangle(length,breadth){
//     return rectangle = {
//         length:length,
//         breadth:breadth,
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
// }

// let rectangleObj1 = createRectangle(8,9);
// console.log(rectangle.length,rectangle.breadth); 
//# Constructor function
// function Rctangle(len , bre) {
    
//             this.length = len,
//             this.breadth = bre,
//             this.draw = function () {
//                 console.log('Draw rectangle');
//             }
    
// }
// let rectangleObject = new Rctangle(8,9);
// //Dynammically add particular properties 
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);
// //Dynamically delete particular properties
// delete rectangleObject.color;
// console.log(rectangleObject);

// this is under back tick character

// let Rectangle1 = new Function( 
//         'length', 'breadth',
//     `this.length = length; 
//     this.breadth = breadth; 
//     this.draw= function() {
//         console.log('drawing');
//     }`);
    
//     //object creation using Rectangle1
//     let rect = new Rectangle1(2,3);
//     rect.length;
//     console.log(rect);

// Pass by value
// let a = 10;
// function inc(a){
//     a++;
// }
// inc(a);

// console.log(a);

// // Pass by refrence

// let aa = {value:10};
// function inc (aa){
// aa.value++
// }
// inc(aa);
// console.log(aa.value);


// let rectangle = {
//     length:2,
//     breadth:4
// };
// // for in loop
// for(let key in rectangle){
//     // keys are reflected through key variable
//     //values a reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }
// for of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }
// Check weather the particular item is present inside the object or not
// if('length' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }
   

// cloning the object by iterators



// let src = {
//     a:10,
//     b:20,
//     c:30 
// };
//let dest = {};
// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++; //This  does not effect the destination
// console.log(dest);

// cloning the object by assign fuction

// let src1 = { d:40};

// let dest = Object.assign({},src1, src);
//  console.log(dest);
//  src.a++;
//  console.log(dest);

// primitive string 
//  let lastName = 'Babbar';
//  // we can also convert primitive string into object string just by using dot .
//  lastName
// // Object String 
// let firstName = new String('Love')

// let message = 'This is \n my \' "first" \n message';
// let words = message.split(' ');
// console.log(words);
// message.replace('first', 'second');

// let message1 = 
// `This is
// my first
// message `;
// console.log(message1);
// // make the content dynamically
// let message2 = `Hello ${lastName} 
// Thanks for the Opportunity
// Regardes, Babbar`;

// console.log(message2);
// let date = new Date();
// console.log(date);
// let date1 = new Date(1998,11,20,7);
// console.log(date1);

// // Arrays

// let num = [1,2,3,4,5];
// console.log(num);
// // want to check if a number exist in an array



// if(num.indexOf(4) != -1)
// console.log("present");
// else
// console.log("Absent");
//     // best way to check weather the key is present or not

// console.log(num.includes(7));
// // advance way to check the element is present or not
// console.log(num.indexOf(30,1));
//   let courses = [
//     {no:1, name:'Love'},
//     {no:2, name:'Pankaj'}
//   ];
//   console.log(courses);   
//   console.log(courses.indexOf({no:1,name:'Love'}));
//   console.log(courses.includes({no:1,name:'Love'}));
// // how we print the objects
//let course = courses.find(function(course){
  //  return course.name == 'Pankaj';
//})
// this print the objects
//console.log(course);

// same function is write as an arrow function
// let course = courses.find(course=> course.name == 'Kilvish')
// How empty the array
// let num = [1,2,3,4,5];
//  let num1 = num;
// console.log(num);
// //num.length = 0;
// num.splice(0,9);
// console.log(num);
// console.log(num1);
// Spread operator
let first = [1,2,3];
let second = [  3,9,8];
let com = [...first,'a',1,1,2,2,4,false,...second,'b'];   
// Accessing array by for of loop
for(let value of com){
  console.log(value);
}
//Accessing array by for each loop
com.forEach(function(number){
  console.log(number);
});
//we also write it in an arrow function
com.forEach(number=> console.log(number));
// using filter function
let num = [8,4,6,1,2,3,5,7];
let filtered = num.filter(function(value){
  return value < 0;
});
console.log(filtered);
// using filter function by using arrow function
let fill = num.filter(value=>
  value <= 0);
  console.log(fill);

  // Mapping the value of array
  let num1 = [32,4,8 ,9];
  let items = num1.map(function(value){
    return 'student_no ' + value;
  })
  console.log(items);
  // covert above function in arrow function 
  let it = num.map(value=> 'student_no' + value);
  console.log(items);

  //mapping with objects 
  let nj = [ 1, -4,9,-8];
  let fite = nj.filter(value=> value >= 0);
  let item = fite.map(function(num){
    return {value:num};
  })
console.log(fite);

// Default parameter
function interest(p,r,y){
  return (p*r*y)/100;
}
console.log(interest(100,4,6));

//setting value of parameter default
function interest1(p,r=5,y=12){
  return (p*r*y)/100;
}
console.log(interest1(100,9));
console.log(interest1(100,98,undefined));

// setter and getters
//The below function is only read only function
let person ={
  Fname:'Pankaj',
  LName:'Singh'
};
function fullName(){
  return `${person.Fname}          ${person.LName}`
}
console.log(fullName());

// Now apply setter and getter 
let person1 = {
fname:'Love',
lname:'Dhoni',
get fullName1(){
  return `${person1.fname}  ${person1.lname}`;
},
set fullName1(value){
  let parts = value.split(' ');
  this.fname = parts[0];
  this.lname = parts[1];
}
};


// call the getter
console.log(person1.fullName1);
//call the setter 
console.log(person1.fullName1 = 'Pankaj kumar');
