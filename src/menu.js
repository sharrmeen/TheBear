// import "./styles/style.css"

function loadMenu(){

  const content=document.querySelector(".content");
  const menuItems = [
    { 
      title: "Amuse-Bouche", 
      description: "A playful bite to start the meal.", 
      img: require("./assets/amuse-bouche.jpg") 
    },
    { 
      title: "House Ferments", 
      description: "Seasonal pickled vegetables with bright, tangy flavors.", 
      img: require("./assets/house-ferments.jpg") 
    },
    { 
      title: "Handmade Pasta", 
      description: "Fresh pasta served with seasonal garnishes.", 
      img: require("./assets/handmade-pasta.jpg") 
    },
    { 
      title: "Braised Short Rib", 
      description: "Slow-cooked tenderness with charred greens.", 
      img: require("./assets/amuse-bouche.jpg") 
    },
    { 
      title: "Signature Plate", 
      description: "A rotating dish inspired by Chicago classics.", 
      img: require("./assets/amuse-bouche.jpg")  
    },
    { 
      title: "Seasonal Dessert", 
      description: "Sweet finishes that change with the season.", 
      img: require("./assets/amuse-bouche.jpg") 
    },
    { 
      title: "Freshly Baked Bread & Butter", 
      description: "Warm house bread with cultured butter.", 
      img: require("./assets/amuse-bouche.jpg") 
    },
    { 
      title: "Market Salad", 
      description: "Crisp seasonal greens with a light dressing.", 
      img: require("./assets/amuse-bouche.jpg") 
    },
    // { 
    //   title: "Rotating Small Plates", 
    //   description: "Small dishes inspired by local farms.", 
    //  img: require("./assets/amuse-bouche.jpg") 
    // }
  ];
  
const menuContainer=document.createElement("div");
menuContainer.className='menuContainer'

menuItems.forEach(item=>{
    const card=document.createElement('div');
    card.className='menu-card';
    const image=document.createElement('img');
    image.className='card-image';
    image.src=item.img;
    const title=document.createElement('h2');
    title.textContent=item.title;
    title.className='title';
    const desc=document.createElement('p');
    desc.textContent=item.description;
    desc.className='description';
    card.appendChild(image)
    card.appendChild(title);
    card.appendChild(desc);
    menuContainer.appendChild(card);
})
content.appendChild(menuContainer);
}

export default loadMenu;