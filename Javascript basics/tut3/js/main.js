//Strings 
const myVariable="Mathematics";

// The length property
console.log(myVariable.length);

//String methods
console.log(myVariable.charAt(0));
console.log(myVariable.charAt(1));
console.log(myVariable.charAt(myVariable.length-1)); // tO print the last element
console.log(myVariable.indexOf("the")); // To print the starting position of a substring
console.log(myVariable.indexOf("Mkae")); // And it returns -1 if the substring is not present
// we can slice the string using .slice
console.log(myVariable.slice(5,8));
//If the ending position is one more than that of the starting position, 
// then it will only return the starting position of the substring and not the ending position 
// For example ->
console.log(myVariable.slice(5,6)); 
// Other methods include ->
// touppercase
console.log(myVariable.toUpperCase());
// tolowercase
console.log(myVariable.toLowerCase());
// includes
console.log(myVariable.includes("e"));
// split
console.log(myVariable.split(""));
console.log("My name is Akshat Chaube".split(" "));
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods