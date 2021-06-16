/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../commons/FormInput';

function DocumentationItem() {
  const [documentation, setDocumentation] = useState({
    title: '',
    description: '',
    categorie: '',
    price: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/documentation`, documentation)
      .then((response) => {
        alert(JSON.stringify(response));
      })
      .catch((error) => alert(JSON.stringify(error)));
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Titre"
        name="title"
        type="text"
        value={documentation}
        setValue={setDocumentation}
      />
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default DocumentationItem;
