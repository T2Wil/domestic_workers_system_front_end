
import React from 'react';
import {
  Button, Form,
  Col,
  Row,
  Container,
  Media,
} from 'react-bootstrap';
import profileImage from '../imgs/images.jpeg';

const RequestMaid = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col sm={6}>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={profileImage}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5> Maid Names</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col sm={6}>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Type your request description</Form.Label>
            <Form.Control as="textarea" rows="20" cols="30" placeholder="Type here.." />
          </Form.Group>
          <Button as="input" type="submit" value="Submit" />
        </Form>
      </Col>
    </Row>
  </Container>
);

export default RequestMaid;
