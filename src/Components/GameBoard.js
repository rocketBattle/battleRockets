import React, { Component } from 'react'; 
import RocketsInfo from './RocketsInfo';
import GameCells from './GameCells'
import GameCells2 from './GameCells2'

class GameBoard extends Component {
    constructor() {
        super(); 
        this.state = {
            coordinates1: [],
            cells1: undefined,
            player1: true,
            player2: false
        }
    }

    componentDidMount() {
        // if (this.state.cells) {
        //     console.log(`hello`)
        // } else {
        //     console.log(`bye`)
        // }
    }

    nextPlayer = () => {
        this.setState({
            player1: !this.state.player1,
            player2: !this.state.player2
        })
    }

    render() {
        return(
            <div className="wrapper">
                <div className="boardContainer">
                    
                    
                    <div className={this.state.player1 ? "player1" : "displayNone"}>
                        <h2>Player 1's turn!</h2>
                        <p>Boom the opponent!</p>
                        <GameCells />
                    </div>
                    
                    <div className={this.state.player2 ? "player2" : "displayNone"}>
                        <h2>Player 2's turn!</h2>
                        <p>Boom the opponent!</p>
                        <GameCells2 />
                    </div>
                    <button className="nextPlayer" onClick={this.nextPlayer}>Next player's turn!</button>
                </div>
            </div>
        )
    }
}

export default GameBoard;