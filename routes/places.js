const routes = require('express').Router();
const bodyParser = require('body-parser');
const { getPlaceDetails, textSearch } = require('../controllers/placesAPI');

routes.get('/search/:query', textSearch);
routes.use('/details', bodyParser.json())
  .post('/details', getPlaceDetails);
module.exports = routes;
