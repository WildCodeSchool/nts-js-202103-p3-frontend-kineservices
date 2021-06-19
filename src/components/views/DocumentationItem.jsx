/* eslint-disable react/prop-types */
import React from 'react';

function DocumentationItem(props) {
  const { title, description, category, price } = props;
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
