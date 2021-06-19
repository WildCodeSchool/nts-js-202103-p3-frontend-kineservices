import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentationItem from './DocumentationItem';

const DocumentationList = () => {
  const [documentations, setDocumentations] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/documentation`)
      .then((response) => {
        setDocumentations(response.data);
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
};

export default DocumentationList;
