import './SignUpSummary.css';

const SignUpSummary = () => {
  return (
    <div className="container">
      <div className="kine">
        <h1>Je suis kinésithérapeute</h1>
        <ul>
          <li>Vous avez un numéro RPPS</li>
          <li>Vous posséder une entreprise</li>
        </ul>
        <button type="button" className="bouton">
          M&apos;inscrire
        </button>
      </div>
      <div className="pasKine">
        <h1 className="titre">Je ne suis pas kinésithérapeute</h1>
        <p>Votre statut juridique est soit:</p>
        <ul>
          <li>Libéral</li>
          <li>Auto-entrepreneur</li>
          <li>Entreprise individuelle</li>
        </ul>
        <button type="button" className="bouton">
          M&apos;inscrire
        </button>
        <p>1er mois d&apos;essai gratuit</p>
        <p>Abonnement à 10€/mois</p>
      </div>
      <div className="supa2">
        <p>Vous êtes une entreprise de plus de 2 salariés</p>
        <button type="button" className="bouton">
          M&apos;inscrire
        </button>
      </div>
      <div className="none">
        <p>
          Je n&apos;ai pas de numéro RPPS ni de SIRET ? <br />
          Je contacte adminkine@gmail.com
        </p>
      </div>
    </div>
  );
};

export default SignUpSummary;
