import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceItem from './ServiceItem';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/service`)
      .then((response) => {
        setServices(response.data);
      });
  }, []);
  return (
    <div>
      <h1 className="titreFormation">Tous les services</h1>

      {services.map((service) => {
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
  );
};

export default ServiceList;
