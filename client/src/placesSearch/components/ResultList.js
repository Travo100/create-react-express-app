import React, { Component } from 'react';

// component for rendering a place
import ResultItem from './ResultItem/ResultItem';
import Button from './ResultItem/Button';


// Returns a ResultItem component
function createResultItem(place) {
  return (
    <ResultItem key={place.placeId} {...place}>
      <Button>View</Button>
      <Button>Pin</Button>
    </ResultItem>
  );
}

class ResultList extends Component {
  render() {
    const { places } = this.props;
    return (
      <ul style={{ textAlign: 'left' }}>
        {places ? places.map(createResultItem) : ''}
      </ul>
    );
  }
}
export default ResultList;
