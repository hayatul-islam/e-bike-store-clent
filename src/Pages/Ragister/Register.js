import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Register = () => {

    const { handleUserRegister } = useAuth();
    // const history = useHistory();
    // const location = useLocation();
    // const redirect_url = location?.state?.from || '/';



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        handleUserRegister(data.email, data.password);
        console.log(data);
    };

    return (
        <div>
            <Navigation />
            <Container>
                <Row>
                    <Col md={2} lg={3}></Col>
                    <Col xs={12} md={8} lg={5}>
                        <div className="shadow px-3 py-4 mt-5">
                            <h1 className="text-center pb-2">Register</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="form-control  input-field"
                                    name="name"
                                    type="text" {...register("name")}
                                    placeholder="Your Name" /> <br />
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email" {...register("email")}
                                    placeholder="Your Email" /> <br />
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password" {...register("password")}
                                    placeholder="Password" /> <br />
                                <input
                                    className="form-control btn btn-success"
                                    type="submit"
                                    value="Register" />
                            </form>
                            <p className="pt-4 text-center">I have Already Account. Please, <Link to="/login">Login</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;