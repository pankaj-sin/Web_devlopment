// function eventFunction(){
//     console.log('I have clicked on the document');
// }

// document.addEventListener('click',eventFunction);

// document.removeEventListener('click',eventFunction);

// const content  = document.querySelector('#wrapper');
// content.addEventListener('click',function(event){
//     console.log(event);
// })

// content.addEventListener('click',function(pankaj){
//     console.log(pankaj);
// })
// let links = document.querySelectorAll('a');
// let thirdLink = links[2];
// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Maaza aaya ,aacha laga');
// });
// let myDiv  = document.createElement('div');

// for( let i = 1; i<=100;i++){

//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' +i;

//     newElement.addEventListener('click',function(event)
//     {
//         console.log('I have clicked on para');
//     });
//     myDiv.appendChild(newElement);
// }
    
// function paraStatus(){
//     console.log('I have clicked on para');
// }
// myDiv.addEventListener('click',paraStatus);
// for(let i = 1; i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph'+i;
//     myDiv.appendChild(newElement);
// }
//     document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
    console.log('span pr click kiya hai'+event.target.textContent);
}
});