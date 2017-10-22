function textSearch(expressResponse, query) {
  console.log(query);
  if (query === 'art galleries in Paris, France') {
    return expressResponse.json(require('./search/example1.json'));
  }

  // no matching examples, mimick behavior for a 'ZERO_RESULTS' status from google api
  expressResponse.json([]);
}

module.exports = { textSearch };
