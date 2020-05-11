import React, { Component } from 'react'; 
import RocketsInfo from './RocketsInfo';
import GameCells from './GameCells'
import GameCells2 from './GameCells2'

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
                    <h2>Player 2's turn!</h2>
                    <p>Boom the opponent!</p>

                    <GameCells2 />
                </div>
            </div>
        )
    }
}

export default GameBoard;