const path = require('path');
const express = require('express');
const apiRoutes = require('./api');

const router = express.Router();

// API Routes TODO FIX API ROUTING!!!
router.use('/api', apiRoutes);


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
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  } else {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  }
});

module.exports = router;
