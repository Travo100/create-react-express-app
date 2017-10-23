import axios from 'axios';

// Request place details. Returns promise for place details object from googlePlaces API.
function getDetails ( placeid ) {
    return axios.post( '/places/details', { placeid })
        .then( ( result ) => {
            if ( result.statusText === 'OK' ) {
                return result.data;
            }
            // TODO add error handling
            console.log( result.statusText );
            return null;
        })
        .catch( ( error ) => {
            console.log( error );
            return [];
        });
}

// Request places from server. Returns promise for array of results from the googlePlaces search API.
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
            console.log( error );
            return [];
        });
}

export default { getDetails, textSearch };
