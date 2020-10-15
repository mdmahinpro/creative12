import React from 'react';
import Container from 'react-bootstrap/Container';
import './Banner.css';
const Banner = () => {
    return (
        <section className="banner">
            <Container className="px-1">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <h1 className="banner-heading mb-6">Let’s Grow Your Brand To The Next Level</h1>
                        <p className="font-rong banner-article mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                        </p>
                        <button className="main-btn">Hire us</button>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img src="https://i.ibb.co/y6M1gFz/Frame.png" alt="Hero-frame" className="img-fluid" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;