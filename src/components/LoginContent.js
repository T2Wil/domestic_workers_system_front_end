import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from 'reactstrap';
import LoginTextInput from './LoginTextInput';
import SubmitButton from './SubmitButton';
import Checkbox from './Checkbox';
import SocialButton from './SocialButton';
import { GoogleLoginButton } from 'react-social-login-buttons';
import allStyles from '../styles/Login.css';
import { fetchUsers } from '../actions/index';
import { connect } from 'react-redux';

class LoginContent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { data: { email: '', password: '' } };
  // }
  state = {
    data: {
      email: '',
      password: '',
    },
  };
  render() {
    return (
      <div style={allStyles.LoginForm} className="align-middle">
        <LoginTextInput
          label="Email"
          type="email"
          placeholder="Email"
          id="email"
          style={allStyles.inputbox}
          name="email"
          value={this.state.data.email}
          onChange={this.onChangeHandler}
        />
        <LoginTextInput
          label="Password"
          type="password"
          placeholder="Password"
          id="password"
          style={allStyles.inputbox}
          name="password"
          value={this.state.data.password}
          onChange={(e) => this.onChangeHandler(e)}
        />
        <p>{this.props.token ? <Redirect to="home" /> : null}</p>
        <p>{this.props.error}</p>
        <Checkbox />
        <SubmitButton
          className="btn-lg btn-dark btn-block "
          onClick={(e) => this.login(e)}
          label="log in"
        />
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <GoogleLoginButton
          className="mt-3 mb-2"
          onClick={() => alert('Google Log in successfully')}
        />
        <SocialButton
          className="mt-2 mb-2"
          onClick={() => alert('Facebook Log in successfull')}
        />
        <div className="text-center">
          <a href="/">Sign up</a>
          <span className="p-2">|</span>
          <a href="/">Forgot Password</a>
        </div>
      </div>
    );
  }
  onChangeHandler = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };
  login = (e) => {
    e.preventDefault();
    console.log(this.state.data);

    this.props.fetchUsers(this.state.data);
  };
}
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (request) => dispatch(fetchUsers(request)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContent);
