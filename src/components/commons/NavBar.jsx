import React from 'react';
import { Link } from 'react-router-dom';
import doc from '../../media/doc.png';
import search from '../../media/search.png';
import service from '../../media/service.png';
import formation from '../../media/formation.png';
import maison from '../../media/maison.png';
import user from '../../media/user.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/global-search">
        <img
          className="logo-navbar"
          src={search}
          alt="logo globalsearch navbar"
        />
      </Link>
      <Link to="/service">
        <img className="logo-navbar" src={service} alt="logo service navbar" />
      </Link>
      <Link to="/doc">
        <img className="logo-navbar" src={doc} alt="logo doc navbar" />
      </Link>
      <Link to="/training">
        <img
          className="logo-navbar"
          src={formation}
          alt="logo formation navbar"
        />
      </Link>
      <Link to="/home">
        <img className="logo-navbar" src={maison} alt="logo home navbar" />
      </Link>
      <Link to="/user">
        <img className="logo-navbar" src={user} alt="logo user navbar" />
      </Link>
    </div>
  );
}

export default NavBar;
