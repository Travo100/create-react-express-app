/* 
    Hi Jasmine,

    File looks good except for one issue. I recommend logging db to see what it is. Right now the server is
    crashing becuase db.Trip is undefined. Use postman to send a request to the server. This bug is affecting
    both the create and the findAll methods. 
    
    -John

    Postman Request:
        POST Url: http://localhost:3001/api/trips/new
        Post Body (raw JSON):
            {
                "tripName": "Continental Culture",
                "placeIds": [],
                "ownerId": "test1"
            }
*/
const db = require( '../models/trips' );

// Defining methods for the tripsController
module.exports = {
    'create': function ( req, res ) {
        // Inspect db and db.trip are by using the console. Send a request with postman to run the code.
        // console.log( '-------------------------------------------------------------\ndb:\n',
        //     db,
        //     '\n-------------------------------------------------------------'
        // );
        // console.log( '-------------------------------------------------------------\ndb.Trip:\n',
        //     db.Trip,
        //     '\n-------------------------------------------------------------'
        // );
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
