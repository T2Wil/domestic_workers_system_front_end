import React, { Component } from 'react';
import {
  Col,
  Row,
  Container,
} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec lacinia congue felis in faucibus.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
