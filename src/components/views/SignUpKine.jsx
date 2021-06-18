/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import avatar from '../../media/avatar.png';
import './SignUp.css';

const currencies = [
  {
    value: ['France', 'Espagne', 'Italie'],
    label: 'Europe',
  },
  {
    value: ['Canada', 'Etat-unis'],
    label: 'Amérique',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

export default function SignUpKine() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const content = {};
    for (let i = 0; i < event.target.length; i += 1) {
      content[event.target[i].name] = event.target[i].value;
    }
    console.log(formContent);
    setFormContent(content);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        formContent,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="container-form">
      <div>
        <div className="signUpForm">
          <form onSubmit={handleSubmit}>
            <div className="container-avatar">
              <img className="avatar" src={avatar} alt="avatar" />
            </div>
            <TextField
              htmlFor="lastname"
              label="Nom"
              id="lastname"
              defaultValue=""
              className={classes.textField}
              margin="dense"
              variant="outlined"
              name="lastname"
              required
            />
            <TextField
              htmlFor="firstname"
              label="Prénom"
              id="firstname"
              defaultValue=""
              className={classes.textField}
              margin="dense"
              variant="outlined"
              name="firstname"
              required
            />
            <TextField
              htmlFor="birthday"
              id="birthday"
              defaultValue=""
              className={classes.textField}
              margin="dense"
              variant="outlined"
              name="birthday"
              type="date"
              required
            />
            <TextField
              htmlFor="email"
              label="Email"
              id="email"
              defaultValue=""
              className={classes.textField}
              margin="dense"
              variant="outlined"
              name="email"
              type="email"
              required
            />
            <TextField
              htmlFor="confirmeEmail"
              label="Confirmer l'email"
              id="confirmeEmail"
              defaultValue=""
              className={classes.textField}
              margin="dense"
              variant="outlined"
              name="confirmeEmail"
              required
            />
            <div className="signUpForm">
              <TextField
                htmlFor="password"
                label="Mot de passe"
                id="password"
                defaultValue=""
                className={classes.textField}
                margin="dense"
                variant="outlined"
                name="passeword"
                type="passeword"
                required
              />
              <TextField
                htmlFor="confirmPassword"
                label="Confirmer mot de passe"
                id="confirmPassword"
                defaultValue=""
                className={classes.textField}
                margin="dense"
                variant="outlined"
                name="confirmPassword"
                type="password"
                required
              />
              <label className="field" htmlFor="RPPS">
                {isKine ? (
                  <TextField
                    id="firstname"
                    type="number"
                    name="RPPS"
                    placeholder="RPPS : "
                    required
                  />
                ) : (
                  <TextField
                    id="firstname"
                    type="number"
                    name="RPPS"
                    placeholder="RPPS : "
                  />
                )}
              </label>
              <div>
                <div>
                  <label className="check" htmlFor="kineCheck">
                    <input
                      type="radio"
                      id="kineCheck"
                      name="role_id"
                      value="1"
                      checked={isKine}
                      onChange={handleCheck}
                    />
                    Je suis un.e kiné
                  </label>
                </div>

                <div>
                  <label className="check" htmlFor="companyCheck">
                    <input
                      type="radio"
                      id="companyCheck"
                      name="role_id"
                      value="2"
                      checked={!isKine}
                      onChange={handleCheck}
                    />
                    Je suis une entreprise
                  </label>
                </div>
              </div>
              <label className="field" htmlFor="siret">
                {!isKine ? (
                  <TextField
                    className="siret"
                    id="siret"
                    type="text"
                    name="siret"
                    placeholder="Siret :"
                    required
                  />
                ) : (
                  ''
                )}
              </label>
              <TextField
                htmlFor="country"
                id="country"
                select
                label="Select your country"
                value={currency}
                onChange={handleChange}
                className={classes.textField}
                name="country"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

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

              <TextField
                htmlFor="address"
                label="Adresse"
                id="address"
                defaultValue=""
                className={classes.textField}
                margin="dense"
                variant="outlined"
                name="address"
                type="address"
                required
              />
              <TextField
                htmlFor="phone"
                label="Numéro de téléphone"
                id="phone"
                defaultValue=""
                className={classes.textField}
                margin="dense"
                variant="outlined"
                name="phone"
                type="phone"
                required
              />
              <TextField
                htmlFor="siteWeb"
                label="Site web"
                id="siteWeb"
                defaultValue=""
                className={classes.textField}
                margin="dense"
                variant="outlined"
                name="siteWeb"
                type="siteWeb"
                required
              />
              <button className="button-signup" type="submit">
                Créer mon compte
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
