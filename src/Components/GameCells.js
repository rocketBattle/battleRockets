import React, { Component } from 'react';
import Rockets from './Rockets';
import Modal from './Modal';
import { Link } from 'react-router-dom';
// import Cell from './Cell'

class GameCells extends Component {
    constructor() {
        super()
        this.state = {
            empty: true,
            open: false,
            userInput: '',
            boardSize: 7,
            charArray: ["A", "B", "C", "D", "E", "F", "G"],
            hitClass: '',
            rocketLocation: [
                {
                    name: 'rocket1',
                    shipLength: 1,
                    location: []

                },
                {
                    name: 'rocket2',
                    shipLength: 2,
                    location: []
                },
                {
                    name: 'rocket3',
                    shipLength: 3,
                    location: []
                },
                {
                    name: 'rocket4',
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
                    },
                    {
                        id: 'A2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'A3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'A4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'A5', 
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'A6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'A7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                ], 
                [   
                    {
                        id: 'B1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'B2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'B3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'B4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'B5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'B6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'B7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                ], 
                [   
                    {
                        id: 'C1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'C2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'C3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'C4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'C5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'C6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'C7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                ], 
                [
                    {
                        id: 'D1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'D2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'D3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'D4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'D5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'D6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'D7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                ], 
                [
                    {
                        id: 'E1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'E2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'E3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'E4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'E5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'E6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'E7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                ], 
                [   
                    {
                        id: 'F1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'F2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'F3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'F4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'F5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'F6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'F7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                ], 
                [
                    {
                        id: 'G1',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'G2',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'G3',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'G4',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'G5',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'G6',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                    {
                        id: 'G7',
                        hasRocket: false,
                        hasRocketbeenHit: false,
                    },
                ],
            ],
            newRocketLocations: [],
            numRockets: 4
        }
    }


    // Function to open/close modal
    toggleModal = () => {
        this.state.cellArray.map((cellz) => {
            return (
                cellz.map((cell) => {
                    // console.log(cell)
                    if (cell.hasRocket === false) {
                        return 'shipHit'
                    } else {
                        return 'normal'
                    }
                })
            )
        })
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };
    
    
    componentDidMount() {
        this.generateRocketLocations();
    }

    // userGuess function called when user submits in the input.
    userGuess = (guess) => {
        if (guess === null || guess.length !== 2) {
            alert('need a valid guess please');
        } else {
            let firstChar = guess.charAt(0);
            let letter = this.state.charArray.indexOf(firstChar);
            let number = guess.charAt(1); 

            if (isNaN(letter) || isNaN(number)) {
                alert(`not valid input`)
            } else if (letter < 0 || letter >= this.state.boardSize || number < 0 || number >= this.state.boardSize) {
                alert(`input not on the board`)
            } else {
                return letter + number; 
            }
        }
        return null;
    }

    // New Generate Rocket Location
    generateRocketLocations = () => {
        const newArray = this.state.rocketLocation.map((rocket) => {
            // console.log(location.shipLength)
            this.generateRocketLocations = (ship, value) => {
                // generate a random letter from the charArray
                const randomLetter = this.state.charArray[Math.floor(Math.random() * this.state.charArray.length)];
                // generate a random number from 1 to 7
                let randomNumber = Math.floor(Math.random() * 7) + 1;
                let randomLocation = randomLetter + randomNumber;
                rocket.location.push(randomLocation);
                // console.log(ship)
                if (randomLocation.includes(rocket.location[0, 1, 2, 3])) {
                    console.log(`oh SHIT`);
                }

                // ERROR HANDLING: TRY TO PREVENT THE SAME LOCATION TO GENERATE 
                // const ranNums = []
                // let i = rocket.shipLength
                // let j = 0;

                // while (i--) {
                //     j = Math.floor(Math.random() * (i+1));
                //     ranNums.push(rocket[j]);
                //     rocket.location.splice(j, 1);
                // }
                // console.log(ranNums)
                console.log(randomLocation);
                return randomLocation
                
                // //  if rocket length is 1 > push only one thing into an array
                // rocket.location.push(randomLocation)
            }

            // for (var i = 1; i < 8; i++) this.generatingLocation(i)

            if (rocket.shipLength === 1) {
                for (let i = 0; i < 1; i++) this.generateRocketLocations(i);
            } else if (rocket.shipLength === 2) {
                for (let i = 0; i < 2; i++) this.generateRocketLocations(i);
            } else if (rocket.shipLength === 3) {
                for (let i = 0; i < 3; i++) this.generateRocketLocations(i);
            } else {
                for (let i = 0; i < 4; i++) this.generateRocketLocations(i);
            }

            return rocket;

            // get the length of each rocket

            // sort method > numerically and alphabetically

            // generate more sequational numbers and letters based on ship length
            // function sequence (min, max) {
            //     const newSequenceArray = [];
            //     for (var i = 0; i < 3; i++) {
            //         n.push(Math.floor(Math.random() * max) + min);
            //     }
            //     return n;
            // }
            // return a new object

        })
        // const newArray = this.state.cellArray.map((cellz) => {
        //     return (
        //         cellz.map((cell) => {
        //             if (this.state.userInput === cell.id) {

        //                 cell.hasRocket = true

        //                 // this is where we change state to true, which should change the color of the item.
        //             }
        //             return cell;
        //         })

        //     )
        // })
        this.setState({
            rocketLocation: newArray
        })
        // set the newArray to state
        // we are not taking duplicates into account just yet
        return newArray;
    }


    // collision = (locations) => {
    //     for (let i = 0; i < this.state.numRockets; i++){
    //         let rocket = this.state.numRockets[i]; 
    //         for (let j = 0; j < 4; j++) {
    //             if (this.state.rocketLocation[j].indexOf(this.state.newRocketLocations[j]) >= 0 ) {
    //                 return true;
    //             }
    //     }
    // } 
    //     return false
    // }
    

    // Declare classes in CSS to mark what's hit or missed
    // Hard code which items in the cells array have ships
    // > First set a ship icon to the board
    // > If it's hit, icon changes to flames
    // Toggle those classes

    // Each cell's state

    // if the cell with a state of empty has been hit && there is no ship value, state is empty else change the state to 'hit', if not stay empty

    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    callFunction = (cell) => {
        // console.log(cell)
        if (cell.hasRocketbeenHit === true) {
            return 'shipHit'
        } else {
            return 'normal'
        }
    }

    //compare the input against the string content of the cell. 
    checkHit = (e) => {
        e.preventDefault();
        this.userGuess(this.state.userInput); 
        // console.log(this.state.userInput)
        // console.log(e.target)
        this.state.rocketLocation.map((setLocation) => {     
            // console.log(setLocation)
            if (setLocation.location.includes(this.state.userInput)) {
                const newArray = this.state.cellArray.map((cellz) => {
                    return (
                        cellz.map((cell) => {
                            if (this.state.userInput === cell.id) {
                                cell.hasRocketbeenHit = true
                                // this is where we change state to true, which should change the color of the item.
                            }
                            return cell;
                        })

                    )
                })
                console.log(newArray)
                this.setState ({
                    cellArray: newArray
                })
            }
        }) 
        
        // console.log(e.target)
        // if (this.state.rocketLocation.includes(this.state.userInput)) {
        //     console.log("it works")
        //     this.setState({
        //         rocketHit: !this.state.rocketHit   
        //     });
        // } else {
        //     this.setState({
        //         blankHit: !this.state.blankHit
        //     })
        // }
    }
    
        //call clickFunction()
    
    changeCellClass = () => {
        this.checkHit() 
        if (this.state.empty === false) {
            this.setState({
                hit: !this.state.hit
            });
            console.log(this.state.hit);
        }
    }

    // handleFireButton = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         open: !this.state.open
    //     })
    // }

    
    render() {

    // Modal constants
    const { open } = this.state;
    const { toggleModal } = this;

        return (
            <div className="board">
                {open && <Modal toggleModal={toggleModal} />}
                <Rockets />

                <div className="messageArea"></div>
                <form action="#" onSubmit={this.checkHit}>
                <table>
                    <tbody>
                        {this.state.cellArray.map((tr)=>{
                            // console.log(tr)
                            return(
                                
                                    <tr>
                                        {tr.map((td)=>{
                                            // console.log(td)
                                            return(

                                                <td className={this.callFunction(td)}>{td.id}</td>
                                            )
                                        })}
                                    </tr>
                                
                            )
                        })}
                    {/* <tr>
                        <td
                        className={
                            this.state.rocketHit ? "normal" : "shipHit"}
                        id="A1"
                        data-value="A1"
                        >
                        A1
                        </td>
                        <td id="2" className={this.state.rocketHit ? "normal" : "shipHit"}>A2</td>
                        <td id="3">A3</td>
                        <td id="4" className={this.state.blankHit ? "normal" : "blankHit"}>A4</td>
                        <td id="5">A5</td>
                        <td id="6">A6</td>
                        <Cell shipYes={true} />
                    </tr>*/}
                    </tbody>
                </table>
                <input
                    id="userInput"
                    onChange={this.handleUserInput}
                    type="text"
                    placeholder="A1"
                    required
                />
                <button onClick={toggleModal} id="fireButton">Kill that mothafocka</button>
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