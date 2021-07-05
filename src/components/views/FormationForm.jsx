import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FormInput from '../commons/FormInput';

function FormationForm() {
  const [select, setSelect] = useState([]);
  const [formation, setFormation] = useState({
    title: '',
    category_id: '1',
    date: '',
    price: '',
    website: '',
    description: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/formation`, formation)
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
      }, []);
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Ajouter une formation : </p>
        <FormInput
          label="Titre"
          name="title"
          type="text"
          value={formation}
          setValue={setFormation}
        />
        <FormInput
          label="description"
          name="description"
          type="text"
          value={formation}
          setValue={setFormation}
        />
        <FormInput
          label="date"
          name="date"
          type="date"
          value={formation}
          setValue={setFormation}
        />
        <FormInput
          label="website"
          name="website"
          type="text"
          value={formation}
          setValue={setFormation}
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
          label="prix"
          name="price"
          type="number"
          value={formation}
          setValue={setFormation}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default FormationForm;
