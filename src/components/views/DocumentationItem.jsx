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
        <hr />
        <p>{category}</p>
        <p className="price">Prix : {price}€</p>
        <div className="discover">
          <Link to={`/documentation/${id}`} className="telecharger">
            Télécharger !
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DocumentationItem;
