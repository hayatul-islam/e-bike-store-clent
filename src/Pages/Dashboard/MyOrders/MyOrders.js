import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
const Swal = require('sweetalert2')

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://ancient-harbor-23487.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])


    const handleCancel = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://ancient-harbor-23487.herokuapp.com/delete/${id}`)
                    .then(result => {
                        if (result.data.deletedCount) {
                            const remain = myOrders.filter(order => order._id !== id);
                            setMyOrders(remain)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your Order has been deleted.',
                    'success'
                )
            }
        })

    }
    return (
        <div>
            <h3>My orders</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((order, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{order?.pdName}</td>
                            <td>{order.email}</td>
                            <td>{order?.status}</td>
                            <td>
                                <button onClick={() => handleCancel(order._id)} className="btn btn-danger btn-sm">Cancel</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default MyOrders;