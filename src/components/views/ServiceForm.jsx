import axios from 'axios';
import React, { useState } from 'react';
import FormInput from '../commons/FormInput';
import './ServiceForm.css';

function ServiceForm() {
  const [service, setService] = useState({
    title: '',
    description: '',
    website: '',
    user_id: 2,
    price: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/service`, service)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
  );
}

export default ServiceForm;
