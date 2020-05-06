import React, { Component } from 'react';
import './App.scss';
import LandingPage from './Components/LandingPage';
import GameBoard from './Components/GameBoard'
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/GameBoard" component={GameBoard} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;