// Switch statements 

switch(2){ // It will not work if you use string data type of 2 ie "2".
    // Since the values must strictly match 
    case 1:
        console.log("This is case 1 ");
        break;
    case 2:
        console.log("This is case 2");
        break;
    default:
        console.log("No match found");
}

switch(Math.floor(Math.random()*3+1)){
    case 1:
        console.log("This is case 1 ");
        break;
    case 2:
        console.log("This is case 2");
        break;
    case 3:
        console.log("This is case 3");
        break;
    default:
        console.log("No match found");
}