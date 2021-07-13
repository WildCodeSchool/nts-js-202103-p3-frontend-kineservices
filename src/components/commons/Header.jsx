import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="container-header">
      <h1 className="title-header">kinés.fr</h1>
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
    </div>
  );
}

export default Header;
