import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Match from './Match';

const NotFound = () => {
  return <h1>NOT FOUND</h1>;
};

export default class App extends Component {
  render() {
    const { appState } = this.props;
    return (
      <div className="wrapper">
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
