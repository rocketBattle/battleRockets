import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor(){
    super();
    this.state = {
        allDataArray: [],
        rocketArray: [],
        missionArray: [],
        shipArray: [],
        launchArray: []
    }
  }
  componentDidMount(){
    // this.getRockets()
    this.getApiData()
  }

    getApiData = () => {
    let rockets =`https://api.spacexdata.com/v3/rockets`;
    let missions = `https://api.spacexdata.com/v3/missions`;
    let ships = `https://api.spacexdata.com/v3/ships`;
    let launches = `https://api.spacexdata.com/v3/launches`;
    const requestOne = axios.get(rockets);
    const requestTwo = axios.get(missions);
    const requestThree = axios.get(ships);
    const requestFour = axios.get(launches);

    axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {
      const infoOne = responses[0];
      const infoTwo = responses[1];
      const infoThree = responses[2];
      const infoFour = responses[3];
      // console.log(infoOne, infoTwo, infoThree, infoFour, responses)
      this.setState({
        allDataArray: responses,
        rocketArray: [infoOne],
        missionArray: [infoTwo],
        shipArray: [infoThree],
        launchArray: [infoFour]
      })
      console.log(this.state.allDataArray, this.state.rocketArray, this.state.missionArray, this.state.shipArray, this.state.launchArray)
    })).catch(errors => {
      console.log(errors, 'it didnt work!')
    })
  }

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
      <main>
        <h1>Hi guys!</h1>
      </main>
    )
  }
}

export default App;