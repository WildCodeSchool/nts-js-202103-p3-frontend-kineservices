import { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState([]);
  const userId = localStorage.getItem('USERID');

  async function getUser() {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}`, { userId })
      .then((response) => {
        setUser(response.data);
      });
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="Container_profil">
      <div>
        <h1>Mon Profil</h1>
      </div>
      <div className="container_image_avatar">
        <div className="texte">
          <div>Date de naissance :{user[0].birthdate}</div>
          <div>email: {user.email}</div>
          <div>prenom : {user.fisrtname}</div>
          <div>nom : {user.lastname}</div>
          <div> (role) :{user.role_id}</div>
          <div> RPPS : {user.RPPS}</div>
          <div>Siret : {user.SIRET}</div>
          <div>Pays : {user.country}</div>
          <div>adresse : {user.adress}</div>
          <div>telephone : {user.phone}</div>
          <div>site web : {user.website}</div>
        </div>
        {/* en attente de pouvoir recuperer envoyer la photo > bdd */}
        {/* <img
          src={user[0].picture}
          alt={user[0].firstname}
          className="style_avatar"
        /> */}
      </div>
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
