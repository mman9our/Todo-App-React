import React, { useState } from 'react';
import './taskstable.css';

function SearchTodos({ onSearch }) {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        onSearch(value);
};

    return (
    <div className="search-bar">
        <span className="material-symbols-sharp">search</span>
        <input
            id="searchbox"
            type="search"
            placeholder="Search for the task"
            value={searchValue}
            onChange={handleInputChange}
            />
    </div>
);
}

export default SearchTodos;
