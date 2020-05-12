import harryData from './data/potter/potter.js';
import {houseG} from './data.js';
const seleccionadoG = houseG(harryData)
import {houseS} from './data.js';
const seleccionadoS = houseS(harryData)
import {houseR} from './data.js';
const seleccionadoR = houseR(harryData)
import {houseH} from './data.js';
const seleccionadoH = houseH(harryData)
import {san} from './data.js';
const seleccionadoPura= san(harryData)
import {mes} from './data.js';
const seleccionadoMestizo = mes(harryData)
import {hij} from './data.js';
const seleccionadoSucia = hij(harryData)
import {squi} from './data.js';
const seleccionadoSquib = squi(harryData)  
import {est} from './data.js';
const seleccionadoE = est(harryData)
import {sta} from './data.js';
const seleccionadoST = sta(harryData)
import {otras} from './data.js';
const seleccionadoCriaturas = otras(harryData)
import {orderharryAz} from './data.js';
const orderedDataAz = orderharryAz (harryData)
import {orderharryZa} from './data.js';
const orderedDataZa = orderharryZa (harryData)

//Global scope variables
let results = document.getElementById("results"); //screen that shows results made with functions


//How the page looks when you enter it
document.getElementById("left-logo").style.visibility= "hidden";
document.getElementById("selector").style.display= "none";


//When press <todos> on side menu
document.getElementById("link-todos").addEventListener("click", enterTodos);

function enterTodos() { //function to bring cards forward
  
document.getElementById("left-logo").style.visibility = "visible";
document.getElementById("pantalla-inicio").style.visibility= "hidden";
document.getElementById("selector").style.display= "block";

  
// cards in <todos>
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

  //Modal Button
  let clickMeButton = document.createElement('button');
  clickMeButton.id = `modalBtn-${i}`;
  clickMeButton.className = 'button';
  clickMeButton.style = "width:35px;height:35px;"
  clickMeButton.innerHTML = `<img src="img/btn_feather.svg" />`;
  // clickMeButton.dataset.name =
  // results.appendChild(clickMeButton)
  // var botones = document.querySelectorAll(".button");
  

  harryCard.appendChild(harryimage);
  harryCard.appendChild(harryName);
  harryCard.appendChild(clickMeButton);
  document.getElementById("results").appendChild(harryCard).innerHTML;
  // document.getElementById("modalBtn").onclick = createModal;
  
  
  //to finish eventlistener click and stop repeating info
  document.getElementById("link-todos").removeEventListener("click", enterTodos);
}}



// //Open Modal

// var botones = document.querySelectorAll(".button");
// function createModal() {
//   const modal = document.querySelector('#harryModal');
//   const modalBtn = document.querySelector('.button');
//   let cardContent = document.getElementById("modal-content");
//   modal.style.display = 'block';

//   for(let i=0; i<botones.length; i++){
//     let charInfo = botones.harryData[i]; //guardamos cada boton de modal en una variable con posición i

//     charInfo.addEventListener("click", () => {
//     modal.style.display = 'block';  //al hacer click traemos el modal general
//     cardContent.innerText += `<span class="close">&times;</span>
//     <p>Some text. Some text. Some text.</p>`;

//     const closeBtn = document.querySelector('.close');
//     closeBtn.addEventListener("click", () => {
//       modal.style.display = 'none';
//       cardContent.innerHTML = "";
//     });
//   } );
// }
// }

// //Selector A-Z

// const select = document.getElementById("select");

// select.addEventListener("change", () => {
//   results.innerHTML += "";
//   let sortAtoZ = select.options[select.selectedIndex].text;
//   let sortResult = sortAlphabetical(harryData, sortAtoZ)

//   for(let i = 0; sortResult.length; i++){
//     results.innerHTML +=
//     `<div class = "harryCards">
//          <img class="harry-image" src= ${harryData[i].image}>
//          <li class= "nombre" >Nombre: ${harryData[i].name}
//          </div>`
//   }
// });



  //Filter by Houses
  //Gryffindor  
  document.getElementById("gry").addEventListener("click", ()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";


    let houseGryffindor = seleccionadoG;
    for (let i=0; i <houseGryffindor.length; i++){
        results.innerHTML +=
        `<div class = "harryCards">
         <img class="harry-image" src= ${houseGryffindor[i].image}>
         <h3 class= "harry-names" > ${houseGryffindor[i].name}</h3>
         <li class= "descripcion"> Cumpleaños: ${houseGryffindor[i].dateOfBirth}
         <li class= "descripcion" >Especie: ${houseGryffindor[i].species}
         <li class= "descripcion"> Casa: ${houseGryffindor[i].house}
         <li class= "descripcion"> Linaje: ${houseGryffindor[i].ancestry}
         <li class= "descripcion"> Varita: ${houseGryffindor[i].wand.wood} ${houseGryffindor[i].wand.core} ${houseGryffindor[i].wand.length}
         </div>`
       // console.log(houseGryffindor)
    }
})

 //Slytherin  
