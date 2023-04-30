//DOM - Document Oject Model
const view1= document.getElementById("view1");
console.log(view1);

const view2=document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex"; //If you set this to none, you will not be able to scroll down
view2.style.display = "flex";//If you set this to none, you will not be able to scroll up

const views= document.getElementsByClassName("view");
console.log(views);

const sameViews= document.querySelectorAll('.view');
console.log(sameViews);
//There are more nodes than there are elements in a webpage

const divs=view1.querySelectorAll("div");
console.log(divs);
const sameDivs= view1.getElementsByTagName("div");
console.log(sameDivs);


const evenDivs=view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for(let i=0;i<evenDivs.length;i++){
    evenDivs[i].style.backgroundColor="darkblue";
    //evenDivs[i].style.width="200px";
    //evenDivs[i].style.height="200px";
}

const navText=document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World !";

