import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products/Products';
import BuyNow from './Pages/Products/BuyNow/BuyNow';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Register from './Pages/Ragister/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/products">
            <Products />
          </Route>

          <PrivateRoute exact path="/buyNow/:productId">
            <BuyNow />
          </PrivateRoute>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
