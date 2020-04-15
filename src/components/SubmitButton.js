import React from 'react';
import { Button } from 'reactstrap';

function SubmitButton(props) {
  return (
    <Button className={props.className} onClick={props.onClick}>
      Log in
    </Button>
  );
}

export default SubmitButton;
