const axios = require('axios');

// set to true to use example files for google api instead of sending requests
// (use for front end development)
const USE_MOCK = true;
const mocks = require('./placesAPIexamples');

// Controller for the google places api
const key = 'AIzaSyAHO4q-p7lzrf6zVUXcifYSEDwAz4p5Dds';
const placesHostUrl = 'https://maps.googleapis.com/maps/api/place/';

// Returns an axios promise for a request sent to the google places
// api at the details endpoint
function getDetailsById(placeid) {
  const detailsUrl = `${placesHostUrl}details/json`;
  const params = { key, placeid };

  // returns axios promise
  return axios.get(detailsUrl, { params });
}

// Sends the details from google places api for a specific
// google placeid. Expects req.body to be json.
// View the response format here: https://developers.google.com/places/web-service/details#PlaceDetailsResponses
function getPlaceDetails(req, res) {

  // use mockups for google api request
  if (USE_MOCK) {
    return mocks.details(res, req.body.placeid);
  }
  
  getDetailsById(req.body.placeid)
    .then((response) => {
      const details = response.data.result;
      const { status } = response.data;


      // return details if google status message is 'OK'
      if (status === 'OK') return res.json(details);

      // return google status for all other responses from
      // the google api
      return res.json({ status });
    })
    .catch(error => res.status(400).json(error));
}

// Sends an array of up to five results from a text search
// on the google places api.
// View the response format here: https://developers.google.com/places/web-service/search#PlaceSearchResponses
function textSearch(req, res) {
  const textSearchUrl = `${placesHostUrl}textsearch/json`;
  const params = {
    query: req.params.query,
    key,
  };

  // use mockups for google api requests
  if (USE_MOCK) {
    return mocks.textSearch(res, params.query);
  }

  axios.get(textSearchUrl, { params })
    .then((response) => {
      const places = response.data.results || [];
      const { status } = response.data;

      // send array of up to 5 results from google places api
      if (status === 'OK' || status === 'ZERO_RESULTS ') {
        if (places.length < 5) return res.json(places);
        return res.json(places.slice(0, 5));
      }

      // send google status code
      return res.json({ status });
    })
    .catch(error => res.status.json(error));
}

module.exports = { getPlaceDetails, textSearch };
