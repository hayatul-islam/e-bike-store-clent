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
                                <Navbar.Brand>
                                    <h2>Dashboard</h2>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav className="flex-column">
                                        <Link to="/dashboard"></Link>
                                        {!admin && <>
                                            <NavLink activeClassName="selected" to="/dashboard/payment"><i className="fas fa-file-invoice-dollar"></i> Payment</NavLink>
                                            <NavLink activeClassName="selected" to={`/dashboard/myOrders/${user.email}`}><i className="fas fa-shopping-cart"></i> My Orders</NavLink>
                                            <NavLink activeClassName="selected" to="/dashboard/review"><i className="far fa-sticky-note"></i> Review</NavLink>
                                        </>}

                                        {
                                            admin && <>
                                                <NavLink activeClassName="selected" to="/dashboard/manageAllOrders"><i className="fas fa-tasks"></i> Manage Orders</NavLink>
                                                <NavLink activeClassName="selected" to="/dashboard/addNewProduct"><i className="far fa-share-square"></i> Add A Product</NavLink>
                                                <NavLink activeClassName="selected" to="/dashboard/makeAdmin"><i className="fas fa-user-shield"></i> Make Admin</NavLink>
                                                <NavLink activeClassName="selected" to="/dashboard/manageProducts"><i className="fas fa-align-justify"></i> Manage Products</NavLink>
                                            </>
                                        }

                                        <a onClick={handleLogOut}><i class="fas fa-sign-out-alt"></i> Log Out</a>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                        </Col>
                        <Col xs={12} md={10}>
                            <Switch>
                                <Route exact path="/dashboard">
                                    <div className="text-center pt-5">
                                        <i style={{ fontSize: '70px' }} className="far fa-check-circle text-info"></i>
                                        <h2 className="pt-3">Welcome to Your Dashboard!</h2>
                                    </div>
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