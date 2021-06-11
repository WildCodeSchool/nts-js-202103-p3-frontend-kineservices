import axios from 'axios';
import React, { useState } from 'react';
import './SignUp.css';

export default function SignUpKine() {
  const [formContent, setFormContent] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = {};
    for (let i = 0; i < event.target.length; i += 1) {
      content[event.target[i].name] = event.target[i].value;
    }
    console.log(formContent);
    setFormContent(content);
    axios
      .post('http://localhost:8080/signup', { formContent })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <div className="title">
        <h3>Je suis Kinésitherapeute</h3>
      </div>
      <div className="signUpForm">
        <form onSubmit={handleSubmit}>
          <label className="field" htmlFor="lastname">
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Nom :"
            />
          </label>
          <label className="field" htmlFor="firstname">
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Prénom : "
            />
          </label>
          <label className="field" htmlFor="birthdate">
            <input
              id="birthdate"
              type="date"
              name="birthdate"
              placeholder="Date de naissance :"
            />
          </label>
          <label className="field" htmlFor="email">
            <input id="email" type="email" name="email" placeholder="email :" />
          </label>
          <label className="field" htmlFor="password">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Mot de passe :"
            />
          </label>
          <label className="field" htmlFor="rpps">
            <input id="rpps" type="text" name="rpps" placeholder="RPPS : " />
          </label>
          <p className="field">Je suis une entreprise ?</p>
          <label className="field" htmlFor="SIRET">
            <input
              id="SIRET"
              type="number"
              name="SIRET"
              placeholder="SIRET :"
            />
          </label>

          <label className="field" htmlFor="country">
            <input
              id="country"
              type="text"
              name="country"
              placeholder="Pays :"
            />
          </label>
          <label className="field" htmlFor="address">
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Adresse :"
            />
          </label>
          <label className="field" htmlFor="phone">
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Téléphone :"
            />
          </label>
          <label className="field" htmlFor="website">
            <input
              id="website"
              type="text"
              name="website"
              placeholder="Site web :"
            />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
