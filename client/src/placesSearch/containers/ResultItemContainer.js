import React, { Component } from 'react';

// component for rendering a place
import ResultItem from '../components/ResultItem/ResultItem';
import Button from '../components/ResultItem/Button';

class ResultItemContainer extends Component {
  
  handlePinClick(e, place) {
    e.preventDefault();
    window.alert(`Pin button clicked!\nplaceId = ${place.placeId}`);
  }
  handleViewClick(e, place) {
    e.preventDefault();
    window.alert(`View button clicked!\n${place.title}\n${place.placeId}`);
  }
  render() {
    const { place } = this.props;
    return (
      <ResultItem
        title={place.title}
        address={place.address}
        handleViewClick={e => this.handleViewClick(e, place)}
        handlePinClick={e => this.handlePinClick(e, place)}
      />
    );
  }
}
export default ResultItemContainer;
