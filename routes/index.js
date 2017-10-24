const path = require( 'path' );
const router = require( 'express' ).Router();
const places = require( './places' );
const trips = require( './trips' );

// const apiRoutes = require("./api");
// API Routes
// router.use("/api", apiRoutes);
// If no API routes are hit, send the React app
router.use( '/places', places );
router.use( ( req, res ) => {
    if ( process.env.NODE_ENV === 'production' ) {
        res.sendFile( path.join( __dirname, '../client/build/index.html' ) );
    } else {
        res.sendFile( path.join( __dirname, '../client/public/index.html' ) );
    }
} );

router.use( '/api/trips', trips );
router.use( function ( req, res ) {
    res.sendFile( path.join( __dirname, '../client/build/index.html' ) );
} );

module.exports = router;
