import "./styles/home.css";
import homeImg from "./assets/home1.png";
import home2Img from "./assets/home2.png";


function HomePage(){
    const content=document.querySelector(".content");
    const container=document.createElement("div");
    container.classList.add('container');
    const para=document.createElement("div");
    para.classList.add('para');
    // const images=document.createElement("div");
    // images.classList.add('images');
    const img1=document.createElement("img");
    const img2=document.createElement("img");
    img1.src=homeImg;
    img2.src=home2Img;
    // images.appendChild(img1);
    // container.appendChild(images);
    container.appendChild(img1);
    const h1=document.createElement("h1");
    h1.textContent="Welcome to"
    h1.classList.add('h1')
    const h2=document.createElement("h1")
    h2.classList.add('h2')
    h2.textContent="THE BEAR"
    para.appendChild(h1);
    para.appendChild(h2);
    container.appendChild(para);
    // container.appendChild(img2)
    content.appendChild(container);



}


export default HomePage;