import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Dashboard.css';
import searchMenu from "../searchMenu";
import userFAB from "../userFAB";
import Banner from "../Banner";
import Corkboard from "../Corkboard";
import footer from "../Footer";

const Dashboard = () =>
  <Router>
    <div>
      <Route exact={true} path="/dashboard" component={searchMenu}/> 
      <Route exact={true} path="/dashboard" component={userFAB}/> 
      <Route exact={true} path="/dashboard" component={Banner}/> 
      <Route exact={true} path="/dashboard" component={Corkboard}/>
      <Route exact={true} path="/dashboard" component={footer}/>
    </div>
  </Router>;

export default Dashboard;
