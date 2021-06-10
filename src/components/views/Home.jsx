import React from 'react';
import './Home.css';
import tarif from './temp/wix-prix-business.jpg';

export default function Home() {
  return (
    <div className="home">
      {/* <Header /> */}
      {/* <Navbar /> */}

      <p>
        Bienvenue sur <h3>Kiné.fr</h3>
      </p>

      <h3>Qui sommes-nous</h3>
      <p className="intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus
        earum beatae perferendis deserunt harum atque iure ratione pariatur
        quis. Aliquam, quasi quo est consequatur vel eos veritatis quia
        possimus?
      </p>
      <hr />
      <h6>slider</h6>
      <hr />
      <p>Interessé ?</p>
      <img className="prices" alt="" src={tarif} />
      <button type="button" className="signUp">
        Je m&lsquo;inscris
      </button>

      <div>FOOTER</div>
    </div>
  );
}
