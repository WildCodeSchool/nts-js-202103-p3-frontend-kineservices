/* eslint-disable no-alert */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormInput from '../commons/FormInput';

import './DocumentationForm.css';

function DocumentationForm() {
  const [select, setSelect] = useState([]);
  const history = useHistory(null);
  const userId = localStorage.getItem('USERID');
  const [documentation, setDocumentation] = useState({
    title: '',
    description: '',
    category_id: '',
    user_id: userId,
    price: '',
  });
  const [file, setFile] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', documentation.title);
    formData.append('description', documentation.description);
    formData.append('category_id', documentation.category_id);
    formData.append('user_id', documentation.user_id);
    formData.append('price', documentation.price);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/documentation`,
        formData,
        config
      )
      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Documentation ajoutée avec succès!',
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

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/category`)
      .then((response) => {
        setSelect(response.data);
      });
  }, []);
  return (
    <div>
      {!userId ? (
        history.push('/connexion')
      ) : (
        <form
          className="documentationGlobal"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h1 className="addDocumentation">Ajouter une documentation </h1>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <p className="acceptedFiles">
            .pdf .doc .docx .odt .ppt .pptx .amz .epub
          </p>
          <FormInput
            label="Titre"
            name="title"
            type="text"
            value={documentation}
            setValue={setDocumentation}
          />
          <label htmlFor="Description">
            <span className="textAreaLabel">Description:</span>
            <textarea
              className="textArea"
              maxLength="1200"
              rows="10"
              id="Description"
              onChange={(e) =>
                setDocumentation({
                  ...documentation,
                  description: e.target.value,
                })
              }
              required
            />
          </label>
          <label htmlFor="category">
            <span className="select">Catégorie: </span>
            <select
              className="selectField"
              name="category_id"
              required
              id="category"
              onChange={(event) => {
                setDocumentation({
                  ...documentation,
                  category_id: event.target.value,
                });
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
            value={documentation}
            setValue={setDocumentation}
          />
          <div className="container">
            <input className="bouton" type="submit" value="Envoyer" />
          </div>
        </form>
      )}
    </div>
  );
}

export default DocumentationForm;
