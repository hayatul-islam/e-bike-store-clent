import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5050/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])

    const handleCancel = id => {
        const process = window.confirm('Are You Sure?. You want to delete');
        if (process) {
            axios.delete(`http://localhost:5050/delete/${id}`)
                .then(result => {
                    if (result.data.deletedCount) {
                        alert('Deleted successfully');

                        const remain = myOrders.filter(order => order._id !== id);
                        setMyOrders(remain)
                    }
                })
        }

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