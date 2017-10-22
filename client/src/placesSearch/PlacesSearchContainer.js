// Top Level Container for the Google Places Search

// This container component handles the behavior of the google search.

// TODO When a user clicks the submit button, the /places/search api is sent a request for search results.
// The results of this request should be displayed to the user.

// DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';

// COMPONENTS
import SearchForm from './SearchForm';

class PlacesSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // use hardcoded initial searchValue for development
      searchValue: "art galleries in Paris, France"
    };
  }

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

  loadPlaces(queryString) {
    return axios.get(`/places/search/${queryString}`)
      .then(console.log);    
  }


  render() {
    return (
      <SearchForm
        searchValue={this.state.searchValue}
        handleSubmit={e => this.handleSubmit(e)}
        handleSearchChange={e => this.handleTextInputChange(e)}
      />
    );
  }
}

export default PlacesSearchContainer;
