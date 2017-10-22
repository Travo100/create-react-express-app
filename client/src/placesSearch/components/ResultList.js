import React, { Component } from 'react';

// component for rendering a place
import ResultItemContainer from '../containers/ResultItemContainer';

// Returns a ResultItemContainer component
const createResultItemContainer = (place) => {
  return (
    <ResultItemContainer key={place.placeId} place={place} />
  );
}

const ResultList = ({ places }) => {
  return (
    <ul style={{ textAlign: 'left' }}>
      {places ? places.map(createResultItemContainer) : ''}
    </ul>
  );
};
export default ResultList;
