import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentationItem from './DocumentationItem';
import SearchContent from '../commons/SearchContent';
import './DocumentationList.css';

const DocumentationList = () => {
  const [documentations, setDocumentations] = useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/documentation`)
      .then((response) => {
        setDocumentations(response.data);
      }, []);
  });
  return (
    <>
      <h1 className="alldoc">Toutes les documentations</h1>
      <div className="search-engine">
        <h2>Rechercher une documentation</h2>
        <SearchContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="documentation-results">
          {documentations
            .filter(
              (documentation) =>
                documentation.title.toLowerCase().includes(searchValue) ||
                documentation.description.toLowerCase().includes(searchValue)
            )
            .map((documentation) => (
              <p className="doc-card">
                <DocumentationItem
                  file={documentation.file}
                  title={documentation.title}
                  description={documentation.description}
                  category={documentation.name}
                  price={documentation.price}
                  key={documentation.id}
                />
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default DocumentationList;
