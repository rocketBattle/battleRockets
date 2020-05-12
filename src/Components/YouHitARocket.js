import React, { Component } from 'react'
import axios from 'axios'; 

// If the user hit a rocket, make an axios call and display a success message
class YouHitARocket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rocketArray: [],
        }
    }

    // App initializer to load the API
    componentDidMount() {
        this.getApiData()
    }

    // Set up the axios call to get the information from the API call
    getApiData = () => {
        let rockets = `https://api.spacexdata.com/v3/rockets`;
        const requestOne = axios.get(rockets);

        axios.all([requestOne]).then(axios.spread((...responses) => {
            const infoOne = responses[0];
            this.setState({
                rocketArray: [infoOne],
            })
        })).catch(errors => {
            // We have kept this console.log on purpose, so that in case the API ever does not return information as expected, we can see why.
            console.log(errors, 'it didnt work!')
        })
    }

    render() {
    return (
        <div>
            {/* Map into the API rocketArray to get values from it */}
            {this.state.rocketArray.map((rocket) => {
                const result = rocket.data;

                return (

                    // Map a level deeper into the rocketArray to get the specific value
                    result.map((finalRocket) => {
                        // if the API rocket id is equal to the rocketName passed through props, return that rocket's details.
                        if (finalRocket.rocket_id === this.props.rocketName) {
                        return (
                            <div className="hit">
                                <h2>You hit a rocket!</h2>
                                <h3><span className="fatText">{finalRocket.rocket_name}</span> </h3>
                                <p>{finalRocket.description}</p>
                                <a className="extraInfo" href={finalRocket.wikipedia} rel="noopener noreferrer" target="_blank">Find Out More Info</a>
                                <div className="imgContainer">
                                    <img src={finalRocket.flickr_images[0]} alt={finalRocket.rocket_name} />
                                </div>
                            </div>
                        )}
                        return null;
                    }))
                })
            }   
            </div>
        )    
    }
}

export default YouHitARocket;