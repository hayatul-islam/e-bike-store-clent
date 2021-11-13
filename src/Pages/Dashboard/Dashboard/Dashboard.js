import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    NavLink
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import PrivateRoute from '../../Login/PrivateRoute'
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import axios from 'axios';
import './Dashboard.css';


const Dashboard = () => {

    const { user, logOut } = useAuth();
    const [admin, setAdmin] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get(`https://ancient-harbor-23487.herokuapp.com/checkAdmin/${user?.email}`)
            .then(result => {
                if (result.data[0]?.role === 'admin') {
                    setAdmin(true)
                } else {
                    setAdmin(false)
                }
            })
    }, [user?.email])

    const handleLogOut = () => {
        logOut();
        history.push('/')
    }

    return (
        <div className="py-5">
            <Container>

                <Row>
                    <Link to="/home">Back Home</Link>
                    <Router>
                        <Col xs={12} md={2}>
                            <Navbar className="navbar-container" bg="light" expand="md">
                                <Navbar.Brand href="#home">
                                    <h2>Dashboard</h2>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav className="flex-column">
                                        <Link to="/dashboard"></Link>
                                        {!admin && <>
                                            <NavLink activeClassName="selected" to="/dashboard/payment">Payment</NavLink>
                                            <NavLink activeClassName="selected" to={`/dashboard/myOrders/${user.email}`}>My Orders</NavLink>
                                            <NavLink activeClassName="selected" to="/dashboard/review">Review</NavLink>
                                        </>}

                                        {
                                            admin && <>
                                                <NavLink activeClassName="selected" to="/dashboard/manageAllOrders">Manage Orders</NavLink>
                                                <NavLink activeClassName="selected" to="/dashboard/addNewProduct">Add A Product</NavLink>
                                                <NavLink activeClassName="selected" to="/dashboard/makeAdmin">Make Admin</NavLink>
                                                <NavLink activeClassName="selected" to="/dashboard/manageProducts">Manage Products</NavLink>
                                            </>
                                        }

                                        <Button className="px-2 rounded-pill my-2" variant="outline-info" onClick={handleLogOut}>Log out</Button>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                        </Col>
                        <Col xs={12} md={10}>
                            <Switch>
                                <Route exact path="/dashboard">
                                    <h2>tooo</h2>
                                </Route>
                                <PrivateRoute path="/dashboard/payment">
                                    <Payment />
                                </PrivateRoute>
                                <PrivateRoute path="/dashboard/myOrders/:email">
                                    <MyOrders />
                                </PrivateRoute>
                                <Route path="/dashboard/review">
                                    <Review />
                                </Route>
                                <Route path="/dashboard/makeAdmin">
                                    <MakeAdmin />
                                </Route>
                                <Route path="/dashboard/addNewProduct">
                                    <AddNewProduct />
                                </Route>
                                <Route path="/dashboard/manageProducts">
                                    <ManageProducts />
                                </Route>
                                <PrivateRoute path="/dashboard/manageAllOrders">
                                    <ManageAllOrders />
                                </PrivateRoute>
                            </Switch>
                        </Col>
                    </Router>

                </Row>
            </Container>



        </div>
    );
};

export default Dashboard;