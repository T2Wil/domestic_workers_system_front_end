import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
