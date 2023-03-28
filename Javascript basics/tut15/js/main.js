// Arrays 
const myArray=[];

//Add elements to the array
myArray[0]="Dave";
myArray[1]=1001;
myArray[2]=false;

//refer to an array
console.log(myArray);

//length property
console.log(myArray.length);

//Last element in an array 
console.log(myArray[myArray.length-1]);

console.log(myArray[1]);

myArray.push("School");
console.log(myArray);
const lastItem=myArray.pop(); // Give remove and return an element from the end
console.log(lastItem);
console.log(myArray);

myArray.unshift(42); // This will add an element at the front of an array
console.log(myArray); // Here you can see an element has been added in front of the array
myArray.shift(); // This will return the first element and will also return it 
console.log(myArray); // As you can see, the length decreased.

console.log(myArray[4]); // This will return undefined
//delete myArray[1]; If i use this command, it will empty that space in the array
myArray.splice(1,1,42); // (position, numbers to remove from position ,replacing it with)


const myArray1 = ['A','B','C','D','E','F'];
let newArray= myArray1.splice(1); // A new Array is formed with values after index 1
console.log(newArray); 
newArray=newArray.reverse();
console.log(newArray); // New Array reverses

const newstr=newArray.join();
console.log(newstr);

const new_arr=newstr.split(",");
console.log(new_arr);

const myArrayA=['A','B','C'];
const myArrayB=['D','E','F'];

const mynewArray=myArrayA.concat(myArrayB);
console.log(mynewArray);


const newnewarray=[...myArrayA,...myArrayB]; // Using the spread operator (...)
console.log(newnewarray);

// Nested arrays 
const equipshelfA=["Baseball","football","bat"];
const equipshelfB=["golf balls","tennis balls","cricket balls"];

const clothshelfA=["tank tops","tshirts","jerseys"];
const clothshelfB=["sweat tops","sweat pants","Hoodies"];

console.log(equipshelfA[1]);
console.log(clothshelfB[0]);

const equipDept=[equipshelfA,equipshelfB];
const clothesDept=[clothshelfA,clothshelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsstore=[equipDept,clothesDept];
console.log(sportsstore[0][0][1]);
console.log(sportsstore[1][1][0]);








