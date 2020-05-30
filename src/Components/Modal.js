import React from "react";
import UserMessage from "./UserMessage"
import ErrorMessage from "./ErrorMessage"
import FocusTrap from 'focus-trap-react';

// Modal that shows conditional text based on user input
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    
      // Create ref to allow “close” button to be focused on when modal opens.
      this.button = React.createRef();
    
      // Bind escape function to close modal when esc key is pressed
      this.escFunction = this.escFunction.bind(this);
    
      this.state = {
        isHitTrue: false,
        rocketName: "",
        charArray2: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        isValidGuess: true,
        boardSize: 7
      }
  }

  // Function to close modal when esc key is pressed
  escFunction(event) {
    const { toggleModal } = this.props;
    if(event.keyCode === 27) {
      toggleModal();
    }
  }

  componentDidMount() {

    // Focus on close button when modal opens
    this.button.current.focus();
    
    // When modal opens, prevent the background from scrolling
    document.body.style.overflow = 'hidden';
    
    // Check if a rocket was hit
    this.didWeGetAHitYet();
  
    // Check if player guess is valid
    this.validateGuess();
    
    // Add event listener for esc key press
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    
    // Remove event listener for esc key press
    document.removeEventListener("keydown", this.escFunction, false);

    // While modal is closed, allow page to scroll
    document.body.style.overflow = 'unset';
  }

  // Function to identify if the value the user input and the cell that it connected with has a rocket and what is that rocket's name
  didWeGetAHitYet = () => {
    const newArray = this.props.cellArray;
    newArray.map((cellz) => {
      const finalCell = cellz.find(cell => {return cell.id === this.props.userInput})
      finalCell && this.setState ({
        isHitTrue: finalCell.hasRocket,
        rocketName: finalCell.name
      })
      return null;   
    }, this)
  }

  // Function checks if user entered a valid guess or a random string 
  validateGuess = () => {
    const guess = this.userGuess(this.props.userInput);
      if (!guess) {
          this.setState({
            isValidGuess: false
          })
      } else {
          return true
    }
  } 

  // This function does the error handling to see if the user input value is valid or random
  userGuess = (guess) => {
    if (guess === null || guess.length !== 2) {
    } else {
      let firstChar = guess.charAt(0);
      let letter = this.state.charArray2.indexOf(firstChar);
      let number = guess.charAt(1);

      // if letter or number is not a number, letters are too long/short then alert user for incorrect use. 
      if (isNaN(letter) || isNaN(number) || letter < 0 || letter > this.state.boardSize || number <= 0 || number > this.state.boardSize) {
      } else {
          return letter + number;
      }
    }
    return null;
}

  render() {
    const { toggleModal } = this.props;
      if (this.state.isValidGuess) { return (
        // If the user entered a valid guess, then return a 'You hit' or 'You missed' component.
        <FocusTrap>
          <div className="modalContainer">
            <div className="modal">
                <button ref={this.button} className="closeModal" aria-label="close form" onClick={toggleModal} tabIndex="0">  
                &times;
                </button>
              <UserMessage isHitTrue={this.state.isHitTrue} rocketName={this.state.rocketName} />
            </div>
            <div className="modalOverlay" onClick={toggleModal}></div>
          </div>
        </FocusTrap>    
      )
      } return (
        // If the user entered an invalid guess, return an error message.
        <>
          <div className="modal">
            <button ref={this.button} className="closeModal" aria-label="close results pop-up" onClick={toggleModal} tabIndex="0">  
            &times;
            </button>
            <ErrorMessage/>
          </div>
          <div className="modalOverlay" onClick={toggleModal}></div>
        </>
      )
  }
}