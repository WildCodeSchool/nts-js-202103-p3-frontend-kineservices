/* eslint-disable react/prop-types */
import React from 'react';

function ServiceList(props) {
  const { title, description, website, price } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{website}</p>
      <p>{price}</p>
    </div>
  );
}

export default ServiceList;
