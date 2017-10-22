import React from 'react';

const ResultList = (props) => (
  <ul>
    {
      // render a list item with pretty printed json for each item. use place_id property
      // as the key for each li
      props.places ?
      props.places.map(place => (
        <li key={place.place_id}>
          <pre>{JSON.stringify(place, null, 2)}</pre>
        </li>
      ))
      : ""
    }
  </ul>
);
export default ResultList;
