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
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';

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
                            </Switch>
                        </Col>
                    </Router>
                </Row>
            </Container>



        </div>
    );
};

export default Dashboard;