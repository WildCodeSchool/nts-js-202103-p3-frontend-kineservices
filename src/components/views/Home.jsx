import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../commons/Footer';
import landingPageImage from '../../media/image_home.jpg';
import Carousel from '../commons/Carousel';

export default function Home() {
  return (
    <div className="home">
      <div className="landing-page-container">
        <div className="landing-page">
          <img src={landingPageImage} alt="landing page" />
        </div>
        <div className="intro">
          <h1>Bienvenue sur Kinés.fr</h1>
          <h3>Qui sommes-nous ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            ducimus earum beatae perferendis deserunt harum atque iure ratione
            pariatur quis. Aliquam, quasi quo est consequatur vel eos veritatis
            quia possimus?
          </p>
        </div>
      </div>
      <div>
        <h1 className="title-home">Les formations</h1>
        <div>
          <Carousel />
        </div>
      </div>
      <div className="tarif-container">
        <div>
          <h1 className="title-home">Nos tarifs</h1>
        </div>
        <div className="kine-container">
          <h1>Je suis un kiné</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            sapiente? Est, blanditiis dignissimos, dolor incidunt eaque quo
            aliquam quia tenetur commodi iusto, soluta sunt quibusdam
            recusandae. Itaque incidunt maiores tempora?
          </p>
          <span className="priceText">Premier mois remboursé !</span>
        </div>
        <hr />
        <div>
          <h1>Je ne suis pas un kiné</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            sapiente? Est, blanditiis dignissimos, dolor incidunt eaque quo
            aliquam quia tenetur commodi iusto, soluta sunt quibusdam
            recusandae. Itaque incidunt maiores tempora?
          </p>
          <h3>
            à partir de <br />
            <span className="priceText">10 €/mois</span>
          </h3>
        </div>
        <Link to="/inscription-kine">
          <button type="button" className="signUp">
            Je m&lsquo;inscris !
          </button>
        </Link>
        <Link to="/connexion">
          <button type="button" className="signIn">
            Je me connecte
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
