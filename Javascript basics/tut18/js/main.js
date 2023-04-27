//JSON - Javascript Object Notation
//Used to send and recieve data
//Json is a text format and it is completely language independent
//Json is ued to recieve and send data in many languages
//Not just in javascript 

const myObj= {
    name:"Akshat",
    hobbies: ["eat","sleep","code"],
    hello : function(){
        console.log("Hello ! ");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);

console.log(sendJSON);   //JSON does not send fucntions
console.log(typeof sendJSON);
console.log(sendJSON.name); //undefined --> because it is now a string and does not respond like an object.


const receiveJSON= JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(receiveJSON.name);
console.log(typeof receiveJSON);
