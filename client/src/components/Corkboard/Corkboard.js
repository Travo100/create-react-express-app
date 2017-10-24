import React from "react";
import Shibuya from "./shibuya.png";
import Japan from "./japanPH.png";
import "./Corkboard.css";
import { Card, CardTitle } from 'react-materialize';

const Corkboard = () =>
  <div className="background-image">
    <div className="container">
      <div className="row">

        <div className="col s12 m4">
          <Card header={<CardTitle reveal image={Shibuya} waves='light'/>}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
          </Card>
        </div>

        <div className="col s12 m4">
        <Card header={<CardTitle reveal image={Shibuya} waves='light'/>}
            title="Card Title"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
        </Card>
      </div>

      <div className="col s12 m4">
          <Card header={<CardTitle reveal image={Shibuya} waves='light'/>}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
          </Card>
      </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={Japan} alt="japan"/>
              <span className="card-title">Card Title</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">clear</i></a>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
        
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={Japan} alt="japan"/>
              <span className="card-title">Card Title</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">clear</i></a>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
        
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={Japan} alt="japan"/>
              <span className="card-title">Card Title</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">clear</i></a>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

export default Corkboard;
