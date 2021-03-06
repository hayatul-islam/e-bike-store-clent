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

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <PrivateRoute path="/buyNow/:productId">
            <BuyNow />
          </PrivateRoute>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
