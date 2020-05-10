import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="wrapper">
                        <h1>Battle Rockets!</h1>
                        <h3><span className="fatText">Destroy</span> enemy's rockets before they <span className="fatText">boom</span> yours!</h3>
                    </div>
                </header>
                <main>
                    <div className="wrapper">
                        <h2>How to play</h2>
                        <ul>
                            <li>
                                <p>Rockets are randomly generated for you and your opponent.</p>
                            </li>
                            <li>
                                <p>Your main goal is to <span className="fatText">boom</span> your opponent's rockets by guessing where they are hidden on the board, one square at a time! </p>
                            </li>
                            <li>
                                <p>With every rocket you hit, you get some cool info about SpaceX rockets!</p>
                            </li>
                            <li>
                                <p>The person who <span className="fatText">booms</span> 10 rockets wins!</p>
                            </li>
                        </ul>                            
                        
                        <Link className="enterBattle" to="GameBoard">enter the battle!</Link>

                    </div>
                </main>
                <footer>
                    <div className="wrapper">
                        <div className="footerContent">
                            <div className="creators">
                                <h4>Built by:</h4>
                                <a href="portfolio.com" rel="noreferrer" target="_blank">Alisa Kitkina</a>
                                <a href="portfolio.com" rel="noreferrer" target="_blank">Mariya Morosovska</a>
                                <a href="portfolio.com" rel="noreferrer" target="_blank">Miguel Cabrera</a>
                                <a href="https://lucassilbernagel.com/" rel="noreferrer" target="_blank">Lucas Silbernagel</a>
                            </div>
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







// const newArray = this.state.cellArray.map((cellz) => {
//     return (
//         cellz.map((cell) => {
//             // from the matched locations with user input, if also matches the cell id, change rockethasbeenhit to true
//             if (this.state.userInput === cell.id) {
//                     cell.hasRocketbeenHit = true
//             }
//             return cell;
//         })
//     )
// })
// // updating the previous old state with current set state.
// this.setState ({
//     cellArray: newArray
// })
// }
// }) 
// console.log(this.state.userHits)
// }