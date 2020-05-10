import React, { Component } from 'react'; 
import RocketsInfo from './RocketsInfo';
import GameCells from './GameCells'

class GameBoard extends Component {
    constructor() {
        super(); 
        this.state = {
            coordinates1: [],
            cells1: undefined
        }
    }

    componentDidMount() {
        // if (this.state.cells) {
        //     console.log(`hello`)
        // } else {
        //     console.log(`bye`)
        // }
    }

    render() {
        return(
            <div className="wrapper">
                <div className="boardContainer">
                    <h2>Player 1's turn!</h2>
                    <p>Boom the opponent!</p>

                    <GameCells />
                </div>
            </div>
        )
    }
}

export default GameBoard;