import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav,
} from 'react-bootstrap';


const NavigationBar = () => (
  <Nav variant="pills" defaultActiveKey="/">
      <ul>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/request" eventKey="link-1"> Request</NavLink>
      </ul>
  </Nav>
);

export default NavigationBar;
