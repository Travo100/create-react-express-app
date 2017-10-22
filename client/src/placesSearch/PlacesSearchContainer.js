// Top Level Container for the Google Places Search

// This container component handles the behavior of the google search.

// TODO When a user clicks the submit button, the /places/search api is sent a request for search results.
// The results of this request should be displayed to the user.

// DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import PlaceData from '../lib/PlaceData'; // PlaceData class

// COMPONENTS
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList.js';

class PlacesSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // use hardcoded initial searchValue for development
      searchValue: "art galleries in Paris, France"
    };
  }

  // Maps an object from the google search result to 

  // When a user types text in the input box, the searchValue state should be updated.
  handleTextInputChange(event) {
    this.setState({
      searchValue: event.target.value,
      places: [],
    });
  }

  // TODO When a user clicks the submit button, the /places/search api is sent a request for search results.
  // The results of this request should be displayed to the user.
  handleSubmit(event) {
    event.preventDefault();
    // window.alert(`Search for ${this.state.searchValue}`);
    this.loadPlaces(this.state.searchValue);
  }

  // Request places from server.
  loadPlaces(queryString) {
    return axios.get(`/places/search/${queryString}`)
      .then((result) => {
        if (result.statusText === 'OK') {
          // get an array of PlaceData objects from the results
          const places = result.data.map(value => new PlaceData(value));
          return this.setState({ places: places });
        }
        return console.log(result);
      })
      // TODO add error handling
      .catch(console.log);
  }

  render() {
    return (
      <div>
        {/* notes to render for development */}
        <p>Search is hard coded for testing. Will not work if you use search terms other than the default value when the page loads.</p>
        <SearchForm
          searchValue={this.state.searchValue}
          handleSubmit={e => this.handleSubmit(e)}
          handleSearchChange={e => this.handleTextInputChange(e)}
        />
        <ResultList places={this.state.places}/>
      </div>
    );
  }
}

export default PlacesSearchContainer;
