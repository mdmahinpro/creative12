import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/1c9e790a-a96e-4515-bdae-01c052ea75a6')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <Container className="services px-0">
            <h1 className="heading">Providing awesome <span className="unique">services</span></h1>
            <div className="row mt-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;