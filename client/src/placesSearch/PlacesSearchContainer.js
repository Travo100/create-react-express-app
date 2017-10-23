// Top Level Container for the Google Places Search
// This container component handles the behavior of the places search view.

// DEPENDENCIES
import React, { Component } from 'react';
import placesAPI from '../lib/placesAPI';
import PlaceData from '../lib/PlaceData'; // PlaceData class

// COMPONENTS
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList.js';

class PlacesSearchContainer extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            // use hardcoded initial searchValue for development
            'searchValue': 'art galleries in Paris, France'
        };
    }

    // When a user types text in the input box, the searchValue state should be updated.
    handleTextInputChange ( event ) {
        this.setState( {
            'searchValue': event.target.value,
            'places': []
        } );
    }

    // TODO When a user clicks the submit button, the /places/search api is sent a request for search results.
    // The results of this request should be displayed to the user.
    handleSubmit ( event ) {
        event.preventDefault();
        // window.alert(`Search for ${this.state.searchValue}`);
        this.loadPlaces( this.state.searchValue );
    }

    // Request places from server.
    loadPlaces ( queryString ) {
        return placesAPI.textSearch( queryString )
            .then( ( result ) => {
                // get an array of PlaceData objects from the results
                const places = result.map( value => new PlaceData( value ) );
                return this.setState( { 'places': places } );
            })
            // Unexpected error occured. Log it.
            .catch( console.log );
    }

    render () {
        return (
            <div>
                {/* notes to render for development */}
                <p>Search is hard coded for testing. Will not work if you use search terms other than the default value when the page loads.</p>
                <SearchForm
                    searchValue={this.state.searchValue}
                    handleSubmit={event => this.handleSubmit( event )}
                    handleSearchChange={event => this.handleTextInputChange( event )}
                />
                <ResultList places={this.state.places}/>
            </div>
        );
    }
}

export default PlacesSearchContainer;
