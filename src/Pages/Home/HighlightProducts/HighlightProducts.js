import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const HighlightProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/products')
            .then(res => res.json())
            .then(data => {
                const slice = data.slice(0, 6);
                setProducts(slice)
            })
    }, [])
    return (
        <div className="py-5">
            <Container>
                <h1 className="text-center fw-bold text-uppercase py-5">Best E-Bike</h1>
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

export default HighlightProducts;