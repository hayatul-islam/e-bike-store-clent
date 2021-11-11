import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5050/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [user?.email]);

    const handleCancel = id => {
        const process = window.confirm('Are You Sure?. You want to delete');
        if (process) {
            axios.delete(`http://localhost:5050/delete/${id}`)
                .then(result => {
                    if (result.data.deletedCount) {
                        alert('Deleted successfully');

                        const remain = allOrders.filter(order => order._id !== id);
                        setAllOrders(remain)
                    }
                })
        }

    }
    return (
        <div>
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
                                {order.status}
                            </td>
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