import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default App;
