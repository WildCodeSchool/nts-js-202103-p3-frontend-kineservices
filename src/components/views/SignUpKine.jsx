import axios from 'axios';
import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
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
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [RPPS, setRPPS] = useState('');
  const [SIRET, setSIRET] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [website, setWebSite] = useState('');
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

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

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
                    placeholder=" Lastname"
                    margin="dense"
                    variant="outlined"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control
                    htmlFor="firstname"
                    label="Prénom"
                    id="firstname"
                    defaultValue=""
                    placeholder=" Firstname"
                    margin="dense"
                    variant="outlined"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control
                    htmlFor="birthday"
                    id="birthday"
                    defaultValue=""
                    margin="dense"
                    variant="outlined"
                    name="birthday"
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
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
                    placeholder=" Confirm your mail"
                    margin="dense"
                    variant="outlined"
                    name="confirmeEmail"
                    value={confirmEmail}
                    onChange={(e) => checkValidationMail(e)}
                    required
                  />
                </Form.Group>
                <span>{isErrorMail}</span>
                <div className="signUpForm">
                  <Form.Group className="container-form">
                    <Form.Control
                      htmlFor="password"
                      label="Mot de passe"
                      id="password"
                      defaultValue=""
                      placeholder=" Password"
                      margin="dense"
                      variant="outlined"
                      name="passeword"
                      type="passeword"
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
                      placeholder=" Confirm your password"
                      margin="dense"
                      variant="outlined"
                      name="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => checkValidation(e)}
                      required
                    />
                  </Form.Group>
                  <span>{isError}</span>
                  <label className="field" htmlFor="RPPS">
                    {isKine ? (
                      <Form.Group className="container-form">
                        <Form.Control
                          id="firstname"
                          type="number"
                          name="RPPS"
                          placeholder=" RPPS : "
                          value={RPPS}
                          onChange={(e) => setRPPS(e.target.value)}
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
                  <div>
                    <div>
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

                    <div>
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
                          value={SIRET}
                          onChange={(e) => setSIRET(e.target.value)}
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
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
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
                      placeholder=" Address"
                      margin="dense"
                      variant="outlined"
                      name="address"
                      type="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="container-form">
                    <Form.Control
                      htmlFor="phone"
                      label="Numéro de téléphone"
                      id="phone"
                      defaultValue=""
                      placeholder=" Number phone"
                      margin="dense"
                      variant="outlined"
                      name="phone"
                      type="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="container-form">
                    <Form.Control
                      htmlFor="siteWeb"
                      label="Site web"
                      id="siteWeb"
                      defaultValue=""
                      placeholder=" Web site"
                      margin="dense"
                      variant="outlined"
                      name="siteWeb"
                      type="siteWeb"
                      value={website}
                      onChange={(e) => setWebSite(e.target.value)}
                    />
                  </Form.Group>
                  <div className="container-button">
                    <button className="button-signup" type="submit">
                      Créer mon compte
                    </button>
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
