const bodyParser = require( 'body-parser' );
const router = require( 'express' ).Router();
const tripsController = require( '../controllers/tripsController' );

router.use( '/*', bodyParser.json() );

// Route matches with "api/trips/new"
// To create a new trip
router
    .route( '/new' )
    .post( tripsController.create );

// Route matches with "api/trips/"
// To fetch all trips from the database
router
    .route( '/' )
    .get( tripsController.findAll );

// Route matches with "api/trips/:id"
// To update and delete specific trips
router
    .route( '/:id' )
    .put( tripsController.update )
    .delete( tripsController.remove );

module.exports = router;
