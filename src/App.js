import React, { Component } from 'react';
import './App.css';
import Home from './home';
import Darkness from './darkness';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:hash" component={Darkness} />
        </Switch>
      </Router>
     );
  }
}

export default App;
