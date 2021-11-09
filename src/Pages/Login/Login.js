import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";

const Login = () => {
    const { googleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || '/';

    const googleSignIN = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url)
            })

    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Navigation />
            <Container>
                <Row>
                    <Col md={2} lg={3}></Col>
                    <Col xs={12} md={8} lg={5}>
                        <div className="shadow px-3 py-4 mt-5">
                            <h1 className="text-center pb-2">Login</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" type="email" {...register("email")} placeholder="Your Email" /> <br />
                                <input className="form-control" type="password" {...register("password")} placeholder="Your Password" /> <br />
                                <input className="form-control btn btn-success" type="submit" value="Login" />
                            </form>
                            <Button className="mt-3" onClick={googleSignIN}>Google</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;