import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

// test about component
import About from './components/LoginPage/About/About.js';

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact={true} path="/" component={About} />
                    <Route exact={true} path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        );
    }
}

export default App;
