// Functions in Javascript

// Methods - Built in functions 

"Dave".toLowerCase();
Math.random();

// Function Declaration Syntax :

console.log("Result of Non parametrised fucntion : ");
function sum(){
    return 2+2;
}

console.log(sum());

console.log("Result of parametrised function : ");

function sum1(num1,num2){
    return num1+num2;
}

console.log(sum1(2,3));

console.log("When we pass only one value in a parametrised function : ");

function sum2(num1,num2){
    console.log(num1);
    console.log(num2);
    return num1+num2;
}

console.log(sum2(2));

console.log("Getting the username from the email  : ");

// Getting the username from the email

function GetUserNameFromEMail(email){
    return email.slice(0,email.indexOf("@"));
}

console.log(GetUserNameFromEMail("akshatchaube11@gmail.com"));


// Another way to define functions is : 

const GetUserNameFromEMail1= function(email){
    return email.slice(0,email.indexOf("@"));
}

console.log(GetUserNameFromEMail1("akshatchaube22@gmail.com"));

// one more way to define the function is as follows : 

const GetUserNameFromEMail2= (email)=>{
    return email.slice(0,email.indexOf("@"));
}


console.log(GetUserNameFromEMail2("akshatchaube33@gmail.com"));

//Function to print name in a proper form

const toProperCase= (name) =>{
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
};
console.log(toProperCase("akshat"));