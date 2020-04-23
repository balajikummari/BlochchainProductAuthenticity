import React from "react";
import Login from './Screens/Login/Login'
import Manufacturer from './Screens/Manufacturer/Manufacturer'
import Retailer from './Screens/Retailer/Retailer'
import Customer from './Screens/Customer/Customer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';


export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Manufacturer">
            <Manufacturer />
          </Route>
          <Route path="/Retailer">
            <Retailer />
          </Route>
          <Route path="/Customer">
            <Customer />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

