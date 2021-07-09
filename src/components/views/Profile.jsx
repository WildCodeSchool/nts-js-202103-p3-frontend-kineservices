import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import document from '../../media/documentation.svg';
import service from '../../media/service.svg';
import formation from '../../media/formation.svg';
import './Profile.css';

function Profile() {
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
      .then((response) => {
        setUpdateUser(response);
      });
  };
  // updateUser : preaparation de la route de mise a jour du profile
  console.log(updateUser);

  useEffect(() => {
    getUser();
    putUser();
  }, []);

  return (
    <div className="Container_profil">
      {!user ? (
        <p>loading ...</p>
      ) : (
        <Card className="card-profil">
          <Card.Body className="card-body-profil">
            <div className="container_image_avatar">
              <div className="texte">
                <Form.Group className="container-form">
                  <Form.Control value={user[0].firstname} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].lastname} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].email} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].phone} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].address} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].birthdate} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].country} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].website} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].RPPS} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].role_id} />
                </Form.Group>
                <Form.Group className="container-form">
                  <Form.Control value={user[0].SIRET} />
                </Form.Group>
              </div>
              {/* en attente de pouvoir recuperer envoyer la photo > bdd */}
              {/* <img
          src={user[0].picture}
          alt={user[0].firstname}
          className="style_avatar"
        /> */}
            </div>
          </Card.Body>
        </Card>
      )}
      <div className="container_bouton_logout">
        <button type="button" className="bouton_save">
          Enregistrer
        </button>
        <p>Me déconnecter</p>
      </div>
      <div className="container_bouton">
        <Link to="/documentation">
          <button type="button" className="bouton">
            <img
              className="logo-documentation"
              src={document}
              alt="logo doc navbar"
            />
            Créer une documentation
          </button>
        </Link>
        <Link to="/formation">
          <button type="button" className="bouton">
            <img
              className="logo-formation"
              src={formation}
              alt="logo formation navbar"
            />
            Créer une formation
          </button>
        </Link>
        <Link to="/service">
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
