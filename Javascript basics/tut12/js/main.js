//Loops

// While loop

console.log("While Loop");
let mynum=50;
while(mynum<50){
    mynum+=2;
    console.log(mynum);
}

// Do while loop

console.log("Do While loop");
do{
    console.log(mynum);
    mynum++;
}while(mynum<50);

// For loop

console.log("For loop");
for(let i=0;i<10;i++){
    console.log(i);     
}

// Loop application on strings 
let name="Dave";
let counter=0;
let MyLetter;
while(counter <= 3){
    MyLetter=name[counter];
    console.log(MyLetter);
    if(counter === 1){
        counter+=2;
        continue;
    }
    if(MyLetter === "v") break;
    counter++;
}
console.log(counter);