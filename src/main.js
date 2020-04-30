//import { filterData } from './data.js'; PONER
//import { allCharacters } from './data.js'; PONER

// import data from './data/lol/lol.js';
import harryData from './data/potter/potter.js';
// import data from './data/rickandmorty/rickandmorty.js';


const data = harryData; //NO SACAR de acá sale todo

//When press <todos> on side menu


  
  for (let i = 0; i < data.length; i++){
    //variable para crear tarjeta
    let characCard = document.createElement("div");
    characCard.className = "hp-card";
    characCard.id = "hp-card";

    //variable para crear nombre personaje
    let characName = document.createElement("h4");
    characName.textContent = data.name;

    //variable para crear imagen de personaje
    let image = document.createElement("img");
    image.src = data.image;

    //variable fecha de nacimiento
    let characDofB = document.createElement("h5");
    characDofB.textContent = data.dateOfBirth;
    characDofB.className = "dob";

    //variable especie
    let characSpec = document.createElement("h5");
    characSpec.textContent = data.species;
    characSpec.className = "species";

    //variable linaje
    let characAnces = document.createElement("h5");
    characAnces.textContent = data.ancestry;
    characAnces.className = "ancestry";

    //variable patronus
    let characPatro = document.createElement("h5");
    characPatro.textContent = data.patronus;
    characPatro.className = "patronus";

    //variable varita
    let characWand = document.createElement("h5");
    characWand.textContent = data.wand;
    characWand.className = "patronus";

    //variable estado
    let characStatus = document.createElement("h5");
    characStatus.textContent = data.alive;
    characStatus.className = "status";

    //Dando valor a variables
    characCard.appendChild(characName);
    characCard.appendChild(image);
    characCard.appendChild(characDofB);
    characCard.appendChild(characSpec);
    characCard.appendChild(characAnces);
    characCard.appendChild(characPatro);
    characCard.appendChild(characWand);
    characCard.appendChild(characStatus);

    //Mostrar tarjeta en HTLM section
    document.getElementById("content-wrap").appendChild(characCard).innerHTML;
  }
 




