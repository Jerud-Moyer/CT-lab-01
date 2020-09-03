const copyAndPush = (arr, num) => {

  const newArr = arr.slice();
  newArr.push(num);
  return newArr;
};


module.exports = {
  copyAndPush
};
