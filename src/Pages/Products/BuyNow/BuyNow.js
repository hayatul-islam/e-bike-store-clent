import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
const axios = require('axios');

const BuyNow = () => {

    const { user } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetch(`https://ancient-harbor-23487.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = 'Pending';
        axios.post('https://ancient-harbor-23487.herokuapp.com/addOrder', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('Thank you, Your order done!')
                    history.push('/home')
                }
            })
    };

    return (
        <div >
            <Navigation />
            <div className="py-5 bg-light">
                <p className="text-center fw-bold  py-5">Home \ Products \ Buy now </p>
            </div>
            <Container>
                {/* <h1 className="text-center fw-bold pt-5">Place Order</h1> */}
                <Row className="py-5">
                    <Col xs={12} md={6}>
                        <Image className="img-fluid" src={product?.img}></Image>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className="px-3 py-5 shadow">
                            <Card.Body>
                                <Card.Title className="fs-2">{product?.name}</Card.Title>
                                <Card.Text>
                                    {product?.des}
                                </Card.Text>
                                <Card.Title className="pt-3">Price: ${product?.price}</Card.Title>
                            </Card.Body>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" {...register("name", { required: true })} value={user?.displayName} /> <br />
                                <input className="form-control" {...register("email")} value={user?.email} /> <br />
                                <input className="form-control" {...register("pdName")} value={product?.name} /> <br />
                                <input className="form-control" {...register("address")} placeholder="Your address" /> <br />
                                <input className="form-control" type="number" {...register("phone")} placeholder="Your phone" /> <br />
                                <input className="btn btn-success btn-lg px-5 rounded-pill" type="submit" value="Submit" />
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BuyNow;