import React from 'react';
import '../../styles/_navBar.scss';
import logo from '../../assets/logo.jpg';

const NavBar = () => (
  <header>
    <img src={logo} alt="Barefoot Nomad logo" className="photo--medium" />
    <ul>
      <li>
        <ul>
          <li className="nav-item">
            <img src="https://via.placeholder.com/150" alt="user" className="photo--small" />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">first name</a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Add servants</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </header>
);

export default NavBar;
