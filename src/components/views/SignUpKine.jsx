import axios from 'axios';
import React, { useState } from 'react';
import './SignUp.css';

export default function SignUpKine() {
  const [formContent, setFormContent] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState('');
  const [validation, setValidation] = useState(false);

  const checkValidation = (e) => {
    const confPass = e.target.value;
    setConfirmPassword(confPass);
    if (password !== confPass) {
      setIsError('Les mots de passe ne correspondent pas');
    } else {
      setIsError('');
      setValidation(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = {};
    for (let i = 0; i < event.target.length; i += 1) {
      content[event.target[i].name] = event.target[i].value;
    }
    console.log(formContent);
    setFormContent(content);
    if (!validation) {
      alert('cant possible');
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
          formContent,
          setFormContent,
        })
        .then((response) => {
          console.log(response);
        });
    }
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
              required
            />
          </label>
          <label className="field" htmlFor="firstname">
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Prénom : "
              required
            />
          </label>
          <label className="field" htmlFor="birthdate">
            <input
              id="birthdate"
              type="date"
              name="birthdate"
              placeholder="Date de naissance :"
              required
            />
          </label>
          <label className="field" htmlFor="email">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              name="email"
              placeholder="email :"
            />
          </label>
          <label className="field" htmlFor="confirmEmail">
            <input
              id="confirmEmail"
              type="email"
              name="confirmEmail"
              placeholder="confirm email :"
              required
            />
          </label>
          <label className="field" htmlFor="password">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              name="password"
              placeholder="Mot de passe :"
              required
            />
          </label>

          <label className="field" htmlFor="confirmPassword">
            <input
              value={confirmPassword}
              onChange={(e) => checkValidation(e)}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Mot de passe :"
              required
            />
          </label>
          <span>{isError}</span>
          <label className="field" htmlFor="RPPS">
            <input
              id="firstname"
              type="number"
              name="RPPS"
              placeholder="RPPS : "
              required
            />
          </label>
          <p>Je suis une entreprise ?</p>
          <label className="field" htmlFor="siret">
            <input
              id="siret"
              type="text"
              name="siret"
              placeholder="Siret :"
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
