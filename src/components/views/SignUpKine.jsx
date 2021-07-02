import axios from 'axios';
import React, { useState } from 'react';
import { Card, Form, Col } from 'react-bootstrap';
import avatar from '../../media/avatar.png';
import './SignUp.css';

export default function SignUpKine() {
  const [formContent, setFormContent] = useState({});
  const [isKine, setIsKine] = useState(true);
  function handleCheck(event) {
    console.log(event.target.name, event.target.value);
    if (event.target.value === '1') {
      setIsKine(true);
    } else {
      setIsKine(false);
    }
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState('');
  const [validation, setValidation] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState('');
  const [isErrorMail, setIsErrorMail] = useState('');
  const [validationMail, setValidationMail] = useState(false);

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

  const checkValidationMail = (e) => {
    const confMail = e.target.value;
    setConfirmEmail(confMail);
    if (email !== confMail) {
      setIsErrorMail('Les mails ne sont pas identiques');
    } else {
      setIsErrorMail('');
      setValidationMail(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const content = {};
    for (let i = 0; i < event.target.length; i += 1) {
      content[event.target[i].name] = event.target[i].value;
    }
    setFormContent(content);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        formContent,
      })
      .then((response) => {
        console.log(response);
      });
    if (!validation) {
      alert('cant possible');
    } else if (!validationMail) {
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
    <div className="container-form">
      <div className="container-card-form">
        <div className="signUpForm">
          <Card className="card-signup">
            <Card.Body className="card-body-signup">
              <form onSubmit={handleSubmit}>
                <div className="container-avatar">
                  <img className="avatar" src={avatar} alt="avatar" />
                </div>
                <Form.Group className="container-form">
                  <Form.Control
                    htmlFor="lastname"
                    label="Nom"
                    id="lastname"
                    defaultValue=""
                    placeholder=" Nom"
                    margin="dense"
                    variant="outlined"
                    name="lastname"
                    required
                  />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control
                    htmlFor="firstname"
                    label="Prénom"
                    id="firstname"
                    defaultValue=""
                    placeholder=" Prénom"
                    margin="dense"
                    variant="outlined"
                    name="firstname"
                    required
                  />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control
                    htmlFor="birthdate"
                    id="birthdate"
                    defaultValue=""
                    margin="dense"
                    variant="outlined"
                    name=" Date de naissance"
                    type="date"
                    required
                  />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control
                    htmlFor="email"
                    label="Email"
                    id="email"
                    defaultValue=""
                    placeholder=" Email"
                    margin="dense"
                    variant="outlined"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control
                    htmlFor="confirmeEmail"
                    label="Confirmer l'email"
                    id="confirmeEmail"
                    defaultValue=""
                    placeholder=" Confirme ton email"
                    margin="dense"
                    variant="outlined"
                    name="confirmeEmail"
                    value={confirmEmail}
                    onChange={(e) => checkValidationMail(e)}
                    required
                  />
                </Form.Group>
                <span className="alertError">{isErrorMail}</span>
                <div className="signUpForm">
                  <Form.Group className="container-form">
                    <Form.Control
                      htmlFor="password"
                      label="Mot de passe"
                      id="password"
                      defaultValue=""
                      placeholder=" Mot de passe"
                      margin="dense"
                      variant="outlined"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="container-form">
                    <Form.Control
                      htmlFor="confirmPassword"
                      label="Confirmer mot de passe"
                      id="confirmPassword"
                      defaultValue=""
                      placeholder=" Confirme ton mot de passe"
                      margin="dense"
                      variant="outlined"
                      name="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => checkValidation(e)}
                      required
                    />
                  </Form.Group>
                  <span className="alertError">{isError}</span>
                  <label className="field" htmlFor="RPPS">
                    {isKine ? (
                      <Form.Group className="container-form">
                        <Form.Control
                          id="firstname"
                          type="number"
                          name="RPPS"
                          placeholder=" RPPS : "
                          required
                        />
                      </Form.Group>
                    ) : (
                      <Form.Group className="container-form">
                        <Form.Control
                          id="firstname"
                          type="number"
                          name="RPPS"
                          placeholder=" RPPS : "
                        />
                      </Form.Group>
                    )}
                  </label>
                  <div className="container-choose-radio">
                    <div className="container-radio-kine">
                      <Form.Group className="container-form">
                        <Form.Control
                          type="radio"
                          id="kineCheck"
                          name="role_id"
                          value="1"
                          checked={isKine}
                          onChange={handleCheck}
                        />
                        Je suis un.e kiné
                      </Form.Group>
                    </div>

                    <div className="container-radio-entreprise">
                      <Form.Group className="container-form">
                        <Form.Control
                          type="radio"
                          id="companyCheck"
                          name="role_id"
                          value="2"
                          checked={!isKine}
                          onChange={handleCheck}
                        />
                        Je suis une entreprise
                      </Form.Group>
                    </div>
                  </div>
                  <label className="field" htmlFor="siret">
                    {!isKine ? (
                      <Form.Group className="container-form">
                        <Form.Control
                          className="siret"
                          id="siret"
                          type="text"
                          name="siret"
                          placeholder=" Siret :"
                          required
                        />
                      </Form.Group>
                    ) : (
                      ''
                    )}
                  </label>
                  <Form.Group className="container-form">
                    <Form.Control
                      as="select"
                      defaultValue="Choose..."
                      name="country"
                    >
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
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="container-form">
                    <Form.Control
                      htmlFor="address"
                      label="Adresse"
                      id="address"
                      defaultValue=""
                      placeholder=" Adresse"
                      margin="dense"
                      variant="outlined"
                      name="address"
                      type="address"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="container-form">
                    <Form.Control
                      htmlFor="phone"
                      label="Numéro de téléphone"
                      id="phone"
                      defaultValue=""
                      placeholder=" Numéro de téléphone"
                      margin="dense"
                      variant="outlined"
                      name="phone"
                      type="phone"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="container-form">
                    <Form.Control
                      htmlFor="siteWeb"
                      label="Site web"
                      id="siteWeb"
                      defaultValue=""
                      placeholder=" Site web"
                      margin="dense"
                      variant="outlined"
                      name="siteWeb"
                      type="siteWeb"
                    />
                  </Form.Group>
                  <Form.Group className="check-validation">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Form.Check label="J'accepte les conditions générales d'utilisation" />
                    </Col>
                  </Form.Group>
                  <div className="container-button">
                    <button className="button-signup" type="submit">
                      Créer mon compte
                    </button>
                  </div>
                  <hr />
                  <div className="text-alreadyAccount">
                    <p>J&apos;ai déjà un compte</p>
                  </div>
                  <div className="connecter">
                    <p>Me connecter</p>
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
