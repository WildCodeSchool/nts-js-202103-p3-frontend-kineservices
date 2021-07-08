/* eslint-disable react/prop-types */
import React from 'react';
import './SearchContent.css';

function SearchContent(props) {
  const { setSearchValue, searchValue } = props;
  return (
    <div>
      <input
        className="search-input"
        value={searchValue}
        type="text"
        placeholder="Entrez un mot clef..."
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchContent;
