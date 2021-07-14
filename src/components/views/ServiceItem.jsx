/* eslint-disable react/prop-types */
import React from 'react';
import './DocumentationItem.css';

function ServiceList(props) {
  const { title, description, website, price } = props;
  return (
    <div className="container-docitem">
      <div className="box-item">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p>Prix ! {price}€</p>
        <div className="discover">
          <a href={website} className="download-file">
            Accéder au site !
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
