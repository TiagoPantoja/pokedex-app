import React, { useState } from 'react';
import './SearchForm.css';

interface SearchFormProps {
    onSearch: (nameOrId: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        onSearch(searchInput);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Pokemon name or ID"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                />
            <button onClick={handleSearch}>Search</button>
        </div>
        );
};

export default SearchForm;

