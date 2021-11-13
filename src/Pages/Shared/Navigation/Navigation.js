import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';


const Navigation = () => {

    const { user, logOut } = useAuth();
    const signOut = () => {
        logOut()
    }

    return (
        <Navbar className="pt-2" bg="light" expand="lg" sticky="top" >
            <Container>
                <Navbar.Brand href="#home">
                    <Image className="nav-logo" src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/logo.png?v=1585015777"></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink activeClassName="selected" to="/home">Home</NavLink>
                        <NavLink activeClassName="selected" to="/products">Products</NavLink>
                        {
                            user?.email && <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
                        }
                    </Nav>
                    {
                        user?.email && <div className="d-flex align-items-center me-3">
                            <i className="fas fa-user-circle fs-4 text-info me-2"></i> {user?.displayName} </div>
                    }
                    {
                        user?.email ? <a onClick={signOut}><i className="fas fa-sign-out-alt text-info"></i> Log out</a> :
                            <NavLink to="/login">
                                <i className="fas fa-sign-in-alt"></i> Login/Register
                            </NavLink>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;