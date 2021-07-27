import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    setUserId(localStorage.getItem('USERID'));
  }, []);
  const getUser = () => {
    try {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/utilisateur/${userId}`, {
          userId,
        })
        .then((response) => {
          setUser(response.data[0]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="container-header">
      {' '}
      <h1 className="title-header">kinés.fr</h1>
      {(!userId && (
        <>
          <div className="container-header-button">
            <Link to="/connexion">
              <button className="button-header-signin" type="button">
                Me connecter
              </button>
            </Link>
            <Link to="/inscription-kine">
              <button className="button-header-signup" type="button">
                M&apos;inscrire
              </button>
            </Link>
          </div>
        </>
      )) || (
        <>
          <div className="container-onglet">
            <Link to="/documentation">
              <button className="onglet" type="button">
                Documentation
              </button>
            </Link>
            <Link to="/formation">
              <button className="onglet" type="button">
                Formation
              </button>
            </Link>
            <Link to="/service">
              <button className="onglet" type="button">
                Service
              </button>
            </Link>
          </div>
          <div>
            {user && (
              <Link to="/profil" className="noAvatar">
                <img
                  className="avatar-profil"
                  src={`${process.env.REACT_APP_BACKEND_URL}/${user.picture}`}
                  alt="avatar"
                />
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
