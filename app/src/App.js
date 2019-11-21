import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import AppHeader from './container/AppHeader';
import SavageSheet from './container/SavageSheet';
import LandingContainer from './container/LandingContainer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <AppHeader />
          </header>
          <Switch>
            <Route path="/savageSheet" component={SavageSheet} />
            <Route path="/" component={LandingContainer} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

