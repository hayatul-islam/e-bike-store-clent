import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.role = 'admin';
        const email = data.email;
        axios.put(`http://localhost:5050/makeAdmin/${email}`, data)
            .then(result => {
                console.log(result.data);
            })
    }
    return (
        <div>
            <h2>Make A Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} type="email" placeholder="Email" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;