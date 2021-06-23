/* eslint-disable func-names */
/* eslint-disable no-alert */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FormInput from '../commons/FormInput';

function DocumentationForm() {
  const [select, setSelect] = useState([]);
  const [documentation, setDocumentation] = useState({
    title: '',
    description: '',
    category_id: 3,
    user_id: 2,
    price: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/documentation`, documentation)
      .then((response) => {
        alert(JSON.stringify(response));
      })
      .catch((error) => alert(JSON.stringify(error)));
  };

  useEffect(function () {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/category`)
      .then((response) => {
        setSelect(response.data);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <p>Ajouter une documentation :</p>
      <FormInput
        label="Titre"
        name="title"
        type="text"
        value={documentation}
        setValue={setDocumentation}
      />
      <FormInput
        label="Description"
        name="description"
        type="text"
        value={documentation}
        setValue={setDocumentation}
      />
      <form>
        <select name="category_id" id="category">
          {select.map((category) => {
            return (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>
      </form>
      <FormInput
        label="Prix"
        name="price"
        type="number"
        value={documentation}
        setValue={setDocumentation}
      />
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default DocumentationForm;
