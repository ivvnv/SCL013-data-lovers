import harryData from './data/potter/potter.js';


//When press <todos> on side menu

document.getElementById("left-logo").style.visibility = "hidden";

document.getElementById("link-todos").addEventListener("click", enterTodos);

function enterTodos() {
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("left-logo").style.visibility = "visible";

// card
for (let i=0; i< harryData.length; i++ ) {

  let harryCard= document.createElement("div"); 
  harryCard.className="harryCards";
  harryCard.id="harryCards";

  let harryName= document.createElement("h3");
  harryName.textContent=harryData[i].name;

  let harryimage= document.createElement("img");
  harryimage.src = harryData[i].image;

  let harrySpecies= document.createElement("p");
   harrySpecies.textContent= harryData[i].species;
   harrySpecies.className = "species";

  let harryAncestry = document.createElement("p");
   harryAncestry.textContent = harryData[i].ancestry;

   harryCard.appendChild(harryName);
   harryCard.appendChild(harryimage);

   harryCard.appendChild(harrySpecies);
   harryCard.appendChild(harryAncestry);

<<<<<<< HEAD
   document.getElementById("school").appendChild(harryCard).innerHTML;

    
  }
=======
   document.getElementById("results").appendChild(harryCard).innerHTML;

    
  }}
>>>>>>> c73f625ee8a31a51120201da7c6e24381daffe7a
