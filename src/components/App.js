import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import Login from './Login';
import store from '../store/store';
import AddDomestic from './addDomestic';

const App = () => (
  <Provider store={store}>
    <div>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/add" component={AddDomestic} exact />
      </Switch>
    </div>
  </Provider>
);

export default App;
