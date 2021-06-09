import React, { useState } from 'react';
import './SignUp.css';

export default function SignUpKine() {
  // instert into role : kine //event.target.value
  const [formContent, setFormContent] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = {};
    for (let i = 0; i < event.target.length; i += 1) {
      // console.log(event.target[i].value);
      content[event.target[i].name] = event.target[i].value;
    }
    // console.log(event.target[0].value);
    console.log(formContent);
    setFormContent(content);
  };

  return (
    <div>
      <div className="title">
        <h3>Je suis Kinésitherapeute</h3>
      </div>
      <div className="signUpForm">
        <form onSubmit={handleSubmit}>
          <label className="field" htmlFor="lastname">
            <input id="name" type="text" name="lastname" placeholder="Nom :" />
          </label>
          <label className="field" htmlFor="firstname">
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="prenom : "
            />
          </label>
          <label className="field" htmlFor="birthdate">
            <input
              id="birthdate"
              type="text"
              name="birthdate"
              placeholder="Date de naissance :"
            />
          </label>
          <label className="field" htmlFor="email">
            <input id="email" type="text" name="email" placeholder="email :" />
          </label>
          <label className="field" htmlFor="password">
            <input
              id="password"
              type="text"
              name="password"
              placeholder="Mot de passe :"
            />
          </label>
          <label className="field" htmlFor="RPPS">
            <input
              id="firstname"
              type="text"
              name="RPPS"
              placeholder="RPPS : "
            />
          </label>
          <label className="field" htmlFor="SIRET">
            <p>Je suis une entreprise ?</p>
            <input id="SIRET" type="text" name="SIRET" placeholder="SIRET :" />
          </label>

          <label className="field" htmlFor="country">
            <input
              id="country"
              type="text"
              name="country"
              placeholder="pays :"
            />
          </label>
          <label className="field" htmlFor="address">
            <input
              id="adress"
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
