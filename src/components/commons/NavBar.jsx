import React from 'react';
import { Link } from 'react-router-dom';
import document from '../../media/document.png';
import explorer from '../../media/explorer.svg';
import service from '../../media/service.svg';
import formation from '../../media/formation.svg';
import profil from '../../media/profil.svg';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/global-search">
        <img
          className="logo-navbar"
          src={explorer}
          alt="logo globalsearch navbar"
        />
      </Link>
      <Link to="/service">
        <img className="logo-navbar" src={service} alt="logo service navbar" />
      </Link>
      <Link to="/doc">
        <img className="logo-navbar" src={document} alt="logo doc navbar" />
      </Link>
      <Link to="/training">
        <img
          className="logo-navbar"
          src={formation}
          alt="logo formation navbar"
        />
      </Link>
      <Link to="/user">
        <img className="logo-navbar" src={profil} alt="logo user navbar" />
      </Link>
    </div>
  );
}

export default NavBar;
