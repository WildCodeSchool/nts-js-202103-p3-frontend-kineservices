import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormInput from '../commons/FormInput';
import './ServiceForm.css';

function ServiceForm() {
  const history = useHistory(null);
  const userId = localStorage.getItem('USERID');
  const [service, setService] = useState({
    title: '',
    description: '',
    website: '',
    user_id: userId,
    price: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/service`, service)
      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Service ajouté avec succès!',
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

  return (
    <div>
      {!userId ? (
        history.push('/connexion')
      ) : (
        <form className="serviceGlobal" onSubmit={handleSubmit}>
          <h1 className="addService">Ajouter un service</h1>
          <FormInput
            label="Titre"
            name="title"
            type="text"
            value={service}
            setValue={setService}
          />
          <label htmlFor="Description">
            <span className="textAreaLabel">Description:</span>
            <textarea
              className="textArea"
              maxLength="1200"
              rows="10"
              id="Description"
              onChange={(e) =>
                setService({ ...service, description: e.target.value })
              }
              required
            />
          </label>
          <FormInput
            label="Website"
            name="website"
            type="text"
            value={service}
            setValue={setService}
          />
          <FormInput
            label="Prix"
            name="price"
            type="number"
            value={service}
            setValue={setService}
          />
          <div className="container">
            <input className="bouton" type="submit" value="Envoyer" />
          </div>
        </form>
      )}
    </div>
  );
}

export default ServiceForm;
