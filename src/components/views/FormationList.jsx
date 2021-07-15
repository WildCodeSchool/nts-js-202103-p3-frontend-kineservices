import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormationItem from './FormationItem';
import SearchContent from '../commons/SearchContent';
import './FormationList.css';

function FormationList() {
  const [formations, setFormations] = useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/formation`)
      .then((response) => {
        setFormations(response.data);
      }, []);
  });
  return (
    <>
      <h1 className="allformations">Toutes les formations</h1>
      <div className="search-engine">
        <h2>Rechercher une formation</h2>
        <SearchContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="formation-results">
          {formations
            .filter(
              (formation) =>
                formation.title.toLowerCase().includes(searchValue) ||
                formation.description.toLowerCase().includes(searchValue) ||
                formation.name.toLowerCase().includes(searchValue)
            )
            .map((formation) => {
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
      </div>
    </>
  );
}

export default FormationList;
