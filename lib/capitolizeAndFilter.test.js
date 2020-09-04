const { capitolizeAndFilter } = require('./capitolizeAndFilter');

describe('capitolizeAndFilter', () => {
  it('takes an array of strings capitolize all strings and filter put any that start with f', () => {
    const arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const newArr = capitolizeAndFilter(arr);


    expect(newArr)
      .toEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday']);

  });
});

