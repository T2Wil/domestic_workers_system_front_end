import React from 'react';
import allStyles from '../styles/allStyles.css';
import FullYear from '../actions/Today';


const Footer = () => (
  <div style={allStyles.footerDiv}>
    <p style={allStyles.footerText}>
      &copy; Domestic Workers &nbsp;
      {FullYear()}
    </p>
  </div>
);

export default Footer;
