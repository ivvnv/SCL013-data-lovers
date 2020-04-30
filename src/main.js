import harryData from './data/potter/potter.js';


// card
for (let i=0; i< harryData.length; i++ ) {

  let harryCard= document.createElement("div"); 
  harryCard.className="harryCards";
  harryCard.id="harryCards";

  let harryName= document.createElement("h3");
  harryName.textContent=harryData[i].name;

  let harryimage= document.createElement("img");
  Image.src = harryData[i].image;

  let harrySpecies= document.createElement("p");
   harrySpecies.textContent= harryData[i].species;

  let harryAncestry = document.createElement ("p");
   harryAncestry.textContent = harryData [i].ancestry;

   harryCard.appendChild(harryName);
   harryCard.appendChild(harryimage);

   harryCard.appendChild(harrySpecies);
   harryCard.appendChild(harryAncestry);

   document.getElementById("school").appendChild(harryCard).innerHTML;

    
  }