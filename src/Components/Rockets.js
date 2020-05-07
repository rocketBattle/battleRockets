import React, { Component } from 'react';

const template = {
  boardSize: 7,
  rockets: [
    {
      falcon1: {
        numShips: 1,
        shipLength: 1,
        details: [
          {
            locations: [0],
            hits: [""]
          }
        ]
    } },
    {
      falcon9: {
        numShips: 1,
        shipLength: 2,
        details: [
          {
            locations: [0, 0],
            hits: ["", ""]
          }
        ]
    } },
    {
      falconHeavy: {
        numShips: 1,
        shipLength: 3,
        details: [
          {
            locations: [0, 0, 0],
            hits: ["", "", ""]
          }
        ]
    } },
    {
      starship: {
        numShips: 1,
        shipLength: 4,
        details: [
          {
            locations: [0, 0, 0, 0],
            hits: ["", "", "", ""]
          }
        ]
    } }
  ],
  boom: function (boomSpot) {
    for (let i = 0; i < template.rockets[i].numShips; i++) {
      let rocket = this.rockets[i];
      let index = rocket.location.indexOf(boomSpot);
      if (rocket.hits[index] === "hit") {
        // view.displayMessage("You've hits this location");
        return true;
      } else if (index >= 0) {
        rocket.hits[index] = "hit"
        // view.displayHit(boomSpot)
        // view.displayMessage("Hit")
        if (this.isSunk(rocket)) {
          // view.displayMessage("You sunk my battleship")
          this.shipsSunk++;
        }
        return true;
      }
    }
    // view.displayMiss(boomSpot);
    // view.displayMessage("You missed!");
    return false
  },
  isSunk: function(rocket) {
    // Looping again across the rockets array, to get the length of each rocket
    for (let i=0; i < this.rockets[i].shipLength; i++) {
        // Giving the 'hits' property an index. Until the rocket has been hit the amount of times equal to its length, return the rocket as still a valid target to hit.
        if (rocket.hits[i] !== "hit") {
            return false;
        }
    }
    // If the ship received hits equal to its length, return that the ship has been sunk.
    return true;
}
}

class Rockets extends Component {
  
  render() {
    // console.log(template.boom);
    template.boom()
    return (
      <div>
        <p>Hi hello hi</p>
      </div>
  )
}
}

export default Rockets;