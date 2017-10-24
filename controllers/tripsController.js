const db = require( '../models/trips' );

// Defining methods for the tripsController
module.exports = {
    'create': function ( req, res ) {
        db.Trip
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    'findAll': function ( req, res ) {
        db.Trip
            .find( req.query )
            .sort( { 'date': -1 } )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    }
}
;
