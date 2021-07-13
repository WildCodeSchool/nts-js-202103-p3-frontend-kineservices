/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import document from '../../media/documentation.svg';
import service from '../../media/service.svg';
import formation from '../../media/formation.svg';
import avatar from '../../media/user.png';
import './Profile.css';

function Profile() {
  const history = useHistory(null);
  const [user, setUser] = useState(null);
  const [updateUser, setUpdateUser] = useState({
    RPPS: '',
    SIRET: '',
    address: '',
    birthdate: '',
    country: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: '',
    picture: '',
    role_id: '',
    website: '',
  });
  const userId = localStorage.getItem('USERID');

  const getUser = async () => {
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/profil/${userId}`, {
          userId,
        })
        .then((response) => {
          setUser(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const putUser = async () => {
    await axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/profil/${userId}`, {
        userId,
      })

      .then((response, error) => {
        console.log(error);
        setUpdateUser(response);
      });
  };
  // updateUser : preaparation de la route de mise a jour du profile

  const handleSubmit = (event) => {
    setUpdateUser(event.target.value);
  };
  console.log(updateUser);

  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    history.push('/');
  };

  useEffect(() => {
    getUser();
    putUser();
  }, []);
  return (
    <div className="container_profil">
      {!userId ? (
        history.push('/connexion')
      ) : !user ? (
        <p>loading ...</p>
      ) : (
        <div className="container-form-profil">
          <form className="signInForm" onSubmit={handleSubmit}>
            <div className="container-avatar-text">
              <div className="container-avatar-profil">
                <img className="avatar" src={avatar} alt="avatar" />
              </div>
              <div className="text-top">
                <Form.Group className="container-form-top">
                  <Form.Label className="label-form-profil">Prénom</Form.Label>
                  <Form.Control
                    defaultValue={user[0].firstname}
                    name="firstname"
                    htmlFor="firstname"
                  />
                </Form.Group>
                <Form.Group className="container-form-top">
                  <Form.Label className="label-form-profil">Nom</Form.Label>
                  <Form.Control
                    value={user[0].lastname}
                    name="lastname"
                    htmlFor="lastname"
                  />
                </Form.Group>
                <Form.Group className="container-form-top">
                  <Form.Label className="label-form-profil">Email</Form.Label>
                  <Form.Control
                    value={user[0].email}
                    name="email"
                    htmlFor="email"
                  />
                </Form.Group>
                <Form.Group className="container-form-top">
                  <Form.Label className="label-form-profil">
                    Numéro de téléphone
                  </Form.Label>
                  <Form.Control
                    value={user[0].phone}
                    name="phone"
                    htmlFor="phone"
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">Adresse</Form.Label>
              <Form.Control
                value={user[0].address}
                name="address"
                htmlFor="address"
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">
                Date de naissance
              </Form.Label>
              <Form.Control
                value={user[0].birthdate}
                name="birthdate"
                htmlFor="birthdate"
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">Pays</Form.Label>
              <Form.Control
                value={user[0].country}
                name="country"
                htmlFor="country"
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">Site web</Form.Label>
              <Form.Control
                value={user[0].website}
                name="website"
                htmlFor="website"
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">Numéro RPPS</Form.Label>
              <Form.Control value={user[0].RPPS} name="RPPS" htmlFor="RPPS" />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">Role</Form.Label>
              <Form.Control
                value={user[0].role_id}
                name="role_id"
                htmlFor="role_id"
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">
                Numéro SIRET
              </Form.Label>
              <Form.Control
                value={user[0].SIRET}
                name="SIRET"
                htmlFor="SIRET"
              />
            </Form.Group>
            {/* en attente de pouvoir recuperer envoyer la photo > bdd */}
            {/* <img
          src={user[0].picture}
          alt={user[0].firstname}
          className="style_avatar"
        /> */}
          </form>
        </div>
      )}
      <div className="container_bouton_logout">
        <button type="button" className="bouton_save" onSubmit={handleSubmit}>
          Enregistrer
        </button>

        <button type="button" className="bouton-loyout" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
      <div className="container_bouton">
        <Link to="/documentation-form">
          <button type="button" className="bouton">
            <img
              className="logo-documentation"
              src={document}
              alt="logo doc navbar"
            />
            Créer une documentation
          </button>
        </Link>
        <Link to="/formation-form">
          <button type="button" className="bouton">
            <img
              className="logo-formation"
              src={formation}
              alt="logo formation navbar"
            />
            Créer une formation
          </button>
        </Link>
        <Link to="/service-form">
          <button type="button" className="bouton">
            <img
              className="logo-service"
              src={service}
              alt="logo service navbar"
            />
            Créer un service
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
