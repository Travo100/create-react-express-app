import React, { Component } from 'react';

// component for rendering a place
import ResultItem from '../components/ResultItem/ResultItem';
import Button from '../components/ResultItem/Button';

class ResultItemContainer extends Component {
  handleViewClick(e) {
    e.preventDefault();
    window.alert(`View button clicked!\n${this.props.title}\n${this.props.key}`);
  }
  render() {
    const { place } = this.props;
    return (
      <ResultItem title={place.title} address={place.address} handleViewClick={e => this.handleViewClick(e)}>
        <Button>View</Button>
        <Button>Pin</Button>
      </ResultItem>
    );
  }
}
export default ResultItemContainer;
