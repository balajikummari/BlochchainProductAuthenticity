import React from "react";
import Login from './Dashboards/Login/Login'
import ManufacturerDashboard from './Dashboards/Manufacturer/Manufacturer'
import Retailer from './Dashboards/Retailer/Retailer'
import Customer from './Dashboards/Customer/Customer'
import FSSAI from './Dashboards/FSSAI/FSSAI'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';


export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Manufacturer" >
            <ManufacturerDashboard />
          </Route>
          <Route path="/Retailer">
            <Retailer />
          </Route>
          <Route path="/Customer">
            <Customer />
          </Route>
          <Route path="/FSSAI">
            <FSSAI />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

