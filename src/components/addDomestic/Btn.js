import React from 'react';
import { Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../styles/__btn.scss';

class Btn extends React.Component {
  render() {
    const { value, handleClick } = this.props;
    return (
      <Button className="btn__width--md btn--center" value={value} variant="primary" onClick={(event) => handleClick(event.target)}>
        {value}
      </Button>
    );
  }
}
Btn.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Btn;
