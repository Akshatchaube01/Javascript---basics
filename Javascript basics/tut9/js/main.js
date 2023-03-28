// Switch statements using ternary operators

// Syntax 
// Condition ? ifTrue : ifFalse

let soup="Chicken Noodle Soup";
// If we do not assign any value in it, then it is undefined which becomes false.  
let response = soup ? "Yes, We have soup" : "No we do not have soup";
console.log(response);

// A chained ternary operation 

let testScore = 79;
let Mygrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F" ;
console.log(`My test grade is a ${Mygrade}`);
