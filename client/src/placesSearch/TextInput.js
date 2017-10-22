import React from 'react';

const TextInput = (props) => (
  <input type="text" value={props.searchValue} onChange={props.onChange} />
);
export default TextInput;
