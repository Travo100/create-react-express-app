import React from 'react';

const TextInput = (props) => (
  <input type="text" value={props.searchValue} onChange={props.handleChange} />
);
export default TextInput;
