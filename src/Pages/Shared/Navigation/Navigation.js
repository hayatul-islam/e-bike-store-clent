import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';


const Navigation = () => {

    const { user, logOut } = useAuth();

    const signOut = () => {
        logOut()
    }


    return (

        <Navbar className="mt-3" bg="light" expand="lg" sticky="top" >
            <Container>
                <Navbar.Brand href="#home">
                    <Image className="nav-logo" src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/logo.png?v=1585015777"></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink activeClassName="nav-active" to="/">Home</NavLink>
                        <NavLink activeClassName="nav-active" to="/about">About</NavLink>
                    </Nav>
                    {
                        user?.email ? <Button className="btn btn-outline-dark" onClick={signOut}>Log out</Button> :
                            <NavLink to="/login">
                                <Button className="btn btn-dark rounded-pill">Login</Button>
                            </NavLink>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;