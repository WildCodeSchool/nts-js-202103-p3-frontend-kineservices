import axios from 'axios';
import React, { useState } from 'react';
// import backgroundkine from '../../media/backgroundkine.png';
import './SignIn.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/connexion`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('TOKEN', response.data.auth);
        localStorage.setItem('USERID', response.data.id);
      });
  };

  return (
    <section className="connexion">
      {/* <div className="bg-img">
        <img src={backgroundkine} alt="bg" />
      </div> */}
      <div className="signInForm-container">
        <form className="signInForm" onSubmit={handleSubmit}>
          <label className="field" htmlFor="email">
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleEmail}
              placeholder="E-mail :"
              required
            />
          </label>
          <label className="field" htmlFor="password">
            <input
              id="password"
              type="password"
              name="password"
              onChange={handlePassword}
              placeholder="Mot de passe : "
              required
            />
          </label>
          <button className="btn" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </section>
  );
}
