// Var let and const

var x=1;
var x=2;
//Var does not give error even when it is redeclared
console.log(x);

/*
Now, when we use let 
let y=1;
let y=2;
console.log(y);
// This will give us an error
*/
// But we can reassign a variable if we want

let y=4;
y=5;
console.log(y);

/* Now when we try to reassign an integer using const, we get an error

const a=2;
a=4; 
// Gives an error
*/


// Global scope
var x=12
let y1=2;
const z=3;


// Local scope - 1) Block scope 2) Function scope

//1)
{
    let y=4;
    console.log(y)
}

//2)
function Myfun(){
    const z=5;
}

var x1=1;
let y2=2;
const z1=3;

console.log(`global : ${x1} `);
console.log(`global : ${y2}`);
console.log(`global : ${z1}`);

function myFunc(){
    console.log(`function : ${x1}`);
    console.log(`function : ${y2}`);
    console.log(`function : ${z1}`);
    {
        console.log(`block : ${x1}`);
        console.log(`block : ${y2}`);
        console.log(`block : ${z1}`);
    };
}

myFunc();
