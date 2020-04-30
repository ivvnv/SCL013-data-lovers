//export const filtrado = (data, propiedad, valor ) => {
 // return data.filter ((a) => (a[propiedad] === valor ));

//export const filterData = (data, condition) => {

 // console.log(data);
 // console.log(condition);
//}


const filterData = (datos, condition) => {
  let newData = datos.filter((dato) => dato.house === condition);
  return newData;
};






export default filterData;
