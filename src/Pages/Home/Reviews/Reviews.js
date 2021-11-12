import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://ancient-harbor-23487.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <div className="text-center py-5">
                <p className="p-0 m-0 text-warning fw-bold">TESTIMONIALS </p>
                <h2>CUSTOMER REVIEWS</h2>
            </div>
            <Row>
                {
                    reviews.map(review => <Col>
                        <Card className="py-3">
                            <Card.Body>
                                <RatingView ratingValue={review?.rating} /* RatingView Props */ />

                                <Card.Text className="pt-4 pb-3">
                                    {review?.review}
                                </Card.Text>
                                <div className="d-flex align-items-center">
                                    <i class="far fa-user-circle fs-1 me-2"></i>
                                    <div className="ps-3">
                                        <Card.Title className="p-0 m-0 fw-bold">{review?.name}</Card.Title>
                                        <span className="p-0 m-0">CUSTOMER</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)
                }

            </Row>
        </Container>
    );
};

export default Reviews;