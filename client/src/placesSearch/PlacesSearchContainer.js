// Top Level Container for the Google Places Search

// This container component handles the behavior of the google search.

// TODO Displays a text input  and submit button allowing a user to search for points of interest from the
// google places api.

// When a user types text in the input box, the searchValue state should be updated.

// TODO When a user clicks the submit button, the /places/search api is sent a request for search results.
// The results of this request should be displayed to the user.

// DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';

// COMPONENTS
import TextInput from './TextInput';

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
    this.setState({ searchValue: event.target.value });
  }

  // TODO When a user clicks the submit button, the /places/search api is sent a request for search results.
  // The results of this request should be displayed to the user.


  render() {
    return (
      <TextInput searchValue={this.state.searchValue} onChange={e => this.handleTextInputChange(e)} />
    );
  }
}

export default PlacesSearchContainer;
