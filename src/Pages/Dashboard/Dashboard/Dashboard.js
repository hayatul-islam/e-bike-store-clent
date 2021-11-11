import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import PrivateRoute from '../../Login/PrivateRoute'
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddNewProduct from '../AddNewProduct/AddNewProduct';

const Dashboard = () => {

    const { user } = useAuth();
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Router>
                        <Col xs={3} md={2}>
                            <h2>Dashboard</h2>
                            <Navbar bg="light" expand="lg">
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav className="flex-column">
                                        <Link to="/">Home</Link>
                                        <Link to="/payment">Payment</Link>
                                        <Link to={`/myOrders/${user.email}`}>My Orders</Link>
                                        <Link to="/review">Review</Link>
                                        <Link to="/manageAllOrders">Manage All Orders</Link>
                                        <Link to="/addNewProduct">Add New Product</Link>
                                        <Link to="/makeAdmin">Make Admin</Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                        </Col>
                        <Col xs={9} md={10}>
                            <Switch>
                                <Route exact path="/">

                                </Route>
                                <Route path="/payment">
                                    <Payment />
                                </Route>
                                <Route path="/myOrders/:email">
                                    <MyOrders />
                                </Route>
                                <Route path="/review">
                                    <Review />
                                </Route>
                                <Route path="/makeAdmin">
                                    <MakeAdmin />
                                </Route>
                                <Route path="/addNewProduct">
                                    <AddNewProduct />
                                </Route>
                                <PrivateRoute path="/manageAllOrders">
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