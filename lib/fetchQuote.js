const fetch = require('node-fetch');

const url = 'http://futuramaapi.herokuapp.com/api/quotes/1';

const fetchQuote = async() => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json[0];

  } catch(error) {
    console.log(error);
  }
};

module.exports = { fetchQuote };
