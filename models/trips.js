const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const tripSchema = new Schema( {
    'tripName': {
        'type': String,
        'required': true,
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
    },
    'ownerId': {
        'type': Number,
        'required': true,
        'unique': true
    }
} );

const Trip = mongoose.model( 'Trip', userSchema );

module.exports = Trip;