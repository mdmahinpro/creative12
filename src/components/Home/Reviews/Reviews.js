import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Review from '../Review/Review';
import Container from 'react-bootstrap/Container';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/6d1ed017-080f-4f84-a686-a15c236e310a')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Container className="reviews">
            <h1 className="heading">
                Clients <span className="unique">Feedback</span>
            </h1>
            <div className="row mt-6">
                {
                    reviews.map((review) => <Review review={review}></Review>)
                }
            </div>
        </Container>
    );
};

export default Reviews;