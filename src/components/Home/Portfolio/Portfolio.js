import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: '50px',
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        adaptiveHeight: true,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [portfolioWorks, setPortfolioWorks] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/167771ea-a7bd-4c73-aee9-853ff41db0c7')
            .then(res => res.json())
            .then(data => setPortfolioWorks(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <section id="portfolio">
            <h1 className="heading text-green">Here are some of <span className="unique">our works</span></h1>
            <Slider {...settings} className="container px-0 portfolio-slider">
                {
                    portfolioWorks.map(item =>
                        <div key={item.id}>
                            <img className="portfolio-img" src={item.img} alt="" />
                        </div>
                    )
                }
            </Slider>
        </section>
    );
};

export default Portfolio;