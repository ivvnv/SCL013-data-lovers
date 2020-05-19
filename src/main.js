import harryData from './data/potter/potter.js';
import { houseG, houseS, houseR, houseH } from './data.js';
const seleccionadoG = houseG(harryData)
const seleccionadoS = houseS(harryData)
const seleccionadoR = houseR(harryData)
const seleccionadoH = houseH(harryData)
import { san, mes, hij, squi } from './data.js';
const seleccionadoPura= san(harryData)
const seleccionadoMestizo = mes(harryData)
const seleccionadoSucia = hij(harryData)
const seleccionadoSquib = squi(harryData)
import { est, sta } from './data.js';
const seleccionadoE = est(harryData)
const seleccionadoST = sta(harryData)
import {otras} from './data.js';
const seleccionadoCriaturas = otras(harryData)
import { orderharryAz, orderharryZa } from './data.js';
const orderedDataAz = orderharryAz (harryData)
const orderedDataZa = orderharryZa (harryData)

//Global scope variable
let results = document.getElementById("results"); //screen that shows results made with functions

function viewCardAndModal (harryData) {
  let cardTemplate = "";
  for (let i = 0; i < harryData.length; i++) {
    cardTemplate  += `<div class = "harryCards">
    <img class="harry-image" src= ${harryData[i].image}>
    <h3 class= "harry-names" >${harryData[i].name}</h3>
    <button class="button" id="modalBtn-${i}" style = "width:32px;height:32px">
    <img src="img/btn_feather.svg"/></button>
    </div>`
    results.innerHTML = cardTemplate
  }}

function viewAllHarry (harryData) {
  let cardTemplate = "";
  for (let i = 0; i < harryData.length; i++) {
    cardTemplate  += `<div class = "harryCards">
    <img class="harry-image" src= ${harryData[i].image}>
    <h3 class= "harry-names" >${harryData[i].name}</h3>
    </div>`
    results.innerHTML = cardTemplate
  }}

const selectElement = document.querySelector(".dropdown-select");
selectElement.addEventListener("change",(e) => {
  const resultado =`${e.target.value}`;

  if  (resultado === "A-Z"){
    viewAllHarry(orderedDataAz);
  }
  else if (resultado === "Z-A"){
    viewAllHarry(orderedDataZa);
  }

});

//How the page looks when you enter it
document.getElementById("left-logo").style.visibility= "hidden";
document.getElementById("selector").style.display= "none";

const footer = document.createElement("P");
footer.setAttribute("class", "footer")
footer.innerText = `Data Lovers  |  por Nayareth Valdivia & Ivana Rivera para Laboratoria SCL 2020 ©`;
document.getElementById("pantalla-inicio").appendChild(footer);

//Todos
document.getElementById("link-todos").addEventListener("click", ()=>{
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("left-logo").style.visibility = "visible";
  document.getElementById("selector").style.display= "block";

  viewCardAndModal(harryData);
  modal()
})

//Filter by Houses
//Gryffindor
document.getElementById("gry").addEventListener("click", ()=>{
  while(results.firstChild){
  results.removeChild(results.firstChild);
  } //this clears the screen and make space for new cards
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";
    document.getElementById("selector").style.display= "none"; //solo funciona si se hace todos y dp gryff

    let houseGryffindor = seleccionadoG;
    for (let i=0; i <houseGryffindor.length; i++){
        results.innerHTML +=
        `<div class = "harryCards">
         <img class="harry-image" src= ${houseGryffindor[i].image}>
         <h3 class= "harry-names" > ${houseGryffindor[i].name}</h3>
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
      <h3 class= "harry-names" >${criaturas[i].name}</h3>
            </div>`
    }
  });


//Modal function
  function modal(){
      let modal = document.getElementById("harryModal");
      let modalContent = document.getElementById("modal-content");
      let buttons = document.getElementsByClassName("button");
      modal.style.display="none";
      for(let i= 0; i<buttons.length; i++){
        let triggers = buttons[i];
        triggers.addEventListener('click', ()=>{
          modal.style.display = "block";

          modalContent.innerHTML +=
          `<article>
          <div class="modal-photo">
              <img src="${harryData[i].image}" class="m-photo">
          </div>
          <div class="modal-desc">
            <small class="m-dob">Nació el ${harryData[i].dateOfBirth}</small> <!-- dob -->
            <h1 class="m-name">${harryData[i].name}</h1> <!-- name -->
            <div class="modal-info">
            <p class="m-title">género</p> <!-- gender -->
            <p class="m-element">${harryData[i].gender}</p>
            <p class="m-title">especie</p> <!-- species -->
            <p class="m-element">${harryData[i].species}</p>
            <p class="m-title">casa</p> <!-- house -->
            <p class="m-element">${harryData[i].house}</p>
            <p class="m-title">linaje</p> <!-- ancestry -->
            <p class="m-element">${harryData[i].ancestry}</p>
            <p class="m-title">patronus</p> <!-- patronus -->
            <p class="m-element">${harryData[i].patronus}</p>
            <p class="m-title">varita</p> <!-- wand -->
            <p class="m-element">${harryData[i].wand.wood}, ${harryData[i].wand.core}, ${harryData[i].wand.length}</p>
            </div>
          </div>
          <span class="close">&times;</span>
        </article>`;


        let span = document.getElementsByClassName("close")[0];
        span.addEventListener('click', ()=>{
          modal.style.display = "none";
          modalContent.innerHTML="";
        });

        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
            modalContent.innerHTML="";
          }};
      })}
    }

