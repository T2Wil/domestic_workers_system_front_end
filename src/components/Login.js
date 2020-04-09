import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import LoginContent from './LoginContent';
class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <LoginContent />
        <Footer />
      </div>
    );
  }
}
export default Login;
