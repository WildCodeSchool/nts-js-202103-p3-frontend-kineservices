import React from 'react';
import './SignUp.css';

export default function SignUpCompany() {
  // instert into role : big compagny or small comapny
  return (
    <div>
      <div className="title">
        <h3>Je suis une entreprise</h3>
      </div>
      <div className="signUpForm">
        <form>
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
              placeholder="prénom : "
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
          <label className="field" htmlFor="siret">
            <input id="siret" type="text" name="siret" placeholder="SIRET :" />
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
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
}
