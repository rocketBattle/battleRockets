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
                        hasRocket: true,
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
                        hasRocketbeenHit: true,
                    },
                ], 
                [   
                    {
                        id: 'B1',
                        hasRocket: false,
                        hasRocketbeenHit: true,
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
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
    
    
    componentDidMount() {
        this.newRocketGenerator();
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
    newRocketGenerator = () => {
        const newArray = this.state.rocketLocation.map(() => {
            // generate a random letter from the charArray
            const randomLetter = this.state.charArray[Math.floor(Math.random() * this.state.charArray.length)];
            // generate a random number from 1 to 7
            let randomNumber = Math.floor(Math.random() * 7) + 1;
            let randomLocation = randomLetter + randomNumber;
            console.log(randomLocation)

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
        // set the newArray to state
        // we are not taking duplicates into account just yet
        return newArray;
    }

    // Generate Rocket Location
    generateRocketLocations = () => {
        let locations;
        for (let i = 0; i < this.state.numRockets; i++) {
            do {
            locations = this.generateRocket(); 
            } while (this.collision(locations));
            this.state.rocketLocation[i].location = locations;
        }
        console.log("rockets");
        console.log(locations);
    }

    collision = (locations) => {
        for (let i = 0; i < this.state.numRockets; i++){
            let rocket = this.state.numRockets[i]; 
            for (let j = 0; j < 4; j++) {
                if (this.state.rocketLocation[j].indexOf(this.state.newRocketLocations[j]) >= 0 ) {
                    return true;
                }
        }
    } 
        return false
    }

    // generate rocket randomly onto the gameboard
    generateRocket = () => {
    let direction = Math.floor(Math.random() * 2); 
    let row, col; 
    let newRocketLocations = [...this.state.newRocketLocations];
    this.state.rocketLocation.map((shipz)=>{
        
        if (direction === 1) {
            row = Math.floor(Math.random() * this.state.boardSize);
            col = Math.floor(Math.random() * this.state.boardSize - shipz.shipLength + 1);
        } else {
            col = Math.floor(Math.random() * this.state.boardSize);
            row = Math.floor(Math.random() * this.state.boardSize - shipz.shipLength + 1); 
        } 

        for (let i = 0; i < shipz.shipLength; i++){
            console.log('hi')
            if (direction === 1) {
                newRocketLocations.push( row + '' + (col + 1) )
            // newRocketLocations.push(row + '' + (col + 1));
            } else {
                newRocketLocations.push((row + 1) + '' + col);
            } 
        }
        return newRocketLocations; 
    })
    this.setState({
        newRocketLocations: newRocketLocations 
    })
     }

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

                // this.state.cellArray.map((cells) => {
                //     // QUESTION: HOW TO ACCESS A PROPERTY ON EACH INDIVIDUAL CELL
                //     cells.forEach(cell => {
                //         console.log(cell)
                //         // let newArray = [...this.state.cellArray[0]];
                //         // console.log(newArray)
                //         this.setState({
                //             hasRocketbeenHit: true
                // //         })
                // //     });
                // })
                const newArray = this.state.cellArray.map((cellz, key) => {
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
                />
                <button onClick={toggleModal} id="fireButton">Kill that mothafocka</button>
                </form>
            </div>
        )
    }
}

export default GameCells;