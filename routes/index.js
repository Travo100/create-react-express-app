const path = require('path');
const express = require('express');
// const apiRoutes = require('./api');

// API Routes
// router.use('/users', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
const router = express.Router();


// TEST ROUTES
// ===============================================
const Test = require('../models/test'); // model for testing only (TODO: REMOVE)

router.get('/data', (req, res) => {
  Test.find((err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

router.post('/new', (req, res) => {
  const test = new Test(req.body);
  test.save(req.body, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});
// End Test Routes
// ==============================================

// Serve up react client
router.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(`${__dirname}./client/build/index.html`);
  } else {
    res.sendFile(`${__dirname}./client/public/index.html`);
  }
});

module.exports = router;
