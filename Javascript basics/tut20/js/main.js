//DOM - Document Oject Model
const view1= document.getElementById("view1");
console.log(view1);

const view2=document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex"; //If you set this to none, you will not be able to scroll down
view2.style.display = "flex";//If you set this to none, you will not be able to scroll up

const views= document.getElementsByClassName("view");
console.log(views);
