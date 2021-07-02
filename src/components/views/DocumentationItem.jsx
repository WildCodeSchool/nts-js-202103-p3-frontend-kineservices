/* eslint-disable react/prop-types */
import React from 'react';
import './DocumentationItem.css';

function DocumentationItem(props) {
  const { title, description, category, price } = props;

  return (
    <div className="box-item">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p>{category}</p>
      <p>Prix : {price}€</p>
    </div>
  );
}

export default DocumentationItem;
