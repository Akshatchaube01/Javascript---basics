// User input
alert("Hello World ! ");
let MyBoolean = confirm("Ok === true \n Cancel === false"); 
console.log(MyBoolean);
//Null coalescing operator
let name= prompt("Please enter your name : ");
console.log(name);
// If you select cancel here, then name becomes a null value.
if(name.length){
    console.log(name ?? "You didn't enter your name.");
}
else{
    console.log("You didn't enter your name. ");
}

