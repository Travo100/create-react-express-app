const bodyParser = require( 'body-parser' );
const router = require( 'express' ).Router();
const usersController = require( '../controllers/usersController' );

router.use( '/*', bodyParser.json() );

// Route matches with "api/user"
router
    .route( '/user' )
    .post( usersController.create );

// Route matches with "api/trips/login"
router
    .route( '/:id' )
    .put( usersController.update )
    .delete( usersController.remove );

module.exports = router;
