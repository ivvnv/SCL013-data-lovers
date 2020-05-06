import harryData from './data/potter/potter.js';
import {houseG} from './data.js';
const seleccionadoG = houseG(harryData)
import {houseS} from './data.js';
const seleccionadoS = houseS(harryData)
import {houseR} from './data.js';
const seleccionadoR = houseR(harryData)
import {houseH} from './data.js';
const seleccionadoH = houseH(harryData)

//console.log(seleccionadoG)


//When press <todos> on side menu

document.getElementById("left-logo").style.visibility= "hidden";

document.getElementById("link-todos").addEventListener("click", enterTodos);


function enterTodos() {
  
  document.getElementById("left-logo").style.visibility = "visible";
  

// cards
for (let i=0; i< harryData.length; i++ ) {

  let harryCard = document.createElement("div"); 
  harryCard.className="harryCards";
  harryCard.id="harryCards";

  let harryimage= document.createElement("img");
  harryimage.className="harry-image";
  harryimage.src = harryData[i].image;

  let harryName= document.createElement("h3");
  harryName.className="harry-names";
  harryName.textContent=harryData[i].name;

  let harryDob= document.createElement("p");
  harryDob.className="dateofb";
  harryDob.textContent=harryData[i].dateOfBirth;

  let harrySpecies= document.createElement("p");
   harrySpecies.textContent= harryData[i].species;
   harrySpecies.className = "species";

  let harryAncestry = document.createElement("p");
   harryAncestry.textContent = harryData[i].ancestry;

   let harryPatronus = document.createElement("p");
   harryPatronus.textContent = harryData[i].patronus;

   let harryStatus = document.createElement("p");
   harryStatus.textContent = harryData[i].alive;

   harryCard.appendChild(harryimage);
   harryCard.appendChild(harryName);
   harryCard.appendChild(harryDob);
   harryCard.appendChild(harrySpecies);
   harryCard.appendChild(harryAncestry);
   harryCard.appendChild(harryPatronus);
  harryCard.appendChild(harryStatus);

   document.getElementById("results").appendChild(harryCard).innerHTML;

    
  }}

  let results = document.getElementById("results");
   
  document.getElementById("gry").addEventListener("click", ()=>{
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";

    let houseGryffindor = seleccionadoG;
    for (let i=0; i <houseGryffindor.length; i++){
        results.innerHTML +=
        `<div class = "harryCards">
         <img class="harry-image" src= ${houseGryffindor[i].image}>
         <li class= "nombre" >Nombre: ${houseGryffindor[i].name}
         <li class= "descripcion" >Especie: ${houseGryffindor[i].species}
         <li class= "descripcion"> Casa: ${houseGryffindor[i].house}
         <li class= "descripcion"> Linaje: ${houseGryffindor[i].ancestry}
         <li class= "descripcion"> Varita: ${houseGryffindor[i].wand.wood} ${houseGryffindor[i].wand.core} ${houseGryffindor[i].wand.length}
         <li class= "descripcion"> Cumpleaños: ${houseGryffindor[i].dateOfBirth}
         </div>`
       // console.log(houseGryffindor)
    }
})
     document.getElementById("sly").addEventListener("click", ()=>{
      document.getElementById("pantalla-inicio").style.display = "none";
    let houseSlytherin = seleccionadoS;
    for (let i=0; i <houseSlytherin.length; i++){
    results.innerHTML +=
     `<div class = "harryCards">
    <img class="harry-image" src= ${houseSlytherin[i].image}>
    <li class= "nombre" >Nombre: ${houseSlytherin[i].name}
    <li class= "descripcion" >Especie: ${houseSlytherin[i].species}
    <li class= "descripcion"> Casa: ${houseSlytherin[i].house}
    <li class= "descripcion"> Linaje: ${houseSlytherin[i].ancestry}
    <li class= "descripcion"> Varita: ${houseSlytherin[i].wand.wood} ${houseSlytherin[i].wand.core} ${houseSlytherin[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${houseSlytherin[i].dateOfBirth}
        </div>`
     // console.log(houseSlytherin)
  }
})

document.getElementById("rav").addEventListener("click", ()=>{
  document.getElementById("pantalla-inicio").style.display = "none";
  let houseRavenclaw = seleccionadoR;
  for (let i=0; i <houseRavenclaw.length; i++){
    results.innerHTML += `<div class = "harryCards">
     <img class="harry-image" src= ${houseRavenclaw[i].image}>
     <li class= "nombre" >Nombre: ${houseRavenclaw[i].name}
     <li class= "descripcion" >Especie: ${houseRavenclaw[i].species}
     <li class= "descripcion"> Casa: ${houseRavenclaw[i].house}
     <li class= "descripcion"> Linaje: ${houseRavenclaw[i].ancestry}
     <li class= "descripcion"> Varita: ${houseRavenclaw[i].wand.wood} ${houseRavenclaw[i].wand.core} ${houseRavenclaw[i].wand.length}
     <li class= "descripcion"> Cumpleaños: ${houseRavenclaw[i].dateOfBirth}
        </div>`
     // console.log(houseRavenclaw)
  }
})
document.getElementById("huf").addEventListener("click", ()=>{
  document.getElementById("pantalla-inicio").style.display = "none";
  let houseHufflepuff = seleccionadoH;
  for (let i=0; i <houseHufflepuff.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${houseHufflepuff[i].image}>
    <li class= "nombre" >Nombre: ${houseHufflepuff[i].name}
    <li class= "descripcion" >Especie: ${houseHufflepuff[i].species}
    <li class= "descripcion"> Casa: ${houseHufflepuff[i].house}
    <li class= "descripcion"> Linaje: ${houseHufflepuff[i].ancestry}
    <li class= "descripcion"> Varita: ${houseHufflepuff[i].wand.wood} ${houseHufflepuff[i].wand.core} ${houseHufflepuff[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${houseHufflepuff[i].dateOfBirth}
        </div>`
     // console.log(houseHufflepuff)
  }
})

// var clickMeButton = document.createElement('button');
// clickMeButton.id = 'modalBtn';
// clickMeButton.className = 'button';
// clickMeButton.innerHTML = 'M Á S';
// results.appendChild(clickMeButton);

