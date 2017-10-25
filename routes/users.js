const bodyParser = require( 'body-parser' );
const router = require( 'express' ).Router();
const usersController = require( '../controllers/usersController' );

router.use( '/*', bodyParser.json() );

// Route matches with "api/users"
router
    .route( '/' )
    .post( usersController.create );

// Route matches with "api/users/login"
router
    .route( '/login' )
    .post( usersController.findOne );

// Route matches with "api/users/:id"
router
    .route( '/:id' )
    .put( usersController.update )
    .delete( usersController.remove );

module.exports = router;
