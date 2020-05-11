import React, { Component } from 'react';
import Modal from './Modal';

// Main game for Player 1
class GameCells extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            userInput: '',
            boardSize: 7,
            charArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            rocketLocation: [
                {
                    id: 'falcon1',
                    shipLength: 1,
                    location: []
                },
                {
                    id: 'falcon9',
                    shipLength: 2,
                    location: []
                },
                {
                    id: 'falconheavy',
                    shipLength: 3,
                    location: []
                },
                {
                    id: 'starship',
                    shipLength: 4,
                    location: []
                },
            ],
            cellArray: [
                [
                    {
                        id: 'A1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'A2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'A3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'A4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'A5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'A6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'A7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                ],
                [
                    {
                        id: 'B1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'B2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'B3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'B4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'B5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'B6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'B7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                ],
                [
                    {
                        id: 'C1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'C2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'C3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'C4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'C5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'C6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'C7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                ],
                [
                    {
                        id: 'D1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'D2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'D3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'D4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'D5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'D6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'D7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                ],
                [
                    {
                        id: 'E1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'E2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'E3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'E4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'E5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'E6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'E7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                ],
                [
                    {
                        id: 'F1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'F2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'F3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'F4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'F5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'F6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'F7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                ],
                [
                    {
                        id: 'G1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'G2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'G3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'G4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'G5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'G6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                    {
                        id: 'G7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        missed: false
                    },
                ],
            ],
            numRockets: 4,
            totalHits: 9,
            userHits: 0
        }
    }

    // lifecycle that is called once, starts off the app.
    componentDidMount() {
        this.generateRocketLocations();
    }

    // Function to open/close modal
    toggleModal = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    // Generate Rocket Locations
    generateRocketLocations = () => {
        const newArray = this.state.rocketLocation.map((rocket) => {
            this.generateRocketLocationz = () => {
                const numbers = [1, 2, 3, 4, 5, 6, 7];

                // function that sets the specific Letter and Number
                const shipCoordinate = () => {
                    // random number between 1-7
                    const letterPosition = Math.floor(Math.random() * this.state.charArray.length );
                    const numberPosition = Math.floor(Math.random() * 4);
                    return {
                        // returns the letter/number[i] of the array
                        letter: this.state.charArray[letterPosition],
                        number: numbers[numberPosition]
                    }
                }

                const ship = [];
                const shipData = shipCoordinate();

                // iterating through rocket shiplength and pushing the data into ship array.
                for (let i = 0; i < rocket.shipLength; i++) {
                    ship.push(`${shipData.letter}${shipData.number + i}`)
                    // setting the state location to as our new data
                    rocket.location = ship
                }

                // Create a copy of the new array and checks to see if the character array contains the randomly selected letter
                const removeDuplicates = () => {
                    const charArrayCopy = this.state.charArray
                    const index = charArrayCopy.indexOf(shipData.letter)
                    charArrayCopy.splice(index, 1)
                    this.setState({
                        charArray: charArrayCopy
                    })   
                }
                removeDuplicates()

                // Update the cellArray to new state values for hasRocket and name properties, so that the application knows which cells have rockets and what ships they're associated with
                const cellCheck = this.state.cellArray.map((cellz)=>{
                    return(
                        cellz.map((cell) => {
                            if(rocket.location.includes(cell.id)) {
                                cell.hasRocket = true
                                if(rocket.location.length === 1) {
                                    cell.name = "falcon1"
                                } else if (rocket.location.length === 2) {
                                    cell.name = "falcon9"
                                } else if (rocket.location.length === 3) {
                                    cell.name = "falconheavy"
                                } else if (rocket.location.length === 4) {
                                    cell.name = "starship"
                                }
                            }
                        return cell
                    }))
                })
                this.setState({
                    cellArray: cellCheck
                })
            }
            this.generateRocketLocationz()
            return rocket
        })
        this.setState({
            rocketLocation: newArray
        })
        return 
    }

    // sets the userInput into state for later use and change it to upper case
    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value.toUpperCase()
        })
    }

    // anytime the user hits a rocket cell, change the className according to if statement
    callFunction = (cell) => {
        
        if (cell.hasRocket === true && cell.hasRocketbeenHit === true) {
            return 'shipHit'
        } 
        else if (cell.hasRocket === false && cell.hasRocketbeenHit === true) {
            return 'blankHit'
        }
    }

    // Compare the input against the string content of the cell. 
    checkHit = (e) => {
        // Prevents webpage from refreshing after submit
        e.preventDefault();

        this.setState({
            userInput: ""
        })

        // if userHits matches the total amount of hits for the game, alert user
        if (this.state.userHits === this.state.totalHits) {
            alert('gameover!')
        }
        // mapping state property to get to next level
        this.state.rocketLocation.map((setLocation) => {
            // if userInput matches any of the items in location state property, add to userHit total.
            if (setLocation.location.includes(this.state.userInput)) {
                this.setState({
                    userHits: this.state.userHits + 1
                })
            }
                // creating a new array to replace the old state property
                const newArray = this.state.cellArray.map((cellz) => {
                    return (
                        cellz.map((cell) => {
                            // from the matched locations with user input, if also matches the cell id, change rockethasbeenhit to true
                            if (this.state.userInput === cell.id) {
                                
                                cell.hasRocketbeenHit = true
                                if (!cell.hasRocket) {
                                    cell.missed = true
                                }
                            }                             
                            return cell;
                        })
                    )
                })
                
                // updating the previous old state with current set state.
                this.setState({
                    cellArray: newArray
                }
            )            
        })
    }

    render() {
        // Modal constants
        const { open } = this.state;
        const { toggleModal } = this;

        return (
            <div className="board">

                {/* calling the modal with a relative value depending on user input */}
                {open && <Modal cellArray={this.state.cellArray} 
                    userInput={this.state.userInput}
                    toggleModal={toggleModal}/>}

                {/* Game grid */}
                <form action="#" onSubmit={this.checkHit}>
                    <table>
                        <tbody>
                            {this.state.cellArray.map((tr) => {
                                return (
                                    <tr>
                                        {tr.map((td) => {
                                            return (
                                                <td className={this.callFunction(td)}>{td.id}</td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    {/* User input form to guess which cell the rocket is at */}
                    <div className="input">
                        <input
                            id="userInput"
                            onChange={this.handleUserInput}
                            type="text"
                            placeholder="A1"
                            required
                            value={this.state.userInput}
                        />
                        <button className="boomRockets" onClick={toggleModal} id="fireButton">Let's boom some rockets!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default GameCells;