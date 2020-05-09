








this.state.rocketLocation.map((setLocation) => {
   // if userInput matches any of the items in location state property, add to userHit total.
   if (setLocation.location.includes(this.state.userInput)) {
      this.setState({
         userHits: this.state.userHits + 1
      })
      // creating a new array to replace the old state property
      const newArray = this.state.cellArray.map((cellz) => {
         return (
            cellz.map((cell) => {
               // from the matched locations with user input, if also matches the cell id, change rockethasbeenhit to true
               if (this.state.userInput === cell.id) {
                  cell.hasRocketbeenHit = true
               }
               return cell;
            })
         )
      })
      // updating the previous old state with current set state.
      this.setState({
         cellArray: newArray
      })
   }
}) 




const letters = ["A", "B", "C", "D", "E", "F", "G"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const usedCombinations = [];

const shipCoordinate = () => {
   const letterPosition = Math.floor(Math.random() * 7);
   const numberPosition = Math.floor(Math.random() * 7);

   return {
      letter: letters[letterPosition],
      number: numbers[numberPosition]
   }
}

const ship = [];
const shipLength = 4;

const shipData = shipCoordinate();

for (let i = 0; i < shipLength; i++) {
   ship.push(`${shipData.letter}${shipData.number + i}`)
   usedCombinations.push = [`${shipData.letter}${shipData.number + i}`]
}




   // generate a random letter from the charArray
   const randomLetter = this.state.charArray[Math.floor(Math.random() * this.state.charArray.length)];
   // generate a random number from 1 to 7
   let randomNumber = Math.floor(Math.random() * 7) + 1;
   // concatenate the two variable together to make 1 location.
   let randomLocation = randomLetter + randomNumber;
   rocket.location.push(randomLocation);

   // If there are matching numbers in the array, change it?!
   if (randomLocation.includes(rocket.location[0, 1, 2, 3])) {
      console.log(`oh SHIT`);
   }
