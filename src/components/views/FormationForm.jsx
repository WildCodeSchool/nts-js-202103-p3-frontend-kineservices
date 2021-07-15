import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FormInput from '../commons/FormInput';
import './FormationForm.css';

function FormationForm() {
  const [select, setSelect] = useState([]);
  const [formation, setFormation] = useState({
    title: '',
    category_id: '',
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
    <div className="formationGlobal">
      <form onSubmit={handleSubmit}>
        <h1 className="addFormation">Ajouter une formation </h1>
        <FormInput
          classInput
          label="Titre"
          name="title"
          value={formation}
          setValue={setFormation}
        />
        <label htmlFor="Description">
          <span className="textAreaLabel">Description:</span>
          <textarea
            className="textArea"
            maxLength="1200"
            rows="10"
            id="Description"
            onChange={(e) =>
              setFormation({ ...formation, description: e.target.value })
            }
            required
          />
        </label>
        <FormInput
          label="Date"
          name="date"
          type="date"
          value={formation}
          setValue={setFormation}
        />
        <FormInput
          label="Site web"
          name="website"
          type="text"
          value={formation}
          setValue={setFormation}
        />
        <label htmlFor="category">
          <span className="select">Catégorie: </span>
          <select
            className="selectField"
            required
            name="category_id"
            id="category"
            onChange={(event) => {
              setFormation({ ...formation, category_id: event.target.value });
            }}
          >
            <option value="">--- Choisissez une catégorie</option>
            {select.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </label>
        <FormInput
          label="Prix"
          name="price"
          type="number"
          value={formation}
          setValue={setFormation}
        />
        <div className="container">
          <input className="bouton" type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
}

export default FormationForm;
