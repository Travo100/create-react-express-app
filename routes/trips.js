const bodyParser = require( 'body-parser' );
const router = require( 'express' ).Router();
const tripsController = require( '../controllers/tripsController' );

router.use( '/*', bodyParser.json() );

// Route matches with "api/trips/new"
router
    .route( '/new' )
    .post( tripsController.create );

// Route matches with "api/trips/"
router
    .route( '/' )
    .get( tripsController.findAll );

// Route matches with "api/trips/:id"
router
    .route( '/:id' )
    .put( tripsController.update )
    .delete( tripsController.remove );

module.exports = router;
