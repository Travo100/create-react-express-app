import React from "react";
import Shibuya from "./shibuya.png";
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

      </div>
    </div>

  </div>

export default Corkboard;
