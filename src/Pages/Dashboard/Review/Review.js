import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Rating } from 'react-simple-star-rating'
import axios from 'axios';

const Review = () => {
    const [rating, setRating] = useState(0);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.rating = rating;
        axios.post('http://localhost:5050/review', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('Thanks you for a review');
                    reset()
                }
            })
    };

    const handleRating = (rate) => {
        setRating(rate)
    }
    return (
        <div>
            <h3>Review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" {...register("name")} placeholder="Your Name" /> <br />
                <textarea className="form-control" {...register("review")} placeholder="Your Review" /> <br />
                <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                <input className="form-control" type="submit" />
            </form>
        </div>
    );
};

export default Review;