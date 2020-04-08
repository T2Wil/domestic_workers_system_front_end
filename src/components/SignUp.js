import React from 'react';
import { Form, Col } from 'react-bootstrap';

const SingUp = (props) => (
  <Form>
    <div />
    <h1 className="mt-5 text-center signup-title">Sign Up</h1>
    <div />
    <Col md={{ span: 4, offset: 4 }}>
      <Form.Group>
        <Form.Label htmlFor="firstName">First name</Form.Label>
        <Form.Control type="text" id="firstName" autoComplete="off" />
      </Form.Group>
    </Col>

    <Col md={{ span: 4, offset: 4 }}>
      <Form.Group>
        <Form.Label htmlFor="lasttName">Last name</Form.Label>
        <Form.Control type="text" id="lasttName" autoComplete="off" />
      </Form.Group>
    </Col>

    <Col md={{ span: 4, offset: 4 }}>
      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="email" id="email" autoComplete="off" />
      </Form.Group>
    </Col>

    <Col md={{ span: 4, offset: 4 }}>
      <Form.Group>
        <Form.Label htmlFor="passord">Password</Form.Label>
        <Form.Control type="password" id="password" autoComplete="off" />
      </Form.Group>
    </Col>

  </Form>
);

export default SingUp;
