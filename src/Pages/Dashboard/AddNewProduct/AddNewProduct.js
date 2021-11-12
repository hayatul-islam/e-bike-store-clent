import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
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
        <div className="py-5">
            <h2 className="pb-5 text-center">Add a New Product</h2>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("name", { required: true })} placeholder="Product Name" /> <br />
                    <input className="form-control" {...register("img", { required: true })} placeholder="Image Url" /> <br />
                    <textarea className="form-control" {...register("des", { required: true })} placeholder="Description" /> <br />
                    <input className="form-control" type="number" {...register("price", { required: true })} placeholder="Price" /> <br />
                    <div className="text-center">
                        <input className="btn btn-primary btn-lg" type="submit" value="Add a New Product" />
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default AddNewProduct;