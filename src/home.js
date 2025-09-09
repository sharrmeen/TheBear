import "./styles/home.css";
import homeImg from "./assets/home1.png";
import home2Img from "./assets/home2.png";
import home3Img from "./assets/home3.png"
import home4Img from "./assets/home4.png"


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
    const box=document.createElement("p")
    box.classList.add('box')
    para.appendChild(box);
    const text=document.createElement("p");
    text.classList.add('text');
    text.textContent="Born from tradition, rebuilt with ambition — we serve food that’s bold, seasonal, and deeply connected to Chicago.";
    para.appendChild(text);
    const img3=document.createElement("img");
    img3.src=home3Img;
    img3.classList.add('img3');
    para.appendChild(img3);
    content.appendChild(container);
    const para2=document.createElement("p")
    para2.textContent="At The Bear, the food is only half the story. The people are the rest.Our crew is a family forged in fire — sometimes messy, always passionate, and committed to making something greater than themselves."
    para2.classList.add("text1","hidden-text");
    para.appendChild(para2);
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }
            else{
                entry.target.classList.remove("visible")
            }
        })
    })

    const img4=document.createElement("img");
    img4.src=home4Img;
    img4.classList.add('img4');
    para.appendChild(img4);

    document.querySelectorAll(".hidden-text").forEach(entry=>observer.observe(entry));
    

}


export default HomePage;