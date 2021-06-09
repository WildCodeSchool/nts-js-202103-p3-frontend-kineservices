import './Profile.css';

function Profile() {
  const info = {
    nom: 'nom',
    naissance: '08/07/1995',
    email: 'exemple@gmail.com',
    pseudo: 'pseudo',
    profession: 'profession',
    RPPS: 11197333328,
    Pays: 'France',
    Adresse: 'adresse',
    Tel: '0647584558',
    site: 'www.nomsite.fr',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
  };

  return (
    <div className="Container_profil">
      <div>
        <h1>Mon Profil</h1>
      </div>
      <div className="container_image_avatar">
        <div className="texte">
          <div>{info.naissance}</div>
          <div>{info.email}</div>
          <div>{info.pseudo}</div>
          <div>{info.profession}</div>
          <div>{info.RPPS}</div>
          <div>{info.Pays}</div>
          <div>{info.Adresse}</div>
          <div>{info.Tel}</div>
          <div>{info.site}</div>
        </div>
        <img src={info.avatar} alt={info.nom} className="style_avatar" />
      </div>
      <div className="container_bouton">
        <button type="button" className="bouton">
          Partager mes connaissances
        </button>
        <button type="button" className="bouton">
          Partager mes fomrations
        </button>
        <button type="button" className="bouton">
          Partager mes services
        </button>
      </div>
    </div>
  );
}

export default Profile;
