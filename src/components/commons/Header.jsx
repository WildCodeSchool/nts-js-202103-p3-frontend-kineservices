import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const userId = localStorage.getItem('USERID');
  const [user, setUser] = useState(null);
  const getUser = async () => {
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
    if (userId) {
      getUser();
    } else {
      setUser(null);
    }
  }, [userId]);

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

          <div className="header-container-avatar-text">
            <div>
              {user === null ? (
                <p />
              ) : (
                <Link to="/profil">
                  <div>
                    <img
                      className="avatar-profil"
                      src={`${process.env.REACT_APP_BACKEND_URL}/${user.picture}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="avatar-text">
                    {`${user.firstname} ${user.lastname}`}
                  </div>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
