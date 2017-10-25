import React, {Component} from "react";
import { Parallax,Button,Icon,Form,Row,Input,Col } from 'react-materialize';
import "./about.css"

const About = () =>
<div className="aboutContainer">
	<Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
	<div className="section white">
		<div className="row container">
        <div className="container-fluid">
        <div className="login-container">
        <Row>
            <Col  s={12} m={6} l={12}>
            <Input s={6} label="Username" validate><Icon>account_box</Icon></Input>
            </Col>
        </Row>

        <Row>
            <Col  s={12} m={6} l={12}>
            <Input s={6} label="First Name" validate><Icon>account_box</Icon></Input>
            </Col>
        </Row>

        <Row>
            <Col  s={12} m={6} l={12}>
            <Input s={6} label="Last Name" validate><Icon>account_box</Icon></Input>
            </Col>
        </Row>
            <Row>
            <Col s={12} m={6} l={12}>
            <Input s={6} label="Email" validate><Icon>email</Icon></Input>
            </Col>
        
        </Row>
        <Row>
        <Col s={12} m={6} l={12}>
        <Input s={6} label="Password " validate><Icon>lock</Icon></Input>
        </Col>
    
    </Row>
    <Row>
        <Col s={12} m={6} l={12}>
        <Input s={6} label="Confirm Password" validate><Icon>lock</Icon></Input>
        </Col>
    </Row>
            <Button id="login-button" waves='light'>Register</Button>
	            </div>
            </div>
        </div>
    </div>
</div>

    export default About;