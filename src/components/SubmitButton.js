import React from 'react';
import { Button } from 'reactstrap';

function SubmitButton(props) {
  return (
    <Button
      className={props.className}
      onClick={props.onClick}
      data-testid="button"
    >
      {props.label}
    </Button>
  );
}

export default SubmitButton;
