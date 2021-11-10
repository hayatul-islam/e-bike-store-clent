import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const axios = require('axios');

const BuyNow = () => {

    const { user } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5050/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = 'Pending';
        axios.post('http://localhost:5050/addOrder', data)
            .then(result => console.log(result))
    };

    return (
        <div className="py-5">
            <Container>
                <h1 className="text-center fw-bold pb-5">Shop</h1>
                <Row>
                    <Col xs={12} md={6}>
                        <Image className="img-fluid" src={product?.img}></Image>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className="px-3 py-5 shadow">
                            <Card.Body>
                                <Card.Title>{product?.name}</Card.Title>
                                <Card.Text>
                                    {product?.des}
                                </Card.Text>
                                <Card.Title>Price: ${product?.price}</Card.Title>
                            </Card.Body>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" {...register("name", { required: true })} value={user?.name} /> <br />
                                <input className="form-control" {...register("email")} value={user?.email} /> <br />
                                <input className="form-control" {...register("pdName")} value={product?.name} /> <br />
                                <input className="form-control" {...register("address")} placeholder="Your address" /> <br />
                                <input className="form-control" type="number" {...register("phone")} placeholder="Your phone" /> <br />
                                <input className="form-control" type="submit" />
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BuyNow;