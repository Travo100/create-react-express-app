const routes = require('express').Router();
const places = require('./places');

routes.get('/', places);

module.exports = routes;
