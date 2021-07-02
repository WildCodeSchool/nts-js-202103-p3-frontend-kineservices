/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './DocumentationItem.css';

function DocumentationItem(props) {
  const { title, description, category, price, id } = props;

  return (
    <div className="box-item">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p>{category}</p>
      <p>Prix : {price}€</p>
      <Link to={`/documentation/${id}`}>Découvrir !</Link>
    </div>
  );
}

export default DocumentationItem;
