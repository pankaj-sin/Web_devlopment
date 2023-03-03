// adding 100 paragraph
// const t1 = performance.now();
// for(let i = 1 ; i<= 100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'+i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("This took " + (t2-t1) + "ms");



// // optimized a  bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for(let i = 1; i<= 100;i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para '+ i;
//     myDiv.appendChild(element);

// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();

// console.log("This took " + (t4-t3) + "ms");

// const t5 = performance.now();

// let fragment = document.createDocumentFragment();
// for(let i = 1; i<=100 ; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para'+i;
//     fragment.appendChild(newElement);// 1 reflow 1 repaint
// }
// const t6 = performance.now();

// console.log("This took " + (t6-t5) + "ms");

function addPara(){
    let para = document.createElement('p');
    para.textContent = 'Js is a single thread';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para = document.createElement('p');
    para.textContent = 'Kya haal Chaal';
    document.body.appendChild(para);
}
addPara();
appendNewMessage();
