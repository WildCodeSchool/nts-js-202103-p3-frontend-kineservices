/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Card, Form, Col } from 'react-bootstrap';
import './SignUp.css';
import DisplayAvatar from './DisplayAvatar';

export default function SignUpKine() {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState('');
  const [validation, setValidation] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState('');
  const [isErrorMail, setIsErrorMail] = useState('');
  const [servicesTerms, setServicesTerms] = useState(false);
  const [validationMail, setValidationMail] = useState(false);
  const [user, setUser] = useState({
    RPPS: 0,
    role_id: 0,
    SIRET: 0,
    address: '',
    birthdate: '',
    country: 'France',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: '',
    website: '',
  });
  const [picture, setPicture] = useState(null);

  const checkValidation = (e) => {
    setConfirmPassword(e.target.value);
    if (user.password !== e.target.value || e.target.value !== user.password) {
      setIsError('Les mots de passe ne correspondent pas');
    } else {
      setValidation(true);
    }
  };

  const checkValidationMail = (e) => {
    setConfirmEmail(e.target.value);
    if (user.email !== e.target.value) {
      setIsErrorMail('Les mails ne sont pas identiques');
    } else {
      setValidationMail(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.role_id === 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Êtes-vous kinésiterapeuthe ?',
      });
    }
    if (!servicesTerms) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Veuillez accepter les conditions générales d'utilisation`,
      });
    }
    if (!validation || !validationMail) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Votre mot de passe ou votre mail ne sont pas identiques`,
      });
    } else if (
      validation &&
      validationMail &&
      servicesTerms &&
      user.role_id !== 0
    ) {
      const formUser = new FormData();
      formUser.append('picture', picture);
      formUser.append('RPPS', user.RPPS);
      formUser.append('role_id', user.role_id);
      formUser.append('SIRET', user.SIRET);
      formUser.append('address', user.address);
      formUser.append('birthdate', user.birthdate);
      formUser.append('country', user.country);
      formUser.append('email', user.email);
      formUser.append('firstname', user.firstname);
      formUser.append('lastname', user.lastname);
      formUser.append('password', user.password);
      formUser.append('phone', user.phone);
      formUser.append('website', user.website);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, formUser, config)
        .then((response) => {
          JSON.stringify(
            response,
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Votre compte a été créé',
            })
          );
        })
        .catch(
          (error) => JSON.stringify(error),
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Veuillez vérifier les informations saisies',
          })
        );
    }
  };

  return (
    <div className="container-form">
      <div className="container-card-form">
        <div className="signUpForm">
          <Card className="card-signup">
            <Card.Body className="card-body-signup">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <DisplayAvatar file={picture} setFile={setPicture} />
                <p className="acceptedFiles">
                  Choisissez une image de profil <br />
                  types de fichier acceptés : .jpg .jpeg .png
                </p>
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
                    onChange={(event) => {
                      setUser({
                        ...user,
                        lastname: event.target.value,
                      });
                    }}
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
                    onChange={(event) => {
                      setUser({
                        ...user,
                        firstname: event.target.value,
                      });
                    }}
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
                    name="birthdate"
                    type="date"
                    onChange={(event) => {
                      setUser({
                        ...user,
                        birthdate: event.target.value,
                      });
                    }}
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
                    value={user.email}
                    onChange={(event) =>
                      setUser({
                        ...user,
                        email: event.target.value,
                      })
                    }
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
                      value={user.password}
                      onChange={(event) =>
                        setUser({
                          ...user,
                          password: event.target.value,
                        })
                      }
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
                    {user.role_id === 1 ? (
                      <Form.Group className="container-form">
                        <Form.Control
                          id="RPPS"
                          type="number"
                          name="RPPS"
                          placeholder=" RPPS : "
                          onChange={(event) => {
                            setUser({
                              ...user,
                              RPPS: event.target.value,
                            });
                          }}
                          required
                        />
                      </Form.Group>
                    ) : (
                      ''
                    )}
                  </label>

                  <div className="container-choose-radio">
                    <div className="container-radio-kine">
                      <Form.Group className="container-form">
                        <Form.Control
                          type="radio"
                          id="kineCheck"
                          name="role_id"
                          value={1}
                          onChange={() =>
                            setUser({
                              ...user,
                              role_id: 1,
                            })
                          }
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
                          value={2}
                          onChange={() =>
                            setUser({
                              ...user,
                              role_id: 2,
                            })
                          }
                        />
                        Je suis une entreprise
                      </Form.Group>
                    </div>
                  </div>
                  <label className="field" htmlFor="siret">
                    {user.role_id === 2 ? (
                      <Form.Group className="container-form">
                        <Form.Control
                          className="siret"
                          id="SIRET"
                          type="text"
                          name="SIRET"
                          placeholder=" Siret :"
                          onChange={(event) => {
                            setUser({
                              ...user,
                              SIRET: event.target.value,
                            });
                          }}
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
                      onChange={(event) => {
                        setUser({
                          ...user,
                          country: event.target.value,
                        });
                      }}
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
                      onChange={(event) => {
                        setUser({
                          ...user,
                          address: event.target.value,
                        });
                      }}
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
                      onChange={(event) => {
                        setUser({
                          ...user,
                          phone: event.target.value,
                        });
                      }}
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
                      onChange={(event) => {
                        setUser({
                          ...user,
                          website: event.target.value,
                        });
                      }}
                      type="siteWeb"
                    />
                  </Form.Group>
                  <Form.Group className="check-validation">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Form.Check
                        onClick={() => setServicesTerms(true)}
                        label="J'accepte les conditions générales d'utilisation"
                      />
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
                  <Link to="/connexion">
                    <div className="connecter">
                      <p>Me connecter</p>
                    </div>
                  </Link>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
