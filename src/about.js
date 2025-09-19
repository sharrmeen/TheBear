import about1 from "./assets/about1.png";
import about2 from "./assets/about2.png";
import about3 from "./assets/about3.png";
function loadAbout(){
    const content=document.querySelector(".content");
    const aboutContainer=document.createElement('div');
    aboutContainer.className="outbox";
    const box1=document.createElement('div');
    box1.className="inbox";
    const box2=document.createElement('div');
    box2.className="inbox";
    const box3=document.createElement('div');
    box3.className="inbox";
    box1.textContent="Why we Cook : It’s not about perfection. It’s about precision. Every dish is a conversation between chaos and control. We chase the impossible standard not because it’s easy, but because it matters.";
    const img1=document.createElement('img');
    img1.src=about1;
    box1.appendChild(img1);

    box2.textContent="The People Behind the Line : We are more than chefs and servers. We are a family forged in fire, mistakes, and small victories. Everyone here fights for the same thing: a kitchen that runs clean, sharp, and honest."
    const img2=document.createElement('img');
    img2.src=about2;
    box2.appendChild(img2);
    box2.classList.add('left');


    box3.textContent="The restaurant is alive. The hum of the line, the stillness of the dining room before doors open, the weight of expectation. It is not just a space to eat. It is where pressure turns into something beautiful.";
    const img3=document.createElement('img');
    img3.src=about3;
    box3.appendChild(img3);


    aboutContainer.appendChild(box1);
    aboutContainer.appendChild(box2);
    aboutContainer.appendChild(box3);
    content.appendChild(aboutContainer);

}

export default loadAbout;