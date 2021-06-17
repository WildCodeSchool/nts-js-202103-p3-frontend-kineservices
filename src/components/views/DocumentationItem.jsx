/* eslint-disable react/prop-types */
import React from 'react';

function DocumentationItem({ title, description, category, price }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
}

export default DocumentationItem;
