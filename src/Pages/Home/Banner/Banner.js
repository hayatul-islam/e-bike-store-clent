import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css';

const Banner = () => {

    const history = useHistory();
    const handleShop = () => {
        history.push('/products')
    }
    return (
        <div className="banner-section d-flex justify-content-center align-items-center">
            <Container>
                <Row>
                    <Col xs={12} md={6}>

                        <div className="text-center">
                            <h1 className="banner-title">All E-Bike</h1>
                            <p className="fs-4">One Electronic Bike That Does It All</p>
                            <Button onClick={handleShop} variant="light" className="btn btn-lg btn-outline-dark rounded-pill px-5 mt-3"> Shop Now</Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;