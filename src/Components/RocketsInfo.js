import React, { Component } from 'react';
import axios from 'axios'; 
import { readSync } from 'fs';

class RocketsInfo extends Component {
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
            console.log(infoOne, infoTwo, infoThree, infoFour, responses)
            this.setState({
            allDataArray: responses,
            rocketArray: [infoOne],
            missionArray: [infoTwo],
            shipArray: [infoThree],
            launchArray: [infoFour]
        })
        // console.log(this.state.allDataArray, this.state.rocketArray, this.state.missionArray, this.state.shipArray, this.state.launchArray)
        })).catch(errors => {
        console.log(errors, 'it didnt work!')
        })
    }

    // componentWillMount(){
    // newState = [];
    // for (let key in rocketArray){
    //     newState.push {
    //         id: rocketArray.data[key].id;
    //         name: rocketArray.data[key].rocket_name
    //     }
    //     console.log(rocket)
    // }

    

    render() {

        return(
            <div>
                <ul>
                    {this.state.rocketArray.map((rocket) => {
                        const result = rocket.data;

                        return(

                        result.map((finalRocket) => {
                            console.log(finalRocket.rocket_name);
                            return(

                                <li>
                                    <h3>{finalRocket.rocket_name}</h3>
                                    <p>{finalRocket.description}</p>
                                    <a href={finalRocket.wikipedia}>Find Out More Info</a>
                                    <div>
                                        <img src={finalRocket.flickr_images[0]} alt="" />
                                    </div>
                                </li>
                            )
                        }))
                    })
                    }                
                </ul>
            </div>
        )
    }
}

export default RocketsInfo; 