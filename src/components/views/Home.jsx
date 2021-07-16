import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../commons/Footer';
import Carousel from '../commons/Carousel';

export default function Home() {
  return (
    <div className="home">
      <div className="landing-page-container">
        <div className="intro">
          <h1>Bienvenue sur Kinés.fr</h1>
          <h3>Qui sommes-nous ?</h3>
          <p>
            Kinés.fr est une plateforme collaborative et de partage pour les
            kinésithérapeutes. Elle permet à ces praticiens, et aux
            professionnels en lien avec ce domaine, de proposer de la
            documentation, des formations et des services de façon centralisée.
            Kinés.fr est une plateforme alimentée par et pour les
            kinésithérapeutes.
          </p>
        </div>
      </div>
      <div>
        <h4 className="title-home">Ce que nous proposons</h4>
        <div>
          <Carousel />
        </div>
      </div>
      <div className="tarif-container">
        <div>
          <h1 className="title-home">Nos tarifs</h1>
        </div>
        <div className="kine-container">
          <div className="bubbles" />
          <h1>Je suis un kiné</h1>
          <p>
            Je fais partie de cette catégorie si je suis kinésithérapeute et que
            je possède donc mon numéro RPPS ou que je possède une entreprise,
            quelle qu’elle soit (au niveau du statut juridique et du chiffre
            d’affaire). Par exemple : kinésithérapeute en libéral,
            kinésithérapeute hospitalier, kinésithérapeute ayant créé une
            micro-entreprise, kinésithérapeute ayant créé une SARL.
          </p>
          <span className="titre">Gratuit !</span>
        </div>
        <hr />
        <div>
          <h1>Je ne suis pas un kiné</h1>
          <p>
            Je fais partie de cette catégorie et bénéficie du tarif de
            <strong> 10€ par mois</strong> si je ne suis pas kinésithérapeute.
            Mon statut juridique est : libéral, auto-entrepreneur ou entreprise
            individuelle. Par exemple : rédacteur web, graphiste, comptable,
            avocat, photographe, conseillé financier, informaticien… Si je
            possède une entreprise de plus de 2 salariés (entreprise vendant du
            matériel médical, entreprise de logiciel de comptabilité, de prise
            de rendez-vous…) mon abonnement est de <strong>50€ par mois</strong>
            .
          </p>
          <h3>
            à partir de <br />
            <span className="priceText">10 €/mois</span>
          </h3>
          <span className="titre">Premier mois remboursé</span>
        </div>
        <Link to="/inscription-kine">
          <button type="button" className="bouton-inscription">
            Je m&apos;inscris !
          </button>
        </Link>
        <Link to="/connexion">
          <button type="button" className="bouton-connexion">
            Je me connecte
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
