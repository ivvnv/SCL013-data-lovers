//export const filtrado = (data, propiedad, valor ) => {
 // return data.filter ((a) => (a[propiedad] === valor ));

//export const filterData = (data, condition) => {

 // console.log(data);
 // console.log(condition);
//}


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


  export const sortArrAtoZ = (harryData) => {
    let sortAtoZ = harryData.sort ((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()
      ) return -1;
      else if (a.name.toLowerCase() > b.name.toLowerCase()
      ) return 1;
      return 0;
      
    })
  } //ME SALE EN LA CONSOLA EL SORT PERO NO EN EL DOCUMENTO
  //por poblemas con sortAtoZ
  

  export const sortArrZtoA = (harryData) => {
    let sortZtoA = harryData.sort ((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()
      ) return -1;
      else if (a.name.toLowerCase() < b.name.toLowerCase()
      ) return 1;
      return 0;
      
    })
  }