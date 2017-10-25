import React from "react";
import "./Footer.css";
import { Footer } from 'react-materialize';

const footer = () =>
  <Footer copyrights="2017 Copyright Text"
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
    }
  >
  </Footer>;

export default footer;
