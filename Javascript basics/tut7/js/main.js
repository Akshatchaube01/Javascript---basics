// Conditional statements 

let soup="Chicken Noodle Soup";
let crackers=true;
let BannedCustomers=true;
let reply;
if(BannedCustomers){
    reply="No soup for you !";
}
else if(soup){
    reply = `Here's your order of ${soup}`;
}
else{
    reply = `sorry we are out of ${soup}`;
}
console.log(reply);