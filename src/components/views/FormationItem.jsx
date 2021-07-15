/* eslint-disable react/prop-types */
import React from 'react';

function FormationItem(props) {
  const { title, description, category, date, price, website } = props;

  return (
    <div className="box-item">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p>
        <span className="categorie">Catégorie :</span> {category}
      </p>
      <p>{date}</p>
      <p className="price">Prix : {price}€</p>

      <a href={website} className="download-file">
        Voir et s&lsquo;inscrire!
      </a>
      <p className="price">Prix : {price}€</p>
    </div>
  );
}

export default FormationItem;
