import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentationItem from './DocumentationItem';
import ServiceItem from './ServiceItem';
import FormationItem from './FormationItem';
import SearchContent from '../commons/SearchContent';
import './DocumentationList.css';
import './GlobalSearch.css';

const DocumentationList = () => {
  const [documentations, setDocumentations] = useState([]);
  const [services, setServices] = useState([]);
  const [formations, setFormations] = useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const requestDocumentation = `${process.env.REACT_APP_BACKEND_URL}/documentation`;
  const requestFormation = `${process.env.REACT_APP_BACKEND_URL}/formation`;
  const requestService = `${process.env.REACT_APP_BACKEND_URL}/service`;
  const requestOne = axios.get(requestDocumentation);
  const requestTwo = axios.get(requestFormation);
  const requestThree = axios.get(requestService);

  useEffect(async () => {
    try {
      await axios
        .all([requestOne, requestTwo, requestThree])
        .then((responses) => {
          setDocumentations(responses[0].data);
          setFormations(responses[0].data);
          setServices(responses[0].data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <h1 className="title-general">Recherche globale</h1>
      <div className="search-engine-general">
        <h2 className="general-search">
          Rechercher une documentation, une formation ou un service
        </h2>
        <SearchContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {!searchValue ? (
          <p />
        ) : (
          documentations
            .filter(
              (documentation) =>
                documentation.title.toLowerCase().includes(searchValue) ||
                documentation.description.toLowerCase().includes(searchValue)
            )
            .map((documentation) => (
              <p>
                <DocumentationItem
                  title={documentation.title}
                  description={documentation.description}
                  category={documentation.name}
                  price={documentation.price}
                  key={documentation.id}
                />
              </p>
            ))
        )}
        {!searchValue ? (
          <p />
        ) : (
          formations
            .filter(
              (formation) =>
                formation.title.toLowerCase().includes(searchValue) ||
                formation.description.toLowerCase().includes(searchValue)
            )
            .map((formation) => (
              <p>
                <FormationItem
                  title={formation.title}
                  description={formation.description}
                  category={formation.name}
                  date={formation.date}
                  website={formation.website}
                  price={formation.price}
                  key={formation.id}
                />
              </p>
            ))
        )}
        {!searchValue ? (
          <p />
        ) : (
          services
            .filter(
              (service) =>
                service.title.toLowerCase().includes(searchValue) ||
                service.description.toLowerCase().includes(searchValue)
            )
            .map((service) => (
              <p>
                <ServiceItem
                  title={service.title}
                  description={service.description}
                  category={service.name}
                  website={service.website}
                  price={service.price}
                  key={service.id}
                />
              </p>
            ))
        )}
      </div>
    </>
  );
};

export default DocumentationList;
