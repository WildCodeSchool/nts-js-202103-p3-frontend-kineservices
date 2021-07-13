/* eslint-disable react/prop-types */
import React from 'react';
import './DocumentationItem.css';
import { Link } from 'react-router-dom';

function DocumentationItem(props) {
  const { title, description, category, price, id } = props;
  return (
    <div className="container-docitem">
      <div className="box-item">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p>{category}</p>
        <p>Prix : {price}€</p>
        <div className="discover">
          <Link to={`/documentation/${id}`}>Découvrir !</Link>
        </div>
      </div>
    </div>
  );
}

export default DocumentationItem;
