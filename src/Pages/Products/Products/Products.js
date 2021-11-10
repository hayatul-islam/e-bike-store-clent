import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Home/Product/Product';
import Navigation from '../../Shared/Navigation/Navigation';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className="py-5">
            <Navigation />
            <Container>
                <h1 className="text-center fw-bold text-uppercase py-5">This </h1>
                <Row>
                    {
                        products.map(product => <Product
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;