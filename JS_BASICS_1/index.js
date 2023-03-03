
        console.log('Namaste duniya Version4');
        let c = 34

        console.log(c);
        
        {
var d = 45;
        console.log(d);
        }

        console.log(d);
       const num = 9;
       console.log(num);

       //num = 10;
       let aa = 7;
       
       console.log(aa);

       aa = 'pankaj';
       console.log(aa);
       //create object
        let person ={
            firstName : 'Pankaj',
            age : 23
        };
        // Access the object.It can be access by dot notation 
        // We can also access by bracket noation
        console.log( person.firstName);
        console.log( person.age);
        console.log( person['age']);
        let names = ['ram','shyam','nagendr','gyan'];
        console.log(names[0]);
        console.log(names[1]);
        console.log(names[3]);
        names[2] = 'try';
        console.log(names[2]);
        let x =5;
        console.log(x++);//post increment
        console.log(++x);//pre incremeant
        let a = 5;
        let b = 10;
        let ans1 = (++a)*(--b);
        console.log(ans1);
        let ans2 = (a++)*(--b);
        console.log(ans2);
        let ans3 = (a++)*(b--);
        console.log(ans2);
        let ans4 = (++a)*(b--);
        console.log(ans4);
console.log(true||false);
let age = 18;
let statu = (age>= 18) ? 'yes Vote' :'No Vote';
console.log(statu);
console.log(false||'Pankaj');
//short Circuiting in this after getting true value its don't check 
//next value
console.log(false||5||1);
        
