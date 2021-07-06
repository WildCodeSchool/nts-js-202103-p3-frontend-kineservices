import axios from 'axios';
import React, { useState } from 'react';
import { Card, Form, Col } from 'react-bootstrap';
import background from '../../media/backgroundkine.png';
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
        localStorage.setItem('USERID', response.data.user.id);
        localStorage.setItem('TOKEN', response.data.token);
      });
  };

  return (
    <div className="container-all">
      <img className="background" src={background} alt="background" />
      <section className="container-card">
        <Card className="card-login">
          <Card.Body className="card-body-login">
            <div className="container-title">
              <h1 className="title">J&apos;ai déjà un compte sur Kinés.fr </h1>
            </div>
            <div className="signInForm-container">
              <form className="signInForm" onSubmit={handleSubmit}>
                <Form.Group className="container-form">
                  <Form.Control
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleEmail}
                    placeholder=" E-mail "
                    required
                  />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control
                    id="password"
                    type="password"
                    name="password"
                    onChange={handlePassword}
                    placeholder=" Mot de passe  "
                    required
                  />
                </Form.Group>
                <div className="container-forgotpassword">
                  <p className="textSignUp">Mot de passe oublié ?</p>
                </div>
                <Form.Group className="check-validation">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check
                      className="text-check"
                      label="Se souvenir de moi"
                    />
                  </Col>
                </Form.Group>
                <div className="container-button-signIn">
                  <button className="button-signIn" type="submit">
                    Me connecter
                  </button>
                </div>
                <hr />
                <div className="text-newMember">
                  <p className="textSignUp">Je suis nouveau !</p>
                </div>
                <div className="inscription">
                  <p className="textSignUp">M&apos;inscrire</p>
                </div>
              </form>
            </div>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}
