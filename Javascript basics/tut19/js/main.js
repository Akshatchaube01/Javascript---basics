//Javascript Errors and error handling
"use strict"; //To enforce the rules strictly
const variable="Akshat"; //Must write const variable
console.log(variable);

//Object..create(); //This will give Syntax error

const name="Akshat";
//name="Aksha2t"; // We will get Type error, Assignment to const variable 

const makeerror = () => {
    try{
        //1
        //const name="Akshat Chaube";
        //name="Chaube Chaube";
        //2
        //throw new customerror("This is a custom error !");
        //3
        throw new Error("This is an error !") //Using a generic error constructor
    }
    catch(err){
        console.error(err); //We can also change this statement to console.log(err)
        console.log(err); //This wont look like an error
        console.warn(err);
        console.table(err); //Used like this mostly during development
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);
    }
    finally{ //Will run no matter what
        console.log("Finally")
    }
}

makeerror();


function customerror(message){
    this.message=message;
    this.name="customError";
    this.stack= `${this.name}: ${this.message}`;
}
