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
    console.log('params:', params);
    return axios.get(textSearchUrl, { params })
      .then((response) => {
        console.log(response.request);
        res.json(response.data);
      })
      .catch(error => res.json(error));
  },
};
