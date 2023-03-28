//Javascript objects 
//key value pair in curly braces
const myObj = { name : "Akshat"};
console.log(myObj.name);
const anotherObj ={
    alive:true, // alive here is a property name
    answer:42,
    hobbies:["Eat","Sleep","Code"],
    beverage:{
        morning:"Coffee",
        afternoon:"Ice Tea"
    },
    action: function() {
        //return "Hello World !";
        return `Time for ${this.beverage.morning}`;
    }// action is a method name
}

console.log(anotherObj.answer);
console.log(anotherObj.hobbies); // This will give the entire array
// But if you wish to access elemnts from the array,
console.log(anotherObj.hobbies[0]);
//Instead of the dots, we can also use brackets,
console.log(anotherObj["alive"]); // Notice here the key names are under quotes
console.log(anotherObj["beverage"]);
console.log(anotherObj["beverage"]["morning"]);
// Calling our action method
console.log(anotherObj.action());