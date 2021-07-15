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
      <p>
        lien du site pour s &apos;inscrire à la formation : <br />
        <a href={website}>{website}</a>
      </p>
      <p className="price">Prix : {price}€</p>
    </div>
  );
}

export default FormationItem;
