const path = require( 'path' );
const router = require( 'express' ).Router();
const places = require( './places' );
const users = require( './users' );
const trips = require( './trips' );

// API Routes
router.use( '/api/users', users );
router.use( '/api/trips', trips );
router.use( '/places', places );
// If no API routes are hit, send the React app
router.use( ( req, res ) => {
    if ( process.env.NODE_ENV === 'production' ) {
        res.sendFile( path.join( __dirname, '../client/build/index.html' ) );
    } else {
        res.sendFile( path.join( __dirname, '../client/public/index.html' ) );
    }
} );

module.exports = router;
