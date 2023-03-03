person = {
    fname:'ram',
    lname:'singh',
    //getter function
    get fullName(){
        return `${person.fname}  ${person.lname}`
        },
        // setter function
        set fullName(value){
            //if(typeof value !== String){
              //  throw new Error("You have sent a string");
           // }
            let parts = value.split(' ');
            this.fname=parts[0];
            this.lname=parts[1];

        }
};

// try{
//     person.fullName = undefined;
// }
// catch(e){
//     alert(e);
// }

//call the function
person.fullName= 'Pankaj kumar' ;
console.log(person.fullName);

for(var i= 0;i<10;i++)
{

}
console.log(i);
let arr =[1,2,3,4];

 let total = 0;
 for(let value of arr){
    total += value;
 }
 console.log(total);