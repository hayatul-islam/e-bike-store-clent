import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageProducts = () => {

    const { user } = useAuth();
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch(`https://ancient-harbor-23487.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    const handleCancel = id => {
        const process = window.confirm('Are You Sure?. You want to delete');
        if (process) {
            axios.delete(`https://ancient-harbor-23487.herokuapp.com/products/${id}`)
                .then(result => {
                    if (result.data.deletedCount) {
                        alert('Remove successfully');
                        const remain = allProducts.filter(product => product._id !== id);
                        setAllProducts(remain)
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
                        <th className="text-center">#</th>
                        <th>Product Name</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts.map((product, index) => <tr>
                            <td className="text-center">{index + 1}</td>
                            <td>{product?.name}</td>
                            <td className="text-center">{product.price}</td>
                            <td className="text-center">
                                <button onClick={() => handleCancel(product._id)} className="btn btn-danger btn-sm">Remove</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default ManageProducts;