import harryData from './data/potter/potter.js';


//When press <todos> on side menu

document.getElementById("left-logo").style.visibility = "hidden";

document.getElementById("link-todos").addEventListener("click", enterTodos);

function enterTodos() {
  document.getElementById("pantalla-inicio").style.display = "none";
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