import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './Brands.css';

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/cf1d5e3e-ee9c-4b37-872b-44ca1f0ed134')
            .then(res => res.json())
            .then(data => setBrands(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <Container className="brands px-0">
            <div className="row">
                <div className="col-md-11 offset-md-1">
                    <div className="d-flex justify-content-between align-items-center">
                        {
                            brands.map(brand =>
                                <img key={brand.id} className="brands-image img-fluid" src={brand.img} alt="icon" />
                            )
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Brands;