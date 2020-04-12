import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import App from './components/App';
import './styles/index.css';
import NavBar from './components/NavBar';
import RequestMaid from './components/RequestMaid';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <div className="main">
      <Route exact path="/" component={App} />
      <Route exact path="/request" component={RequestMaid} />
    </div>
  </BrowserRouter>,
  document.getElementById('app'),
);
