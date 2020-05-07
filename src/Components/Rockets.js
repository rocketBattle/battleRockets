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
  isDestroyed: function (rocket) {
    for (let i = 0; i < template.rockets.shipLength; i++) {
      if (template.rockets.detail.hits[i] !== "HIT") {
        return false;
      }
    } return true;
  },
  generateRocketLocations: function () {
    let locations;
    for (let i = 0; i < template.rockets.numShips; i++) {
      do {
        locations = this.generateRocket(); 
      } while (this.collision(locations));
      this.rockets[i].details.locations = locations;
    }
    console.log("rockets");
    console.log(this.rockets);
  },
  generateRocket: function() {
    let direction = Math.floor(Math.random() * 2); 
    let row, col; 
    if (direction === 1) {
      row = Math.floor(Math.random() * template.boardSize);
      col = Math.floor(Math.random() * template.boardSize - template.rockets.shipLength + 1);
    } else {
      col = Math.floor(Math.random() * template.boardSize);
      row = Math.floor(Math.random() * template.boardSize - template.rockets.shipLength + 1); 
    } 
    let newRocketLocations = [];
    for (let i = 0; i < template.rockets.shipLength; i++){
      if (direction === 1) {
        newRocketLocations.push(row + '' + (col + 1));
      } else {
        newRocketLocations.push((row + 1) + '' + col);
      } 
    }
    return newRocketLocations; 
  },
  collision: function(locations) {
    for (let i = 0; i < template.rockets.numShips; i++){
      let rocket = template.rockets[i]; 
      for (let j = 0; j < locations.length; j++) {
        if (rocket.locations.indexOf(locations[j]) >= 0 ) {
          return true;
        }
      }
    } 
    return false
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