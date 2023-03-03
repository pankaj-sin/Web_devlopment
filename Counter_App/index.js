
const constValue = document.getElementById('counter');
// const constValue = document.querySelector('#counter');

const increment = () => {
    // get the value from UI
let value = parseInt(constValue.innerText);
// Update the value
value = value + 1;

// set the value to UI
constValue.innerText = value;

};
const decrement = () => {
 // get the value from UI
 let value = parseInt(constValue.innerText);
 // Update the value
 value = value - 1;
 
 // set the value to UI
 constValue.innerText = value;
};