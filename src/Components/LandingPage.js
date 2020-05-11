import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

// Home page for the application
class LandingPage extends Component {
    render() {
        return (
            <div>
                {/* Header with user introduction to the game */}
                <header>
                    <div className="wrapper">
                        <h1>Battle Rockets!</h1>
                        <h3><span className="fatText">Destroy</span> the enemy's rockets before they <span className="fatText">destroy</span> yours!</h3>
                    </div>
                </header>
                <main>
                    <div className="wrapper">
                        {/* Link to proceed with the game */}
                        <div className="battleLink">
                            <Link className="enterBattle" to="GameBoard">enter the battle!</Link>
                        </div>
                        {/* Instructions on how to play */}
                        <h2>How to play</h2>
                        <ul>
                            <li>
                                <p>SpaceX rockets are randomly generated for you and your opponent.</p>
                            </li>
                            <li>
                                <p>Your main goal is to <span className="fatText">destroy</span> your opponent's rockets by guessing where they are hidden on the board, one square at a time! </p>
                            </li>
                            <li>
                                <p>For every rocket you hit, you get some cool info about it from SpaceX!</p>
                            </li>
                            <li>
                                <p>The person who <span className="fatText">destroys</span> all 4 of their opponent's rockets wins!</p>
                            </li>
                        </ul>                            
                    </div>
                </main>
                <footer>
                    <div className="wrapper">
                        {/* Footer with creator portfolio links */}
                        <div className="footerContent">
                            <div className="creators">
                                <h4>Built by:</h4>
                                <div className="creatorsLinks">
                                    <a href="https://alisacodes.dev/" rel="noopener noreferrer" target="_blank">Alisa Kitkina</a>
                                    <a href="http://marichka.ca/" rel="noopener noreferrer" target="_blank">Mariya Morosovska</a>
                                    <a href="http://www.mcabrera.ca/" rel="noopener noreferrer" target="_blank">Miguel Cabrera</a>
                                    <a href="https://lucassilbernagel.com/" rel="noopener noreferrer" target="_blank">Lucas Silbernagel</a>
                                </div>
                            </div>
                            {/* Credits */}
                            <div className="credits">
                                <h4>Rocket data provided by <a href="https://docs.spacexdata.com/?version=latest">SpaceX Rocket API</a></h4>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default LandingPage;