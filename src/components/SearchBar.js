import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');


    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onSubmit = (event) => {

        // Disable Default submit operation
        event.preventDefault();

        // Activate parent (App) onSubmit method
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );

};

export default SearchBar;

