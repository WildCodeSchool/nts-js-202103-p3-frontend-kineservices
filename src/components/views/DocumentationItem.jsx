/* eslint-disable react/prop-types */
import React from 'react';
import './DocumentationItem.css';
import axios from 'axios';

function DocumentationItem(props) {
  const { title, description, category, price, id } = props;
  const handleDiscover = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/documentation/${id}`);
  };
  return (
    <div className="container-docitem">
      <div className="box-item">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p>{category}</p>
        <p>Prix : {price}€</p>
        <div className="discover">
          <button type="submit" onClick={handleDiscover}>
            Découvrir !
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentationItem;
