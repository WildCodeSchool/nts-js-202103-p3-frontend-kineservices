/* eslint-disable react/prop-types */
import React from 'react';

function FormationItem(props) {
  const { title, description, category, date, price, website } = props;

  return (
    <div className="box-item">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p className="categorie">Catégorie : {category}</p>
      <hr />
      <p>{date}</p>
      <p className="price">Prix : {price}€</p>
      <div className="discover">
        <a href={website} className="link-website">
          Voir et s&lsquo;inscrire !
        </a>
      </div>
    </div>
  );
}

export default FormationItem;
