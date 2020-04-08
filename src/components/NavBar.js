import React from 'react';
import {
  Nav, Button, Navbar, Row, Col,
} from 'react-bootstrap';
import logo from '../assets/cleaner.svg';
import allStyles from '../styles/allStyles.css';

const NavBar = () => (
  <Navbar expand="lg" style={allStyles.navBarStyles}>
    <Navbar.Brand href="/" style={allStyles.navBarBrandStyles}>
      <Row>
        <Col style={allStyles.brandText}>Domestic Workers</Col>
        <Col><img src={logo} style={allStyles.logoStyles} alt="" /></Col>
      </Row>
    </Navbar.Brand>
    <Nav.Link href="#" className="ml-auto">
      <Button variant="success" style={allStyles.inputText}>Log In</Button>
    </Nav.Link>
  </Navbar>

);

export default NavBar;
