/* eslint-disable no-alert */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormInput from '../commons/FormInput';
import './FormationForm.css';

function FormationForm() {
  const [select, setSelect] = useState([]);
  const history = useHistory(null);
  const userId = localStorage.getItem('USERID');
  const [formation, setFormation] = useState({
    title: '',
    category_id: '',
    date: '',
    price: '',
    website: '',
    description: '',
    user_id: userId,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/formation`, formation)
      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Formation ajoutée avec succès!',
            showConfirmButton: false,
            timer: 3000,
          })
        );
      })
      .catch(
        (error) => JSON.stringify(error),
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Veuillez vérifier les informations saisies',
          showConfirmButton: false,
          timer: 3000,
        })
      );
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
      {!userId ? (
        history.push('/connexion')
      ) : (
        <form className="formationGlobal" onSubmit={handleSubmit}>
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
      )}
    </div>
  );
}

export default FormationForm;
