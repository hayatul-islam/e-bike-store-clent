import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { googleSignIn, handleUserLogin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || '/';
    // let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        handleUserLogin(data.email, data.password)
        history.replace(redirect_url)
    };



    return (
        <div className="pt-2">
            <Navigation />
            <Container>
                <Row className="pt-3">
                    <Col md={2} lg={3}></Col>
                    <Col xs={12} md={8} lg={5}>
                        <div className="shadow px-3 py-4 mt-5">
                            <h1 className="text-center pb-5 pt-3">Login</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" type="email" {...register("email")} placeholder="Your Email" /> <br />
                                <input className="form-control" type="password" {...register("password")} placeholder="Your Password" /> <br />
                                <input className="btn btn-success btn-lg px-5 rounded-pill" type="submit" value="Login" />
                            </form>

                            <p className="mt-5 text-center">New User? Please, <Link to="/register">Register</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;