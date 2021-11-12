import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Home/Product/Product';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://ancient-harbor-23487.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <div className="py-5">
                <Navigation />
                <div className="py-5 bg-light mb-5">
                    <p className="text-center fw-bold py-5">Home \ Products </p>
                </div>
                <Container>
                    <Row>
                        {
                            products.map(product => <Product
                                product={product}
                            ></Product>)
                        }
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Products;