import React from 'react';

// COMPONENTS
import TextInput from './TextInput';
import SubmitBtn from './SubmitBtn';

const SearchForm = (props) => (
  <form>
      <TextInput searchValue={props.searchValue} handleChange={props.handleSearchChange} />
      <SubmitBtn handleClick={props.handleSubmit} />
  </form>
);
export default SearchForm;
