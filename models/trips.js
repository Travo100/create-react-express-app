const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const tripSchema = new Schema( {
    'tripName': {
        'type': String,
        'required': true,
        'unique': true
    },
    'placeIds': {
        'type': Array,
        'required': true,
        'maxLength': 12
    },
    'createdAt': {
        'type': Date,
        'default': Date.now
    },
    'lastUpdated': {
        'type': Date,
        'default': Date.now
    }
} );

const Trip = mongoose.model( 'Trip', userSchema );

module.exports = Trip;

// owner id will automatically get created by mongoose? 