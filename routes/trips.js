const bodyParser = require( 'body-parser' );
const router = require( 'express' ).Router();
const tripsController = require( '../controllers/tripsController' );

// Route matches with "api/trips/new"
router
    .use( '/new', bodyParser.json() )
    .route( '/new' )
    .post( tripsController.create );

// Route matches with "api/trips/"
router
    .route( '/' )
    .get( tripsController.findAll );

module.exports = router;
