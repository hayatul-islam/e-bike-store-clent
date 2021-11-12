import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const Swal = require('sweetalert2')

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.role = 'admin';
        const email = data.email;
        axios.put(`https://ancient-harbor-23487.herokuapp.com/makeAdmin/${email}`, data)
            .then(result => {
                console.log(result.data);
                if (result.data.modifiedCount || result.data.upsertedCount) {
                    Swal.fire(
                        'Successfully!',
                        '',
                        'success'
                    )
                } else if (result.data.matchedCount) {
                    Swal.fire({
                        icon: 'info',
                        text: 'Already Admin, Thank you.'
                    })
                } else {
                    alert('Something is wrang, Please try again!')
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                    })
                }
            })
    }
    return (
        <div className="text-center">
            <h2 className="pb-4">Make an Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="px-3 py-1" {...register("email")} type="email" placeholder="Email" />
                <input className="px-3 py-1 btn-dark" type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;