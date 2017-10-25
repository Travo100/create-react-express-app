import React from "react";
import "./userFAB.css";
import { Button } from 'react-materialize';

const userFAB = () =>
  <Button floating fab='horizontal click-to-toggle userFAB' icon='menu' className='' large style={{bottom: '45px', right: '24px'}}>
    <a href='/dashboard'><Button floating icon='airplanemode_active' className='green' /></a>
    <a href='/settings'><Button floating icon='account_circle' className='yellow darken-1' /></a>
    <a href='/logout'><Button floating icon='power_settings_new' className='red' /></a>
  </Button>

export default userFAB;
