import React, { Component } from 'react';
import {Button,Icon,Form,Row,Input,Col} from 'react-materialize';
import './login-registerPanel.css';

class LoginRegisterPanel extends Component {
    render() {
        return(
        <div className="container-fluid">
            <div className="login-container">
            <Row>
                <Col  s={12} m={6} l={12}>
                <Input s={6} label="Username" validate><Icon>account_box</Icon></Input>
                </Col>
            </Row>
                <Row>
                <Col s={12} m={6} l={12}>
                <Input s={6} label="Password" validate><Icon>lock</Icon></Input>
                </Col>
            
            </Row>
                <Button id="login-button" waves='light'><i class="fa fa-sign-in">Login</i></Button>

                <h6><a href="#">Register Now!</a></h6>
            </div>
        </div>
        );
    }
    
}

export default LoginRegisterPanel;