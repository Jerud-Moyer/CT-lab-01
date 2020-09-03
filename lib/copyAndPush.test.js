const { copyAndPush } = require('./copyAndPush');

describe('copyAndPushFunction', () =>  {
  it('returns a new array with all original items and a new item pushed at the end', () => {
    const arr = [1, 2, 3, 4];
    const newArr = copyAndPush(arr, 5);

    expect(newArr)
      .toEqual([1, 2, 3, 4, 5]);
    expect(arr)
      .toEqual([1, 2, 3, 4]);
  });
});
