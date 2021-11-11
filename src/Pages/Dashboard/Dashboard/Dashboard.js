import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
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
                        <Col xs={2}>
                            <h2>Dashboard</h2>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/payment">Payment</Link>
                                </li>
                                <li>
                                    <Link to={`/myOrders/${user.email}`}>My Orders</Link>
                                </li>
                                <li>
                                    <Link to="/review">Review</Link>
                                </li>

                            </ul>
                        </Col>
                        <Col xs={10}>
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