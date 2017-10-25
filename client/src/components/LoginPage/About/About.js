import React, {Component} from "react";

import {Row, Col, CardPanel, MediaBox} from 'react-materialize';
import "./About.css";
import Travel from "./travel.jpg";

 const About = () => {
   return (
    <Row>
      <h2 id="aboutHeading">About WanderSpark</h2>
      <Col s={12} m={8}>
          <CardPanel id="leftAboutPanel" className="teal lighten-4 black-text">
              <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
          </CardPanel>
      </Col> 
      <Col s={12} m={4}>        
      <MediaBox src={Travel} caption="A demo media box1" height="200" width="350"/>
      </Col>
      
    </Row>
   );
  }

export default About;