document.getElementById("sly").addEventListener("click", ()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
      document.getElementById("pantalla-inicio").style.display = "none";
      document.getElementById("left-logo").style.visibility = "visible";

    let houseSlytherin = seleccionadoS;
    for (let i=0; i <houseSlytherin.length; i++){
    results.innerHTML +=
     `<div class = "harryCards">
    <img class="harry-image" src= ${houseSlytherin[i].image}>
    <h3 class= "harry-names" >${houseSlytherin[i].name}</h3>
    <li class= "descripcion"> Cumpleaños: ${houseSlytherin[i].dateOfBirth}
    <li class= "descripcion" >Especie: ${houseSlytherin[i].species}
    <li class= "descripcion"> Casa: ${houseSlytherin[i].house}
    <li class= "descripcion"> Linaje: ${houseSlytherin[i].ancestry}
    <li class= "descripcion"> Varita: ${houseSlytherin[i].wand.wood} ${houseSlytherin[i].wand.core} ${houseSlytherin[i].wand.length}
    </div>`
     // console.log(houseSlytherin)
  }
})

//Ravenclaw
document.getElementById("rav").addEventListener("click", ()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";

  let houseRavenclaw = seleccionadoR;
  for (let i=0; i <houseRavenclaw.length; i++){
    results.innerHTML += `<div class = "harryCards">
     <img class="harry-image" src= ${houseRavenclaw[i].image}>
     <h3 class= "harry-names" >${houseRavenclaw[i].name}</h3>
     <li class= "descripcion" >Especie: ${houseRavenclaw[i].species}
     <li class= "descripcion"> Casa: ${houseRavenclaw[i].house}
     <li class= "descripcion"> Linaje: ${houseRavenclaw[i].ancestry}
     <li class= "descripcion"> Varita: ${houseRavenclaw[i].wand.wood} ${houseRavenclaw[i].wand.core} ${houseRavenclaw[i].wand.length}
     <li class= "descripcion"> Cumpleaños: ${houseRavenclaw[i].dateOfBirth}
        </div>`
     // console.log(houseRavenclaw)
  }
})

//Hufflepuff
document.getElementById("huf").addEventListener("click", ()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";

  let houseHufflepuff = seleccionadoH;
  for (let i=0; i <houseHufflepuff.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${houseHufflepuff[i].image}>
    <h3 class= "harry-names" >${houseHufflepuff[i].name}</h3>
    <li class= "descripcion"> Cumpleaños: ${houseHufflepuff[i].dateOfBirth}
    <li class= "descripcion" >Especie: ${houseHufflepuff[i].species}
    <li class= "descripcion"> Casa: ${houseHufflepuff[i].house}
    <li class= "descripcion"> Linaje: ${houseHufflepuff[i].ancestry}
    <li class= "descripcion"> Varita: ${houseHufflepuff[i].wand.wood} ${houseHufflepuff[i].wand.core} ${houseHufflepuff[i].wand.length}
        </div>`
     // console.log(houseHufflepuff)
  }
})

//Filter by Role inside Hogwarts
//Student
document.getElementById("est").addEventListener ("click", ()=>{
  results = document.getElementById('results');
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";
  
  let students = seleccionadoE;
  for (let i=0; i<students.length; i++){
    results.innerHTML += `<div class = "harryCards">
  <img class="harry-image" src= ${students[i].image}>
  <h3 class= "harry-names" >${students[i].name}</h3>
  <li class= "descripcion"> Cumpleaños: ${students[i].dateOfBirth}
  <li class= "descripcion" >Especie: ${students[i].species}
  <li class= "descripcion"> Casa: ${students[i].house}
  <li class= "descripcion"> Linaje: ${students[i].ancestry}
  <li class= "descripcion"> Varita: ${students[i].wand.wood} ${students[i].wand.core} ${students[i].wand.length}
        </div>`
  
}
})

//Staff
document.getElementById("sta").addEventListener ("click", ()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";
  
  let staff = seleccionadoST;
  for (let i=0; i<staff.length; i++){
    results.innerHTML += `<div class = "harryCards">
  <img class="harry-image" src= ${staff[i].image}>
  <h3 class= "harry-names" >${staff[i].name}</h3>
  <li class= "descripcion"> Cumpleaños: ${staff[i].dateOfBirth}
  <li class= "descripcion" >Especie: ${staff[i].species}
  <li class= "descripcion"> Casa: ${staff[i].house}
  <li class= "descripcion"> Linaje: ${staff[i].ancestry}
  <li class= "descripcion"> Varita: ${staff[i].wand.wood} ${staff[i].wand.core} ${staff[i].wand.length}
        </div>`
  
}
})

//Types of Ancestry
//Pure-Blood
document.getElementById("san").addEventListener("click", ()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";

  let pureblood = seleccionadoPura;
  for (let i=0; i<pureblood.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${pureblood[i].image}>
    <h3 class= "harry-names" >${pureblood[i].name}</h3>
    <li class= "descripcion"> Cumpleaños: ${pureblood[i].dateOfBirth}
    <li class= "descripcion" >Especie: ${pureblood[i].species}
    <li class= "descripcion"> Casa: ${pureblood[i].house}
    <li class= "descripcion"> Linaje: ${pureblood[i].ancestry}
    <li class= "descripcion"> Varita: ${pureblood[i].wand.wood} ${pureblood[i].wand.core} ${pureblood[i].wand.length}
          </div>`
  }
})

