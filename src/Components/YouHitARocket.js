import React, { Component } from 'react'
import axios from 'axios'; 

class YouHitARocket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDataArray: [],
            rocketArray: [],
            missionArray: [],
            shipArray: [],
            launchArray: []
        }
    }

    componentDidMount() {
        // this.getRockets()
        this.getApiData()
    }

    getApiData = () => {
        let rockets = `https://api.spacexdata.com/v3/rockets`;
        const requestOne = axios.get(rockets);

        axios.all([requestOne]).then(axios.spread((...responses) => {
            const infoOne = responses[0];
            this.setState({
                rocketArray: [infoOne],
            })
        })).catch(errors => {
            console.log(errors, 'it didnt work!')
        })
    }

    render() {
    return (
        <div>
            {this.state.rocketArray.map((rocket) => {
                const result = rocket.data;

                return (

                    result.map((finalRocket) => {
                        if (finalRocket.rocket_id === this.props.rocketName) {
                        return (

                            <div className="hit">
                                <h2>You hit a rocket. Good job, I guess.</h2>
                                <h3><span className="fatText">{finalRocket.rocket_name}</span> </h3>
                                <p>{finalRocket.description}</p>
                                <a className="extraInfo" href={finalRocket.wikipedia}>Find Out More Info</a>
                                <div className="imgContainer">
                                    <img src={finalRocket.flickr_images[0]} alt="" />
                                </div>
                            </div>
                        )}
                    }))
            })
            }   
            </div>
        )    
    }
}

export default YouHitARocket;