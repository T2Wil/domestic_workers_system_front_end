import React, { useState, useEffect, useRef } from 'react';
import {
  Modal, ModalHeader, ModalFooter, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

const ModalComponent = (props) => {
  const { isError, error, message } = props;
  const [modal, setModal] = useState(isError);
  console.log('props: ', props);
  const toggle = () => {
    setModal(!modal);
  };
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setModal(!modal);
    }
  });

  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader>{error || message}</ModalHeader>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Retry</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  isError: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ModalComponent;
