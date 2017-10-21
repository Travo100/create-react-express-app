const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');


// Configure Express Sever
const PORT = process.env.PORT || 3001;
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

// Connect mongoose to database
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/wanderSpark_dev',
  { useMongoClient: true }
);

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// TEST ROUTES
// ===============================================
const Test = require('./models/test'); // model for testing only (TODO: REMOVE)

app.get('/data', (req, res) => {
  Test.find((err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.post('/new', (req, res) => {
  const test = new Test(req.body);
  test.save(req.body, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});
// End Test Routes
// ==============================================

// Serve up react client
app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(`${__dirname}./client/build/index.html`);
  } else {
    res.sendFile(`${__dirname}./client/public/index.html`);
  }
});


app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
