import React from 'react';

// component for rendering a place
import ResultItem from './ResultItem';

const ResultList = (props) => (
  <ul style={{ textAlign: 'left' }}>
    {
      // render each place in props.places or render an empty list
      props.places ?
        props.places.map(place => <ResultItem {...place}/>)
        : ""
    }
  </ul>
);
export default ResultList;
