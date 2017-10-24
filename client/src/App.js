import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import Corkboard from "./components/Corkboard";

import { Button, Icon, SideNav, SideNavItem, Footer } from 'react-materialize';

import PlacesSearchComponent from './placesSearch/PlacesSearchContainer';

class App extends Component {
  render() {
    return (
      <div>
        <SideNav
          trigger={<Button>SIDE NAV DEMO</Button>}
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
        </SideNav>
        <PlacesSearchComponent />
      </div>
    );
  }
}

export default App;
