const path = require( 'path' );
const router = require( 'express' ).Router();
const places = require( './places' );
const trips = require( './trips' );

// API Routes
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
// any routes mounted below this line are unreachable
// ==================================================================================

// REMOVE BEFORE MERGING WITH THE DEV BRANCH
// ==================================================================================
// api/trips route needs to be mounted BEFORE the catch all route for the React client
// router.use( '/api/trips', trips );
// router.use( function ( req, res ) {
//     res.sendFile( path.join( __dirname, '../client/build/index.html' ) );
// } );
// ==================================================================================

module.exports = router;
