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
                <h2>player 1</h2>
                <p>place your damn rockets</p>


                {/* <RocketsInfo /> */}

                <div className="board">
                    <GameCells />
                </div>

            </div>
        )
    }
}

export default GameBoard;