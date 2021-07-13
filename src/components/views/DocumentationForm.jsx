/* eslint-disable no-alert */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import FormInput from '../commons/FormInput';

import './DocumentationForm.css';

function DocumentationForm() {
  const [select, setSelect] = useState([]);
  const [documentation, setDocumentation] = useState({
    title: '',
    description: '',
    category_id: 3,
    user_id: 2,
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
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <p>Ajouter une documentation :</p>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <p className="acceptedFiles">.pdf .doc .docx .odt .ppt .pptx</p>
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
      <select
        name="category_id"
        id="category"
        onChange={(event) => {
          setDocumentation({
            ...documentation,
            category_id: event.target.value,
          });
        }}
      >
        {/* <option value="0">---</option> */}
        {select.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>

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
