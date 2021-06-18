import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentationItem from './DocumentationItem';

function DocumentationList() {
  const [documentations, setDocumentations] = useState([]);
  useEffect(function () {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/documentation`)
      .then((response) => {
        setDocumentations(response.data);
        console.log(documentations);
      });
  }, []);
  return (
    <div>
      {documentations.map((documentation) => {
        return (
          <DocumentationItem
            title={documentation.title}
            description={documentation.description}
            category={documentation.category_id}
            price={documentation.price}
            key={documentation.id}
          />
        );
      })}
    </div>
  );
}

export default DocumentationList;
