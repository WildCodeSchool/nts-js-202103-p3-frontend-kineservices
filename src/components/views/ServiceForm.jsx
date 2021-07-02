import axios from 'axios';
import React, { useState } from 'react';
import FormInput from '../commons/FormInput';

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
    <form onSubmit={handleSubmit}>
      <p>Ajouter un service :</p>
      <FormInput
        label="Titre"
        name="title"
        type="text"
        value={service}
        setValue={setService}
      />
      <FormInput
        className="serviceDescription"
        label="Description"
        name="description"
        type="text"
        value={service}
        setValue={setService}
      />
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
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default ServiceForm;
