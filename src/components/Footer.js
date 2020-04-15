import React from 'react';
import allStyles from '../styles/Login.css';

const Footer = () => {
  var date = new Date();
  return (
    <footer className="text-center pt-3" style={allStyles.footer}>
      <h3>&copy; Copyright {date.getFullYear()} domestic-workers.com</h3>
    </footer>
  );
};

export default Footer;
