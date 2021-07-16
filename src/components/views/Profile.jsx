/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import document from '../../media/documentation.svg';
import service from '../../media/service.svg';
import formation from '../../media/formation.svg';

import './Profile.css';

function Profile() {
  const history = useHistory(null);
  const [user, setUser] = useState(null);
  const id = localStorage.getItem('USERID');
  const [updateUser, setUpdateUser] = useState({
    firstname: '',
    lastname: '',
    SIRET: 0,
    address: '',
    birthdate: '',
    country: '',
    email: '',
    RPPS: 0,
    password: '',
    phone: 0,
    picture: '',
    role_id: '',
    website: '',
    id,
  });

  const getUser = async () => {
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/profil/${id}`, {
          id,
        })
        .then((response) => {
          if (id !== null) {
            const date = response.data[0].birthdate;
            const dateParsed = new Date(date);
            const dateFormated = dateParsed.toLocaleDateString('fr-FR');
            response.data[0].birthdate = dateFormated;
            setUser(response.data[0]);
            setUpdateUser(response.data[0]);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/profil`, {
        updateUser,
      })

      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Votre profil a été mise à jour !',
            showConfirmButton: false,
            timer: 3000,
          })
        );
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USERID');
    history.push('/');
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container_profil">
      {!id ? (
        history.push('/connexion')
      ) : !user ? (
        <p>loading ...</p>
      ) : (
        <div className="container-form-profil">
          <form className="signInForm" onSubmit={handleSubmit}>
            <div className="container-avatar-text">
              <div className="container-avatar-profil">
                <img
                  className="avatar"
                  src={`${process.env.REACT_APP_BACKEND_URL}/${user.picture}`}
                  alt={user.firstname + user.lastname}
                />
              </div>
              <div className="text-top">
                <Form.Group className="container-form-top">
                  <Form.Label className="label-form-profil">Prénom</Form.Label>
                  <Form.Control
                    defaultValue={user.firstname}
                    name="firstname"
                    htmlFor="firstname"
                    onChange={(event) => {
                      setUpdateUser({
                        ...updateUser,
                        firstname: event.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="container-form-top">
                  <Form.Label className="label-form-profil">Nom</Form.Label>
                  <Form.Control
                    defaultValue={user.lastname}
                    name="lastname"
                    htmlFor="lastname"
                    onChange={(event) => {
                      setUpdateUser({
                        ...updateUser,
                        lastname: event.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="container-form-top">
                  <Form.Label className="label-form-profil">Email</Form.Label>
                  <Form.Control
                    defaultValue={user.email}
                    name="email"
                    htmlFor="email"
                    onChange={(event) => {
                      setUpdateUser({
                        ...updateUser,
                        email: event.target.value || user.email,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="container-form-top">
                  <Form.Label className="label-form-profil">
                    Numéro de téléphone
                  </Form.Label>
                  <Form.Control
                    defaultValue={user.phone}
                    name="phone"
                    htmlFor="phone"
                    onChange={(event) => {
                      setUpdateUser({
                        ...updateUser,
                        phone: event.target.value || user.phone,
                      });
                    }}
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">Adresse</Form.Label>
              <Form.Control
                defaultValue={user.address}
                name="address"
                htmlFor="address"
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    address: event.target.value || user.address,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">
                Date de naissance
              </Form.Label>
              <Form.Control
                defaultValue={user.birthdate}
                name="birthdate"
                htmlFor="birthdate"
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    birthdate: event.target.value || user.birthdate,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">Pays</Form.Label>
              <Form.Control
                defaultValue={user.country}
                name="country"
                htmlFor="country"
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    country: event.target.value || user.country,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">Site web</Form.Label>
              <Form.Control
                defaultValue={user.website}
                name="website"
                htmlFor="website"
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    website: event.target.value || user.website,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">Numéro RPPS</Form.Label>
              <Form.Control
                defaultValue={user.RPPS}
                name="RPPS"
                htmlFor="RPPS"
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    RPPS: event.target.value || user.RPPS,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="container-form-text">
              <Form.Label className="label-form-profil">
                Numéro SIRET
              </Form.Label>
              <Form.Control
                defaultValue={user.SIRET}
                name="SIRET"
                htmlFor="SIRET"
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    SIRET: event.target.value || user.SIRET,
                  });
                }}
              />
            </Form.Group>
          </form>
        </div>
      )}
      <div className="container_bouton_logout">
        <button type="button" className="bouton_save" onClick={handleSubmit}>
          Enregistrer
        </button>
      </div>
      <div className="container_bouton">
        <button type="button" className="bouton-logout" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
      <div className="container_bouton">
        <Link to="/documentation-form">
          <button type="button" className="bouton-creation">
            <img
              className="logo-documentation"
              src={document}
              alt="logo doc navbar"
            />
            Créer une documentation
          </button>
        </Link>
        <Link to="/formation-form">
          <button type="button" className="bouton-creation">
            <img
              className="logo-formation"
              src={formation}
              alt="logo formation navbar"
            />
            Créer une formation
          </button>
        </Link>
        <Link to="/service-form">
          <button type="button" className="bouton-creation">
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
