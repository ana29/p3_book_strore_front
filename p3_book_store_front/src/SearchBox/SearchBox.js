import React from 'react';

const SearchBox = ({searchField,searchChange }) => {
    return (
        <div>
            <input className='SearchBox'
                   type='search'
                   placeholder='search books'
                   onChange={searchChange}/>
        </div>
    );

};

export default SearchBox;
