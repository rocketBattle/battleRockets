import React, { Component } from 'react'; 
import GameCells from './GameCells'
import GameCells2 from './GameCells2'

// GameBoard displays the user interface for both players
class GameBoard extends Component {
    constructor() {
        super(); 
        this.state = {
            player1: true,
            player2: false
        }
    }

    // Function determines which user interface shows: player 1 or 2
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
                    
                    {/* Condition showing player 1's board */}
                    <div className={this.state.player1 ? "player1" : "displayNone"}>
                        <h2>Player 1's turn!</h2>
                        <p>Boom the opponent!</p>
                        <GameCells />
                    </div>
                    
                    {/* Condition showing player 2's board */}
                    <div className={this.state.player2 ? "player2" : "displayNone"}>
                        <h2>Player 2's turn!</h2>
                        <p>Boom the opponent!</p>
                        <GameCells2 />
                    </div>

                    {/* Button to toggle between user interfaces */}
                    <button className="lucas" onClick={this.nextPlayer}>Toggle</button>
                </div>
            </div>
        )
    }
}

export default GameBoard;