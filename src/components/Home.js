import React, { useState } from 'react';
import {
  Form, Col,
} from 'react-bootstrap';

import allStyles from '../styles/allStyles.css';


const Home = () => {
  const [dataInput, setDataInput] = useState({});

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
  };

  const handleInputChange = (e) => {
    e.persist();
    setDataInput((dataInput)=> ({ ...dataInput, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h3 className="mt-5 text-center mb-3" style={allStyles.formTitle}>Sign Up</h3>
      <Form onSubmit={handleSubmit}>

        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group>
            <Form.Label htmlFor="firstName" style={allStyles.labelText}>First name</Form.Label>
            <Form.Control
              type="text"
              id="firstName"
              style={allStyles.inputText}
              autoComplete="off"
              onChange={handleInputChange}
              value={dataInput.firstName}
            />
          </Form.Group>
        </Col>

        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group>
            <Form.Label htmlFor="lastName" style={allStyles.labelText}>Last name</Form.Label>
            <Form.Control
              type="text"
              id="lastName"
              style={allStyles.inputText}
              autoComplete="off"
              onChange={handleInputChange}
              value={dataInput.lastName}
            />
          </Form.Group>
        </Col>

        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group>
            <Form.Label htmlFor="email" style={allStyles.labelText}>Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              style={allStyles.inputText}
              autoComplete="off"
              onChange={handleInputChange}
              value={dataInput.email}
            />
          </Form.Group>
        </Col>

        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group>
            <Form.Label htmlFor="password" style={allStyles.labelText}>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              style={allStyles.inputText}
              autoComplete="off"
              onChange={handleInputChange}
              value={dataInput.password}
            />
          </Form.Group>
        </Col>
        <Col className="text-center mt-5" md={{ span: 4, offset: 4 }}>
          <Form.Control type="submit" className="bg-success text-white" style={allStyles.submitButton} />
        </Col>
      </Form>
    </div>
  );
};

export default Home;
