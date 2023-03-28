// Math methods and Properties 
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
// It returns 4 when it is applied to 3.5
console.log(Math.round(3.5));
console.log(Math.ceil(3.5));

//To the power of -
console.log(Math.pow(2,4));
//to the power of 4
// Min and Max
console.log(Math.max(11,2,3)); // returns 11
console.log(Math.min(1,2,3,5)); //returns 1


// To generate a random number from 1 to 10
// Always choose the floor method for it and not the ceil method because random returns values between 0 and 1
console.log(Math.floor(Math.random()*10)+1);
