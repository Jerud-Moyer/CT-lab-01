const capitolizeAndFilter = (arr) => {
  
  const newArr = arr.map((index) => index.charAt(0).toUpperCase() + index.slice(1));
  return newArr.filter((item) => item.charAt(0) != 'F');
};

module.exports = {
  capitolizeAndFilter
};
