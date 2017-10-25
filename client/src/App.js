import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './components/searchbtn/searchbtn.css';
import './components/userFAB/userFAB.css';
import './components/Footer/Footer.css'; 
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import Corkboard from "./components/Corkboard";
import { Row, Input, Button, Icon, SideNav, SideNavItem, Footer } from 'react-materialize';
import PlacesSearchComponent from './placesSearch/PlacesSearchContainer';
import LoginButton from "./components/landingPage/Login-RegisterPanel/loginButton/loginButton";
import RegisterButton from "./components/landingPage/Login-RegisterPanel/registerButton/registerButton"
import Logo from "./components/landingPage/logo/logo";
import About from "./components/landingPage/about/about";
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
>>>>>>> 7cba550de9d6147fa8c76e260cb7674916d88396


class App extends Component {
<<<<<<< HEAD
  render() {
    return (
      <Router>  
        <div>
        <Route exact={true} path="/" component={Logo}/>
        <div className="Buttons">
          <Route exact={true} path="/" component={LoginButton}/> 
          <Route exact={true} path="/" component={RegisterButton}/>
        </div>
        
        <Route exact={true} path="/" component={About}/>

        <Route exact={true} path="/dashboard" render={() => ( 
            <SideNav
              trigger={<Button floating large className='searchbtn' waves='light' icon='add' />}
              options={{ closeOnClick: true }}
            >
              <SideNavItem userView
                user={{
                  background: 'img/office.jpg',
                  image: 'img/yuna.jpg',
                  name: 'John Doe',
                  email: 'jdandturk@gmail.com'
                }}
              />
              <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
              <SideNavItem href='#!second'>Second Link</SideNavItem>
              <SideNavItem divider />
              <SideNavItem subheader>Subheader</SideNavItem>
              <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
              <PlacesSearchComponent />
            </SideNav>
          )}/>

          <Route exact={true} path="/dashboard" render={() => ( 
            <Button floating fab='horizontal click-to-toggle userFAB' icon='mode_edit' className='red' large style={{bottom: '45px', right: '24px'}}>
              <Button floating icon='insert_chart' className='red' />
              <Button floating icon='format_quote' className='yellow darken-1'/>
              <Button floating icon='publish' className='green'/>
              <Button floating icon='attach_file' className='blue'/>
            </Button>
          )}/>

          <Route exact={true} path="/dashboard" component={Banner}/> 
          <Route exact={true} path="/dashboard" component={Corkboard}/>
          
          <Route exact={true} path="/dashboard" render={() => ( 
          
            <Footer copyrights="&copy 2015 Copyright Text"
              moreLinks={
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
              }
              links={
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              }
              className='example'
            >
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </Footer>
          )}/>
        </div>
      </Router>
    );
  }
=======
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
>>>>>>> 7cba550de9d6147fa8c76e260cb7674916d88396
}

export default App;
