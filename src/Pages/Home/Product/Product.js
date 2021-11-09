import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Product = ({ product }) => {
    const { name, price, img, des } = product;
    return (
        <Col xs={12} md={4}>
            <Card className="text-center my-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {des}
                    </Card.Text>
                    <div className="d-flex justify-content-around align-items-center">
                        <p className="fw-bold fs-5">${price}</p>
                        <Button variant="warning" className="rounded-pill px-4">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;