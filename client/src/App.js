import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import './components/searchbtn/searchbtn.css';
import './components/userFAB/userFAB.css';
import './components/Footer/Footer.css'; 
import Banner from "./components/Banner";
import Corkboard from "./components/Corkboard";
import { Button, SideNav, SideNavItem, Footer } from 'react-materialize';
import PlacesSearchComponent from './placesSearch/PlacesSearchContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
            <Button floating fab='horizontal click-to-toggle userFAB' icon='menu' className='' large style={{bottom: '45px', right: '24px'}}>
              <a href='/dashboard'><Button floating icon='airplanemode_active' className='green' /></a>
              <a href='/settings'><Button floating icon='account_circle' className='yellow darken-1' /></a>
              <a href='/logout'><Button floating icon='power_settings_new' className='red' /></a>
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
}

export default App;
