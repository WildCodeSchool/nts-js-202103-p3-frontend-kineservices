import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FormationItem from './FormationItem';

function FormationList() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/formation`)
      .then((response) => {
        setFormations(response.data);
      }, []);
  });
  return (
    <div>
      <h1 className="titreFormation">Toutes les formations</h1>
      {formations.map((formation) => {
        return (
          <FormationItem
            title={formation.title}
            description={formation.description}
            category={formation.name}
            date={formation.date}
            website={formation.website}
            price={formation.price}
            key={formation.id}
          />
        );
      })}
    </div>
  );
}

export default FormationList;