//Half-Blood
document.getElementById("mes").addEventListener("click", ()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";

  let mestizo = seleccionadoMestizo;
  for (let i=0; i<mes.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${mestizo[i].image}>
    <h3 class= "harry-names" >${mestizo[i].name}</h3>
    <li class= "descripcion"> Cumpleaños: ${mestizo[i].dateOfBirth}
    <li class= "descripcion" >Especie: ${mestizo[i].species}
    <li class= "descripcion"> Casa: ${mestizo[i].house}
    <li class= "descripcion"> Linaje: ${mestizo[i].ancestry}
    <li class= "descripcion"> Varita: ${mestizo[i].wand.wood} ${mestizo[i].wand.core} ${mestizo[i].wand.length}
          </div>`
  }
})

//Muggleborn
document.getElementById("hij").addEventListener("click", ()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";

  let muggleborn = seleccionadoSucia;
  for (let i=0; i<muggleborn.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${muggleborn[i].image}>
    <h3 class= "harry-names" >${muggleborn[i].name}</h3>
    <li class= "descripcion"> Cumpleaños: ${muggleborn[i].dateOfBirth}
    <li class= "descripcion" >Especie: ${muggleborn[i].species}
    <li class= "descripcion"> Casa: ${muggleborn[i].house}
    <li class= "descripcion"> Linaje: ${muggleborn[i].ancestry}
    <li class= "descripcion"> Varita: ${muggleborn[i].wand.wood} ${muggleborn[i].wand.core} ${muggleborn[i].wand.length}
          </div>`
  }
})

//Squid
document.getElementById("squ").addEventListener("click",()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";

  let squib= seleccionadoSquib;
  for (let i=0; i<squib.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${squib[i].image}>
    <h3 class= "harry-names" >${squib[i].name}</h3>
    <li class= "descripcion"> Cumpleaños: ${squib[i].dateOfBirth}
    <li class= "descripcion" >Especie: ${squib[i].species}
    <li class= "descripcion"> Casa: ${squib[i].house}
    <li class= "descripcion"> Linaje: ${squib[i].ancestry}
    <li class= "descripcion"> Varita: ${squib[i].wand.wood} ${squib[i].wand.core} ${squib[i].wand.length}
     </div>`
  }
  })

  //Filter for other creatures
  document.getElementById("link-otras").addEventListener("click", ()=>{
    while(results.firstChild){
    results.removeChild(results.firstChild);
    } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";
    

    let criaturas  = seleccionadoCriaturas;
    for (let i=0; i<criaturas.length; i++){
      results.innerHTML += `<div class = "harryCards">
      <img class="harry-image" src= ${criaturas[i].image}>
      <<h3 class= "harry-names" >${criaturas[i].name}</h3>
      <li class= "descripcion"> Cumpleaños: ${criaturas[i].dateOfBirth}
      <li class= "descripcion" >Especie: ${criaturas[i].species}
      <li class= "descripcion"> Casa: ${criaturas[i].house}
      <li class= "descripcion"> Linaje: ${criaturas[i].ancestry}
      <li class= "descripcion"> Varita: ${criaturas[i].wand.wood} ${criaturas[i].wand.core} ${criaturas[i].wand.length}
            </div>`
    }
  });


  function viewAllharry (harryData) {
    let cardTemplate = ""; 
    for (let i = 0; i < harryData.length; i++) {
      cardTemplate  += `<div class = "harryCards">
      <img class="harry-image" src= ${harryData[i].image}>
      <li class= "nombre" >Nombre: ${harryData[i].name}
      </div>`
      results.innerHTML = cardTemplate
    }}

    const  selectElement=document.querySelector(".dropdown-select");
  selectElement.addEventListener("change",(e) => {
    const resultado =`${e.target.value}`;

    if  (resultado === "A-Z"){
      viewAllharry(orderedDataAz);
    }
    else if (resultado === "Z-A"){
      viewAllharry(orderedDataZa);
    }
  }); 