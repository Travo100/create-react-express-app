const detailsEx1 = require( './details/example1.json' );
const searchEx1 = require( './search/example1.json' );

function details ( expressResponse, locationId ) {
    console.log( locationId );
    if ( locationId === 'ChIJO6ypIwBu5kcRKlGBjcGwc6Q' ) {
        return expressResponse.json( detailsEx1 );
    }
    expressResponse.json( { 'status': 'ZERO_RESULTS' } );
}

function textSearch ( expressResponse, query ) {
    console.log( query );
    if ( query === 'art galleries in Paris, France' ) {
        return expressResponse.json( searchEx1 );
    }

    // no matching examples, mimick behavior for a 'ZERO_RESULTS' status from google api
    expressResponse.json( [] );
}

module.exports = { details, textSearch };
