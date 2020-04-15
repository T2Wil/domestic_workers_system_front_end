import React from 'react';
import {FormGroup, Label, Input } from 'reactstrap';

function LoginTextInput(props) {
  return (
    <FormGroup>
<Label>{props.label}</Label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        style={props.style}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></Input>
    </FormGroup>
  );
}

export default LoginTextInput;
