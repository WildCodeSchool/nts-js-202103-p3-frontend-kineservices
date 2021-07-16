import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceItem from './ServiceItem';
import SearchContent from '../commons/SearchContent';
import './ServiceList.css';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/service`)
      .then((response) => {
        setServices(response.data);
      });
  }, []);
  return (
    <>
      <h1 className="allservices">Tous les services</h1>
      <div className="search-engine">
        <h2>Rechercher un service</h2>
        <SearchContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="service-results">
          {services
            .filter(
              (service) =>
                service.title.toLowerCase().includes(searchValue) ||
                service.description.toLowerCase().includes(searchValue)
            )
            .map((service) => {
              return (
                <ServiceItem
                  title={service.title}
                  description={service.description}
                  website={service.website}
                  price={service.price}
                  key={service.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
