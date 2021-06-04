import './Documentation.css';

const Documentation = () => {
  const docInfo = {
    image:
      'https://cdn.pixabay.com/photo/2017/03/10/17/04/physiotherapy-2133286_960_720.jpg',
    name: 'Le pieds dans tous ses états',
    description:
      'Découvrez le pied à travers les ages; comment le soignaient les kinésythérapeutes du XIXe siècle à nos jours',
    author: 'Emile Latouche',
    price: '10,40',
  };

  return (
    <div>
      <h1 className="title-contenu">Supports pédagogiques :</h1>
      <div className="doc-container">
        <img src={docInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{docInfo.name}</h2>
        <p className="author">{docInfo.author}</p>
        <p className="description">{docInfo.description}</p>
        <p className="price">{docInfo.price} €</p>
      </div>
      <div className="doc-container">
        <img src={docInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{docInfo.name}</h2>
        <p className="author">{docInfo.author}</p>
        <p className="description">{docInfo.description}</p>
        <p className="price">{docInfo.price} €</p>
      </div>
      <div className="doc-container">
        <img src={docInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{docInfo.name}</h2>
        <p className="author">{docInfo.author}</p>
        <p className="description">{docInfo.description}</p>
        <p className="price">{docInfo.price} €</p>
      </div>
      <div className="doc-container">
        <img src={docInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{docInfo.name}</h2>
        <p className="author">{docInfo.author}</p>
        <p className="description">{docInfo.description}</p>
        <p className="price">{docInfo.price} €</p>
      </div>
      <div className="doc-container">
        <img src={docInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{docInfo.name}</h2>
        <p className="author">{docInfo.author}</p>
        <p className="description">{docInfo.description}</p>
        <p className="price">{docInfo.price} €</p>
      </div>
      <div className="doc-container">
        <img src={docInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{docInfo.name}</h2>
        <p className="author">{docInfo.author}</p>
        <p className="description">{docInfo.description}</p>
        <p className="price">{docInfo.price} €</p>
      </div>
      <div className="doc-container">
        <img src={docInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{docInfo.name}</h2>
        <p className="author">{docInfo.author}</p>
        <p className="description">{docInfo.description}</p>
        <p className="price">{docInfo.price} €</p>
      </div>
    </div>
  );
};

export default Documentation;
