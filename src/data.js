//export const filtrado = (data, propiedad, valor ) => {
 // return data.filter ((a) => (a[propiedad] === valor ));

//export const filterData = (data, condition) => {

 // console.log(data);
 // console.log(condition);
//}

//Filters by House
export const houseG = (harryData) => {
  let houseGryffindor = harryData.filter ( data =>
    data.house === "Gryffindor");
    return houseGryffindor;
  }

export const houseS = (harryData) => {
  let houseSlytherin = harryData.filter ( data =>
    data.house === "Slytherin");
    return houseSlytherin;
  }

export const houseR = (harryData) => {
  let houseRavenclaw = harryData.filter ( data =>
    data.house === "Ravenclaw");
    return houseRavenclaw;
  }
  
export const houseH = (harryData) => {
  let houseHufflepuff = harryData.filter ( data =>
    data.house === "Hufflepuff");
    return houseHufflepuff;
  }


//Filters by Ancestry
export const san = (harryData) => {
  let pureblood= harryData.filter (data =>
    data.ancestry === "pure-blood");
    return pureblood;
  }

export const mes = (harryData) => {
  let mes = harryData.filter (data=>
    data.ancestry === "half-blood");
    return mes;
  }     

export const hij = (harryData) => {
  let muggleborn = harryData.filter ( data =>
    data.ancestry === "muggleborn");
    return muggleborn;
  }    

export const squi = (harryData) => {
  let squib = harryData.filter (data =>
    data.ancestry === "squib");
    return squib;
  } 
   
//Filters by Role at Hogwarts     
export const est  = (harryData) => {
  let students  = harryData.filter (data =>
    data.hogwartsStudent  ===  true);
    return students;
  }

export const sta  = (harryData) => {
  let staff  = harryData.filter (data =>
    data.hogwartsStaff  ===  true);
    return staff;
   }

//Filter by other species (than human)
export const otras = (harryData) => {
  let criaturas = harryData.filter (data =>
  data.species ===  "cat" || data.species === "half-giant" || data.species === "werewolf");
    return criaturas ;
  }     


//Sort characters names from A to Z
export const orderharryAz = (harryData)=>{
  const newDataArray = [];
  for (let i = 0; i < harryData.length; i++) {
    newDataArray.push(harryData[i]);
  }
  newDataArray.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    else if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return newDataArray;
};

//Sort characters names from Z to A
export const orderharryZa = (harryData)=>{
  const newDataArray = [];
  for (let i = 0; i < harryData.length; i ++) {
    newDataArray.push(harryData[i]);
  }
  newDataArray.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    else if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return newDataArray;
};