import React, { useState } from 'react';
import './SignUp.css';

export default function SignUpKine() {
<<<<<<< HEAD
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

=======
>>>>>>> 950ee3a304cbaa7cb30ff07c1682f07b051a3b48
  return (
    <div>
      <div className="title">
        <h3>Je suis Kinésitherapeute</h3>
      </div>
      <div className="signUpForm">
        <form onSubmit={handleSubmit}>
          <label className="field" htmlFor="lastname">
            <input
<<<<<<< HEAD
              id="name"
              type="text"
              name="lastname"
              placeholder="Nom :"
              required
=======
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Nom :"
>>>>>>> 950ee3a304cbaa7cb30ff07c1682f07b051a3b48
            />
          </label>
          <label className="field" htmlFor="firstname">
            <input
              id="firstname"
              type="text"
              name="firstname"
<<<<<<< HEAD
              placeholder="prenom : "
              required
=======
              placeholder="Prénom : "
>>>>>>> 950ee3a304cbaa7cb30ff07c1682f07b051a3b48
            />
          </label>
          <label className="field" htmlFor="birthdate">
            <input
              id="birthdate"
<<<<<<< HEAD
              type="date"
=======
              type="text"
>>>>>>> 950ee3a304cbaa7cb30ff07c1682f07b051a3b48
              name="birthdate"
              placeholder="Date de naissance :"
            />
          </label>
          <label className="field" htmlFor="email">
<<<<<<< HEAD
            <input id="email" type="email" name="email" placeholder="email :" />
          </label>
          <label className="field" htmlFor="confirmEmail">
            <input
              id="confirmEmail"
              type="email"
              name="confirmEmail"
              placeholder="confirm email :"
              required
            />
=======
            <input id="email" type="text" name="email" placeholder="Email :" />
>>>>>>> 950ee3a304cbaa7cb30ff07c1682f07b051a3b48
          </label>
          <label className="field" htmlFor="password">
            <input
              id="password"
<<<<<<< HEAD
              type="password"
=======
              type="text"
>>>>>>> 950ee3a304cbaa7cb30ff07c1682f07b051a3b48
              name="password"
              placeholder="Mot de passe :"
              required
            />
          </label>
          <label className="field" htmlFor="confirmPassword">
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Mot de passe :"
              required
            />
          </label>
<<<<<<< HEAD
          <label className="field" htmlFor="RPPS">
            <input
              id="firstname"
              type="number"
              name="RPPS"
              placeholder="RPPS : "
              required
            />
=======
          <label className="field" htmlFor="rpps">
            <input id="rpps" type="text" name="rpps" placeholder="RPPS : " />
>>>>>>> 950ee3a304cbaa7cb30ff07c1682f07b051a3b48
          </label>
          <label className="field" htmlFor="siret">
            <p>Je suis une entreprise ?</p>
<<<<<<< HEAD
            <input
              id="SIRET"
              type="text"
              name="SIRET"
              placeholder="SIRET :"
              required
            />
          </label>

          <label className="field" htmlFor="country">
            <select id="country" name="country" required>
              <optgroup label="Europe">
                <option value="france">France</option>
                <option value="espagne">Espagne</option>
                <option value="italie">Italie</option>
                <option value="royaume-uni">Royaume-Uni</option>
              </optgroup>
              <optgroup label="Amérique">
                <option value="canada">Canada</option>
                <option value="etats-unis">Etats-Unis</option>
              </optgroup>
              <optgroup label="Asie">
                <option value="chine">Chine</option>
                <option value="japon">Japon</option>
              </optgroup>
            </select>
=======
            <input id="siret" type="text" name="siret" placeholder="SIRET :" />
          </label>

          <label className="field" htmlFor="country">
            <input
              id="country"
              type="text"
              name="country"
              placeholder="Pays :"
            />
>>>>>>> 950ee3a304cbaa7cb30ff07c1682f07b051a3b48
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
<<<<<<< HEAD
              type="tel"
=======
              type="text"
>>>>>>> 950ee3a304cbaa7cb30ff07c1682f07b051a3b48
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
