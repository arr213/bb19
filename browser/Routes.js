'use strict';

// NODE LIBRARIES
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// IMPORTED FILES
import HomeContainer from './components/home/HomeContainer';
import store from './redux/store';

// ROUTE ONENTER FUNCTIONS
const onHomeEnter = (next) => {
  console.log('Welcome to your new React-Redux app!');
}

// ROUTES COMPONENT
export default class Routes extends Component {

  render() {
    return (
      <Router>
        <Route path="/" component={HomeContainer} onEnter={onHomeEnter} />
      </Router>
    );
  }
}
