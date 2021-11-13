import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating'


const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://ancient-harbor-23487.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="pb-5">
            <Container>
                <div className="text-center pt-5">
                    <p className="p-0 m-0 text-warning fw-bold">TESTIMONIALS </p>
                    <h2>CUSTOMER REVIEWS</h2>
                    <div className="d-flex justify-content-center pb-4">
                        <hr style={{ width: '70px', height: '5px', marginTop: '0px', background: 'black' }} />
                    </div>
                </div>


                <Row>
                    {
                        reviews.map(review => <Col key={review?._id} xs={12} md={4}>
                            <Card className="py-3 my-3">
                                <Card.Body>
                                    <RatingView ratingValue={review?.rating} /* RatingView Props */ />

                                    <Card.Text className="pt-4 pb-3">
                                        {review?.review}
                                    </Card.Text>
                                    <div className="d-flex align-items-center">
                                        <i className="far fa-user-circle fs-1 me-2"></i>
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
        </div>
    );
};

export default Reviews;