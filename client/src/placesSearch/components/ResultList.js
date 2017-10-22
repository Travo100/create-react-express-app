import React from 'react';

const ResultList = (props) => (
  <ul>{props.places.map(place => <li><pre>{JSON.stringify(place, null, 2)}</pre></li>)}</ul>
);
export default ResultList;
