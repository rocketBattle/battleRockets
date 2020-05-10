import React, { Component } from 'react';
import Rockets from './Rockets';
import Modal from './Modal';
import { Link } from 'react-router-dom';
// import Cell from './Cell'

class GameCells extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            userInput: '',
            boardSize: 7,
            hitClass: '',
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
                        name: ""
                    },
                    {
                        id: 'A2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'A3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'A4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'A5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'A6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'A7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                ],
                [
                    {
                        id: 'B1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'B2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'B3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'B4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'B5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'B6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'B7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                ],
                [
                    {
                        id: 'C1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'C2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'C3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'C4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'C5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'C6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'C7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                ],
                [
                    {
                        id: 'D1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'D2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'D3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'D4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'D5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'D6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'D7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                ],
                [
                    {
                        id: 'E1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'E2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'E3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'E4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'E5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'E6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'E7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                ],
                [
                    {
                        id: 'F1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'F2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'F3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'F4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'F5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'F6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'F7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                ],
                [
                    {
                        id: 'G1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'G2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'G3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'G4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'G5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'G6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                    {
                        id: 'G7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                        name: ""
                    },
                ],
            ],
            newRocketLocations: [],
            numRockets: 4,
            totalHits: 9,
            userHits: 0,
            hasRocketY: false
        }
    }

    // lifecycle that is called once, starts off the app.
    componentDidMount() {
        this.generateRocketLocations();
    }

    // Function to open/close modal

    toggleModal = () => {
        // if userInput === cell.id then change the value of cell.hasRockets
        // this.state.cellArray.map((cellz) => {

        //     return (
        //         cellz.map((cell) => {
        //             // if userinput matches cell.id then change the hasRocket state to true
        //             if (this.state.userInput === cell.id) {
        //                 cell.hasRocket = true;
        //             }
        //         })
        //     )
        // })
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    // userGuess function called when user submits in the input.
    userGuess = (guess) => {
        if (guess === null || guess.length !== 2) {
            alert('need a valid guess please');
        } else {
            let firstChar = guess.charAt(0);
            let letter = this.state.charArray.indexOf(firstChar);
            let number = guess.charAt(1);
            // if letter or number is not a number, letters are too long/short then alert user for incorrect use. 
            if (isNaN(letter) || isNaN(number) || letter < 0 || letter >= this.state.boardSize || number < 0 || number >= this.state.boardSize) {
                alert(`not valid input`)
            } else {
                return letter + number;
            }
        }
        return null;
    }

    // New Generate Rocket Location
    generateRocketLocations = () => {
        const newArray = this.state.rocketLocation.map((rocket) => {
            // console.log(rocket)
            this.generateRocketLocationz = () => {

                let letters = ["A", "B", "C", "D", "E", "F", "G"];
                const numbers = [1, 2, 3, 4, 5, 6, 7];
                // function that sets the specific Letter and Number
                const shipCoordinate = () => {
                    // random number between 1-7
                    const letterPosition = Math.floor(Math.random() * 7);
                    ///?????????
                    const numberPosition = Math.floor(Math.random() * 5);
                    return {
                        // returns the letter/number[i] of the array
                        letter: letters[letterPosition],
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

                // console.log(letters.from(new Set(letters)));

                const removeDuplicates = (letters) => {
                    letters.splice(letters.indexOf(shipData.letter),1)
                    console.log(letters)
                };

                removeDuplicates(letters)

                const cellCheck = this.state.cellArray.map((cellz)=>{
                    return(
                        cellz.map((cell) => {
                            //console.log(rocket.location.length)
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
                        })
                    )
                })
                this.setState({
                    cellArray: cellCheck
                })
                return console.log(letters)
            }
            this.generateRocketLocationz()
            return rocket
        })
        this.setState({
            rocketLocation: newArray
        })

        // // set the newArray to state
        // // we are not taking duplicates into account just yet
        return console.log(newArray)
    }

    // sets the userInput into state for later use
    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value.toUpperCase()
        })
    }

    // anytime the user hits a rocket cell, change the className according to if statement
    callFunction = (cell) => {
        if (cell.hasRocket === false && cell.hasRocketbeenHit === false) {
            return 'blankHit'
        } else if (cell.hasRocket === true && cell.hasRocketbeenHit === true) {
            return 'shipHit'
        }  
    }

    //compare the input against the string content of the cell. 
    checkHit = (e) => {
        // prevents webpage from refreshing after submit
        e.preventDefault();

        // calling userGuess with userInput as parameter
        this.userGuess(this.state.userInput);

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
                console.log(this.state.userHits)
                // creating a new array to replace the old state property
                const newArray = this.state.cellArray.map((cellz) => {
                    return (
                        cellz.map((cell) => {
                            // from the matched locations with user input, if also matches the cell id, change rockethasbeenhit to true
                            if (this.state.userInput === cell.id) {
                                cell.hasRocketbeenHit = true
                            }
                            return cell;
                        })
                    )
                })
                // updating the previous old state with current set state.
                this.setState({
                    cellArray: newArray
                })
            }
        })
        console.log(this.state.userHits)
    }

    render() {

        // Modal constants
        const { open } = this.state;
        const { toggleModal } = this;

        return (
            <div className="board">
                {open && <Modal cellArray={this.state.cellArray} userInput={this.state.userInput}toggleModal={toggleModal}/>}
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
                    <div className="input">
                        <input
                            id="userInput"
                            onChange={this.handleUserInput}
                            type="text"
                            placeholder="A1"
                            required

                        />
                        <button onClick={toggleModal} id="fireButton">Let's boom some rockets!</button>
                    </div>
                </form>

                {/* // if the user hits trhew rocket, have the modal say "you did it" + api call */}
                {/* // if the user eneters the value dpoesnt not have a ship = "you suck"
                // else if the userenters the duplicate "you alrewady clicked"
                if () { */}

            </div>
        )
    }
}

export default GameCells;

// Whats left that i noticed:
// error handling
// results in modal if you hit the item or not,
// when locations of the rockets have all been hit (maybe unshift() the specific location string out of the location array, then sort of (if location array is empty, then rocket has been destroyed))
// when a specific rocket has been destroyed, modal with API information is appended.
// when all the ships have been hit, modal that pops up to say game over! you win! (just using an alert() for now)
// definitely more, but I cant think of it all at the moment
// styling, responsiveness... we still need time to do that, oh God. 


// Consider that we need to make a second player now
// since were making a second player, we'll need a second board for both players
// consider having a second board that will show the players where their ships have been hit
// how to take turns between players? Modal button to route back and forth between players
// how to show changes in both boards (where the user clicked, where their opponents board shows them it goes hit)
// R.I.P to us. 