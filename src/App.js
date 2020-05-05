import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import LandingPage from './Components/LandingPage';
import RocketsInfo from './Components/RocketsInfo';
import GameBoard from './Components/GameBoard';
import GameBoard2 from './Components/GameBoard2';


class App extends Component {
  // getRockets = () => {
  //   const url = 'https://api.spacexdata.com/v3/rockets/'
  
  //   // library we pulled from npm, in github. JSX version of Ajax. 
  //   axios({
  //     method: 'GET',
  //     url: url,
  //   }).then((results) => {
  //     console.log(results)
  //     this.setState({
  //       artArray: results.data.artObjects
  //     })
  //   })
  // }

  render() {
    return (
      <>
        <LandingPage />
        <main>
          <h1>Hi guys!</h1>
          <GameBoard />
          <GameBoard2 />
          <RocketsInfo />
        </main>
      </>
    )
  }
}

export default App;