const { getName } = require('./getName');

describe('getName function', () => {
  it('return the name property of a object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name)
      .toEqual('spot');


  });

});

