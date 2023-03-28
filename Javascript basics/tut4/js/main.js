// numbers 


// An integer is a whole number 
const MyNum=23;

// A number with a decimal point is a float which references the "Floating point"
const MyFloat=23.01;


console.log(MyNum);
console.log(MyFloat); // if x.00 is present, only x is displayed, and if x.01 is present 
// Then it displays all the decimals ie. 0.1 as well
const mystring="23";

console.log(MyNum===mystring); // This will compare two values(also their types)
// Whereas == is used to compare two values irrespective of their types

console.log(mystring+2);
// Here javascript will convert the integer to string and will return 232

console.log(Number(mystring)+2);
// Here we shall get 25 as the output

console.log(Number(mystring)===MyNum);

// If something that can not be converted into a number is passed through Number function, 
// It returns NaN which stands for Not a Number
// Or this could also happen if the data is undefined 
// But when a boolean value is passed through it, then it returns 1/0 values

const myString2="123.033c";
// Number methods 
// The Number.isinteger function gives true when the value passed is an integer.
console.log(Number.isInteger(MyNum));

// The Number.parsefloat parses an arguement and returns a floating point number . If a number
//cannot be parsed from the arguement , it returns NaN .

console.log(Number.parseFloat(myString2).toFixed(2));

//  The Number.isNaN() method determines whether the passed value is NaN and its type is number

console.log(Number.isNaN("Dave"));

// The global isNaN() function determines whether a value is NaN or not.