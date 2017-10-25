const Trip = require( '../models/trips' );

// Defining methods for the tripsController
module.exports = {
    'create': function ( req, res ) {
        Trip
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    'findAll': function ( req, res ) {
        Trip
            .find( req.query )
            .sort( { 'date': -1 } )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    'update': function ( req, res ) {
        Trip
            .findOneAndUpdate( { '_id': req.params.id }, req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    'remove': function ( req, res ) {
        Trip
            .findById( { '_id': req.params.id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    }
}
;
