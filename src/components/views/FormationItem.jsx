/* eslint-disable react/prop-types */
import React from 'react';

function FormationItem(props) {
  const { title, description, category, date, price, website } = props;

  return (
    <div className="box-item">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p>{category}</p>
      <p>{date}</p>
      <p>{website}</p>
      <p>Prix : {price}</p>
    </div>
  );
}

export default FormationItem;
