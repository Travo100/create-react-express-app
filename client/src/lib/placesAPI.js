import axios from 'axios';

// Request places from server.
function textSearch ( queryString ) {
    return axios.get( `/places/search/${queryString}` )
        .then( ( result ) => {
            if ( result.statusText === 'OK' ) {
                return result.data;
            }
            // TODO add error handling
            console.log( result.statusText );
            return [];
        })

        // TODO add error handling
        .catch( ( error ) => {
            console.log(error);
            return [];
        });
}

export default { textSearch };
