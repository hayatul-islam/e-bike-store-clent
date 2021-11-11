import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
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


const Dashboard = () => {

    const { user, logOut } = useAuth();
    const [admin, setAdmin] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5050/checkAdmin/${user?.email}`)
            .then(result => {
                if (result.data[0].role === 'admin') {
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

                    <Router>
                        <Col xs={3} md={2}>
                            <h2>Dashboard</h2>
                            <Navbar bg="light" expand="lg">
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav className="flex-column">
                                        <Link to="/dashboard"></Link>
                                        <Link to="/payment">Payment</Link>
                                        <Link to={`/myOrders/${user.email}`}>My Orders</Link>
                                        <Link to="/review">Review</Link>
                                        {
                                            admin && <>
                                                <Link to="/manageAllOrders">Manage All Orders</Link>
                                                <Link to="/addNewProduct">Add New Product</Link>
                                                <Link to="/makeAdmin">Make Admin</Link>
                                                <Link to="/manageProducts">Manage Products</Link>
                                            </>
                                        }

                                        <Button onClick={handleLogOut}>Log out</Button>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                        </Col>
                        <Col xs={9} md={10}>
                            <Switch>
                                <Route exact path="/dashboard">
                                    <h2>tooo</h2>
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
                                <Route path="/manageProducts">
                                    <ManageProducts />
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