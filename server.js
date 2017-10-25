const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

// Configure Express Sever
const PORT = process.env.PORT || 3001;
const app = express();
app.use( logger( 'dev' ) );

// Connect mongoose to database
mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/wanderSpark_dev',
    { 'useMongoClient': true }
);

// Setup routing
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}
app.use( '/', routes );

app.listen( PORT, () => {
    console.log( `🌎 ==> Server now on port ${PORT}!` );
} );
