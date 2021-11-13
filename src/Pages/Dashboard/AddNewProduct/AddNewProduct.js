import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const Swal = require('sweetalert2')

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://ancient-harbor-23487.herokuapp.com/addProduct', data)
            .then(result => {
                if (result.data.insertedId) {
                    Swal.fire(
                        'Successfully!',
                        'Add a new Product!',
                        'success'
                    )
                    reset()
                }
            })
    }
    return (
        <div className="pb-5 pt-4">

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

            </Row>

        </div>
    );
};

export default AddNewProduct;