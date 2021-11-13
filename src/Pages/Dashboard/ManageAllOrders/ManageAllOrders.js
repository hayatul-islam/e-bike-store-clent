import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
const Swal = require('sweetalert2')

const MyOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`https://ancient-harbor-23487.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders]);

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
            axios.delete(`https://ancient-harbor-23487.herokuapp.com/delete/${id}`)
                .then(result => {
                    if (result.data.deletedCount) {

                        const remain = allOrders.filter(order => order._id !== id);
                        setAllOrders(remain)
                    }
                })
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your Orders has been deleted.',
                    'success'
                )
            }
        })

    }


    const statusUpdate = id => {
        const status = 'Shipped';
        fetch(`https://ancient-harbor-23487.herokuapp.com/statusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };




    return (
        <div style={{ overflow: 'scroll' }}>
            <h3>All orders</h3>
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
                        allOrders.map((order, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{order?.pdName}</td>
                            <td>{order.email}</td>
                            <td>
                                {
                                    order?.status === 'Shipped' ?
                                        <button disabled className="btn btn-success" onClick={() => statusUpdate(order?._id)}>{order?.status}</button>
                                        :
                                        <button className="btn btn-success" onClick={() => statusUpdate(order?._id)}>{order?.status}</button>
                                }

                            </td>
                            <td>
                                <button onClick={() => handleCancel(order._id)} className="btn btn-danger btn-sm">Remove</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default MyOrders;