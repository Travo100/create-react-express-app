// This component is a presentatial component rendering one result from the places search.

import React from 'react';

// COMPONENTS
import Button from './Button';

const ResultItem = (props) => (
  <li>
    <p>{props.title}</p>
    <p>{props.address}</p>
    <Button handleClick={props.handleViewClick}>View</Button>
    <Button handleClick={props.handlePinClick}>Pin</Button>
  </li>
);
export default ResultItem;
