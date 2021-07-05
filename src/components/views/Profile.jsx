import { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [updateUSer, setUpdateUser] = useState(null);
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
    console.log(updateUSer);
  };

  useEffect(() => {
    getUser();
    putUser();
  }, []);
  console.log(user);
  return (
    <div className="Container_profil">
      <div>
        <h1>Mon Profil</h1>
      </div>
      {!user ? (
        <p>loading ...</p>
      ) : (
        <div className="container_image_avatar">
          <div className="texte">
            <div>Date de naissance :{user[0].birthdate}</div>
            <div>email: {user[0].email}</div>
            <div>prenom : {user[0].firstname}</div>
            <div>nom : {user[0].lastname}</div>
            <div> (role) :{user[0].role_id}</div>
            <div> RPPS : {user[0].RPPS}</div>
            <div>Siret : {user[0].SIRET}</div>
            <div>Pays : {user[0].country}</div>
            <div>adresse : {user[0].address}</div>
            <div>telephone : {user[0].phone}</div>
            <div>site web : {user[0].website}</div>
          </div>
          {/* en attente de pouvoir recuperer envoyer la photo > bdd */}
          {/* <img
          src={user[0].picture}
          alt={user[0].firstname}
          className="style_avatar"
        /> */}
        </div>
      )}
      <div className="container_bouton">
        <button type="button" className="bouton">
          Partager mes connaissances
        </button>
        <button type="button" className="bouton">
          Partager mes fomrations
        </button>
        <button type="button" className="bouton">
          Partager mes services
        </button>
      </div>
    </div>
  );
}

export default Profile;
