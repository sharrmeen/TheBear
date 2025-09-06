import "./styles/style.css";
import HomePage from "./home.js";



const header=document.createElement("header");
const nav=document.createElement("nav");
const content=document.querySelector(".content")
const homeBtn=document.createElement("button");
const menuBtn=document.createElement("button");
const aboutBtn=document.createElement("button");

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(aboutBtn);
header.appendChild(nav);
content.appendChild(header);
homeBtn.textContent="Home";
homeBtn.addEventListener("click",()=>{
    clearPage(content,header);
    HomePage();
    
})

menuBtn.textContent="Menu"
menuBtn.addEventListener("click",()=>{
    clearPage(content,header);
    MenuPage();
})

aboutBtn.textContent="About"
aboutBtn.addEventListener("click",()=>{
    clearPage(content,header);
    AboutPage();
})


function clearPage(content,header){
    content.innerHTML="";
    content.appendChild(header);
}



