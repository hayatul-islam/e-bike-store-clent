import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Rating } from 'react-simple-star-rating'
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
const Swal = require('sweetalert2')

const Review = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(0);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.rating = rating;
        axios.post('https://ancient-harbor-23487.herokuapp.com/review', data)
            .then(result => {
                if (result.data.insertedId) {
                    Swal.fire(
                        'Successfully!',
                        'Thanks you for a review!',
                        'success'
                    )
                    reset()
                }
            })
    };

    const handleRating = (rate) => {
        setRating(rate)
    }
    return (

        <Row>
            <Col xs={12} lg={9}>
                <div className='shadow py-5 px-3'>
                    <div className="text-center pb-5">
                        <i className="fas fa-user-edit fs-2 text-success"></i>
                        <h4>Users Feedback</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" {...register("name", { required: true })} value={user?.displayName} /> <br />
                        <textarea className="form-control" {...register("review", { required: true })} placeholder="Your Review" /> <br />
                        <label htmlFor="">Rating</label> <br />
                        <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ /> <br />
                        <input className="btn btn-success btn-lg px-5 rounded-pill mt-4" type="submit" />
                    </form>
                </div>
            </Col>
            <Col lg={3}></Col>
        </Row>
    );
};

export default Review;