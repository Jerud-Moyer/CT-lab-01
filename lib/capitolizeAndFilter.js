const capitolizeAndFilter = (arr) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.filter((item) => item.charAt(0) != 'F');
};

module.exports = {
  capitolizeAndFilter
};
