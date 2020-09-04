const { fetchQuote } = require('./fetchQuote');

describe('fetchQuote function', () => {
  it('returns a single quote from Futurama api', async() => {

    const quote = await fetchQuote();
    const expected = {
      character: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String)
    };


    expect(quote)
      .toEqual(expected);
  });
});
