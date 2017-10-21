const routes = require('express').Router();
const { textSearch } = require('../controllers/placesAPI');

routes.get('/search/:query', textSearch);
module.exports = routes;
