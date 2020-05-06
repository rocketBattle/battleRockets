import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="wrapper">
                        <h1>Battle Rockets!</h1>
                        <h3>Destroy enemy's rockets before they boom yours!</h3>
                    </div>
                </header>
                <main>
                    <div className="wrapper">
                        <h2>How to play</h2>
                        <ol>
                            <li>
                                <p>Start by placing rockets on the board</p>
                            </li>
                            <li>
                                <p>Pass the device to another player to do the same</p>
                            </li>
                            <li>
                                <p>Try to hit and boom your opponent's rockets by guessing where they are hidden on the board, one square at a time</p>
                            </li>
                            <li>
                                <p>The person who booms 10 rockets wins!</p>
                            </li>
                        </ol>                            
                        
                        <Link to="GameBoard">enter the battle!</Link>

                    </div>
                </main>
                <footer>
                    <div className="wrapper">
                        <h4>Built by:</h4>
                        <a href="portfolio.com">Alisa Kitkina</a>
                        <a href="portfolio.com">Mariya Morosovska</a>
                        <a href="portfolio.com">Miguel Cabrera</a>
                        <a href="https://lucassilbernagel.com/">Lucas Silbernagel</a>
                        <h4>Rocket data provided by <a href="https://docs.spacexdata.com/?version=latest">SpaceX Rocket API</a></h4>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default LandingPage;