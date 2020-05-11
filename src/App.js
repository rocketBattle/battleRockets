import React, { Component } from 'react';
import './App.scss';
import LandingPage from './Components/LandingPage';
import GameBoard from './Components/GameBoard';
import GameBoard2 from './Components/GameBoard2';

import { 
    BrowserRouter as Router, 
    Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/GameBoard" component={GameBoard} />
                <Route exact path="/GameBoard2" component={GameBoard2} />
            </Router>
        )
    }
}

export default App;

// PSEUDO CODE

// COMPONENTS:
// gameBoard component;
    // rocketInfo component;
    // modal popup; 
// landingPage component; 
    // stores axios response! (woohoo so cool)
    // api link: https://docs.spacexdata.com/?version=latest#5fcdb875-914f-4aef-a932-254397cf147a
// ACTUAL PSEUDO CODE
// 1. Landing page where the user is introduced to a start button
    // short instructions 
        // followed by axios call to display rockets info on button press, i.e. START 
            // create a function that draws out a specific rocket (description + wiki url link thing)
// 2. Then, display a message for player1 to place rockets on the board. After player1 is done, do the same thing for player2. GAME BOARD is made from a div that contains smaller "cell" divs.
    // have two different states for player1 and player2
    // each rocket has description to it from the axios call 
    // have a button to continue ONLY when the user completes the placing action

    // THE INITIAL PLACEMENT: state is undefined ===> ships are placed ===> state is defined
        // allow the user to rotate rockets 
        // make rockets kinda draggable (but you don't have to hold your mouse!!! wooow magic)? 
        // ERROR HANDLING: prevent the user from placing rockets TOO close to each other 
            // by toggling classes on the nearby cells ===> queue an alert "plz need space between ships"

    // PLAYER1: CHOOSE SHIPS ===> gap page "it's next person's turn" ===> PLAYER2: CHOOSE SHIPS ===> gap page "OKAY, THE BATTLE IS ABOUT TO START. PASS THE DEVICE TO THE PLAYER1!"
// 3. Each person's turn has TWO game boards displayed:
    // first ===> the enemy field
    // second ===> their own field
    // onClick add a disabled attribute to "cell" ===> display results based on the ship placement 
// 4. Game ends when someone's ships are ALL destroyed ===> queue the message "PLAYERX WON!"+"play again?"
    // to determine whether or not a rocket was destroyed:
        // create a comparison that compares a set length of a rocket to the number of "hits" it received

    // to determine whether or not a player missed: 
        // if state is STILL undefined ===> haha they missed ​
    // to determine who's turn it is now
        // if "hit" === true ===> playerX goes again 
        // if "hit" === false ===> haha loser its the other persons turn 

    // to determine whether or not a game has been won: 
    // check if a total of "n" divs have their states as "hit" (defined) === victory condition
    // loop ===> in the loop "if else" statement
        // statement looks for up to "n" divs that have their state as "hit" 
        // loop checks if the criteria has been fulfilled​

// RESOURCES:
// tiktaktoe ===> https://reactjs.org/tutorial/tutorial.html
// https://github.com/victor-magarlamov/battleships?files=1
// https://react.rocks/example/Battleships

// STRETCH GOALS 
// create a unique irl 
    // self-identify themselves as player1/player2 