import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import UserContainer from './UserContainer';
import { Provider } from 'react-redux';
import store from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/home" component={Home} exact />
        </Switch>
        {/* <Login /> */}
        {/* <UserContainer /> */}
      </div>
    </Provider>
  );
};

export default App;
