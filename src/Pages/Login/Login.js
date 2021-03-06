import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { handleUserLogin, error } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        handleUserLogin(data.email, data.password, location, history)

    };

    return (
        <div className="pt-2">
            <Navigation />
            <Container>
                <Row className="pt-3">
                    <Col md={2} lg={3}></Col>
                    <Col xs={12} md={8} lg={5}>
                        <div className="shadow px-4 py-4 mt-5">
                            <div className="text-center pb-5 pt-3">
                                <img style={{ height: '40px' }} className="img-fluid" src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/logo.png?v=1585015777" />
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" type="email" {...register("email")} placeholder="Email address" /> <br />
                                <input className="form-control" type="password" {...register("password")} placeholder="Password" /> <br />
                                <input className="btn btn-success btn-lg px-5 rounded-pill form-control" type="submit" value="Login" />
                            </form>
                            <p className="text-center pt-3 text-danger">{error}</p>
                            <p className="mt-5 text-center">New User? Please, <Link to="/register">Register</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;