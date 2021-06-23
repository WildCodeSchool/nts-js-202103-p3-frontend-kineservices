/* eslint-disable no-alert */
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
        alert(JSON.stringify(response));
      })
      .catch((error) => alert(JSON.stringify(error)));
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
    </form>
  );
}

export default ServiceForm;
