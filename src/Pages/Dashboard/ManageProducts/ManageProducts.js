import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
const Swal = require('sweetalert2')

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch(`https://ancient-harbor-23487.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

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
                axios.delete(`https://ancient-harbor-23487.herokuapp.com/products/${id}`)
                    .then(result => {
                        if (result.data.deletedCount) {

                            const remain = allProducts.filter(product => product._id !== id);
                            setAllProducts(remain)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    return (
        <div style={{ overflow: 'scroll' }}>
            <h3 className="py-3">Manage All Products</h3>
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
                        allProducts.map((product, index) => <tr key={product?._id}>
                            <td className="text-center">{index + 1}</td>
                            <td>{product?.name}</td>
                            <td className="text-center">{product.price}</td>
                            <td className="text-center">
                                <button onClick={() => handleCancel(product._id)} className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default ManageProducts;