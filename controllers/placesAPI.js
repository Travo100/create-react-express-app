const axios = require('axios');

// Controller for the google places api
const key = 'AIzaSyAHO4q-p7lzrf6zVUXcifYSEDwAz4p5Dds';
const textSearchUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

module.exports = {
  textSearch: (req, res) => {
    const params = {
      query: req.params.query,
      key,
    };

    return axios.get(textSearchUrl, { params })
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
      .catch(error => res.json(error));
  },
};
