


const filterData = (datos, condition) => {
  let newData = datos.filter((dato) => dato.house === condition);
  return newData;
};






export default filterData;
