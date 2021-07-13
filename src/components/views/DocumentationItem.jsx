/* eslint-disable react/prop-types */
import React from 'react';
import './DocumentationItem.css';

function DocumentationItem(props) {
  const { title, description, category, price, file } = props;
  return (
    <div className="container-docitem">
      <div className="box-item">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <hr />
        <p className="category">Catégorie : {category}</p>
        <p className="price">Prix : {price}€</p>
        <div className="discover">
          <a
            href={`${process.env.REACT_APP_BACKEND_URL}/${file}`}
            className="telecharger"
            download
          >
            Télécharger !
          </a>
        </div>
      </div>
    </div>
  );
}

export default DocumentationItem;
