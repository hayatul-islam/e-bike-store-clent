import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('https://ancient-harbor-23487.herokuapp.com/addProduct', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('Added a new product!')
                }
            })
    }
    return (
        <div className="pb-5 ">
            <Container>
                <Row>
                    <Col xs={12} lg={8}>
                        <div className="shadow py-5 px-3">
                            <h2 className="pb-5 text-center">Add a New Product</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" {...register("name", { required: true })} placeholder="Product Name" /> <br />
                                <input className="form-control" {...register("img", { required: true })} placeholder="Image Url" /> <br />
                                <textarea className="form-control" {...register("des", { required: true })} placeholder="Description" /> <br />
                                <input className="form-control" type="number" {...register("price", { required: true })} placeholder="Price" /> <br />
                                <div className="">
                                    <input className="btn btn-success btn-lg px-5 rounded-pill" type="submit" value="Add a New Product" />
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddNewProduct;