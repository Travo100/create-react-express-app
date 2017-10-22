// This component is a presentatial component rendering one result from the places search.

import React from 'react';

const ResultItem = (props) => (
  <li key={props.placeId}>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </li>
);
export default ResultItem;
