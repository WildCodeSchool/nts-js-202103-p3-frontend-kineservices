/* eslint-disable react/prop-types */
import React from 'react';

function SearchContent(props) {
  const { setSearchValue, searchValue } = props;
  return (
    <div>
      <input
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
