import React from 'react';
import './SignUp.css';

export default function SignUpKine() {
  // instert into role : kine
  return (
    <div>
      <div className="title">
        <h3>Je suis Kinésitherapeute</h3>
      </div>
      <div className="signUpForm">
        <form>
          <label className="field" htmlFor="lastname">
            <input id="name" type="text" name="name" placeholder="Nom :" />
          </label>
          <label className="field" htmlFor="firstname">
            <input
              id="firstname"
              type="text"
              name="name"
              placeholder="prenom : "
            />
          </label>
          <label className="field" htmlFor="birthdate">
            <input
              id="birthdate"
              type="text"
              name="name"
              placeholder="Date de naissance :"
            />
          </label>
          <label className="field" htmlFor="email">
            <input id="email" type="text" name="name" placeholder="email :" />
          </label>
          <label className="field" htmlFor="password">
            <input
              id="password"
              type="text"
              name="name"
              placeholder="Mot de passe :"
            />
          </label>
          <label className="field" htmlFor="RPPS">
            <input
              id="firstname"
              type="text"
              name="name"
              placeholder="RPPS : "
            />
          </label>
          <label className="field" htmlFor="SIRET">
            <p>Je suis une entreprise ?</p>
            <input id="phone" type="text" name="name" placeholder="SIRET :" />
          </label>

          <label className="field" htmlFor="country">
            <input id="country" type="text" name="name" placeholder="pays :" />
          </label>
          <label className="field" htmlFor="adress">
            <input
              id="adress"
              type="text"
              name="name"
              placeholder="Adresse :"
            />
          </label>
          <label className="field" htmlFor="phone">
            <input
              id="phone"
              type="text"
              name="name"
              placeholder="Téléphone :"
            />
          </label>
          <label className="field" htmlFor="website">
            <input
              id="website"
              type="text"
              name="name"
              placeholder="Site web :"
            />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
}
