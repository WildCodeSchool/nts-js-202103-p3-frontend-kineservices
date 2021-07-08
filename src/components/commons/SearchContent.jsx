/* eslint-disable react/prop-types */
import React from 'react';

function SearchContent(props) {
  const { setSearchValue, searchValue } = props;
  return (
    <div>
      <input
        style={{ height: '35px', width: '20%' }}
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
