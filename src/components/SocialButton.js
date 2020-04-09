import React from 'react';
import {
    FacebookLoginButton,
    GoogleLoginButton,
  } from 'react-social-login-buttons';

function SocialButton(props) {
  return (
    <FacebookLoginButton
    className={props.className}
    onClick={props.onClick}
  />
  );
}

export default SocialButton;
