import React from 'react';

// COMPONENTS
import TextInput from './TextInput';
import SubmitBtn from './SubmitBtn';

export default function SearchForm (props) {
    return (
        <form>
            <TextInput searchValue={props.searchValue} handleChange={props.handleSearchChange} />
            <SubmitBtn handleClick={props.handleSubmit} />
        </form>
    );
}
