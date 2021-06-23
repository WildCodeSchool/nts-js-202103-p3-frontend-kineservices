import React from 'react';
import './Home.css';
import landingPageImage from '../../media/image_home.jpg';

export default function Home() {
  return (
    <div className="home">
      <div className="landing-page-container">
        <div className="landing-page">
          <img src={landingPageImage} alt="landing page" />
        </div>
        <div className="intro">
          <h1>
            Bienvenue sur <h3>Kinés.fr</h3>
          </h1>
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
        <h1>Nos formations</h1>
        <p>Slider</p>
      </div>
      <div className="tarif-container">
        <div>
          <h1>Nos tarifs</h1>
        </div>
        <div className="kine-container">
          <h1>Je suis un kiné</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            sapiente? Est, blanditiis dignissimos, dolor incidunt eaque quo
            aliquam quia tenetur commodi iusto, soluta sunt quibusdam
            recusandae. Itaque incidunt maiores tempora?
          </p>
          <span>C&apos;est gratuit !</span>
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
            <span>10 €/mois</span>
          </h3>
        </div>
        <button type="button" className="signUp">
          Je m&lsquo;inscris !
        </button>
      </div>

      <div>FOOTER</div>
    </div>
  );
}
