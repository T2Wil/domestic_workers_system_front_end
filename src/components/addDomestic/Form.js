import { Form, Col } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/_content_form.scss';


class For extends React.Component {
  render() {
    const { form, handleChange } = this.props;
    const {
      label, type, placeholder, value, name,
    } = form;
    return (
      <Form.Group className="form__group">
        <Col sm="4" className="form__margin">
          <Form.Label>{label}</Form.Label>
          <Form.Control name={name} type={type} placeholder={placeholder} value={value} onChange={(e) => handleChange(e.target)} />
        </Col>
      </Form.Group>

    );
  }
}
For.propTypes = {
  form: PropTypes.node.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default For;
