import React from "react";
import UserMessage from "./UserMessage"
import ErrorMessage from "./ErrorMessage"
import { Link } from 'react-router-dom';
export default class Modal extends React.Component {
  constructor(props) {
      super(props);
      // Create ref to allow “close” button to be focused on when modal opens.
      this.button = React.createRef();
      this.state = {
        isHitTrue: false,
        rocketName: "",
        charArray2: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        isValidGuess: true,
        boardSize: 7
      }
  }
  // Focus on close button when modal opens
  componentDidMount() {
      this.button.current.focus();
      this.didWeGetAHitYet();
      this.validateGuess();
  }
  didWeGetAHitYet = () => {
    const newArray = this.props.cellArray;
    newArray.map((cellz) => {
      const finalCell = cellz.find(cell => {return cell.id === this.props.userInput})
      finalCell && this.setState ({
        isHitTrue: finalCell.hasRocket,
        rocketName: finalCell.name
      })   
    }, this)
  }

  validateGuess = () => {
    const guess = this.userGuess(this.props.userInput);
          console.log(this.props.userInput)
      if (!guess) {
          this.setState({
            isValidGuess: false
          })
      } else {
          return true
    }
  } 

  nextPlayer = () => {
    const element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
  }

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
      // const isHitTrue = props.isHitTrue;
      if (this.state.isValidGuess) { return (
        <React.Fragment>
          <div className="modal">
              <button ref={this.button} className="closeModal" aria-label="close form" onClick={toggleModal} tabIndex="0">  
              &times;
              </button>
            <UserMessage isHitTrue={this.state.isHitTrue} rocketName={this.state.rocketName} />
            <div className="battleLink">
              <button className="nextPlayer" onClick={this.nextPlayer}>Next</button>
            </div>
          </div>
              <div className="modalOverlay" onClick={toggleModal}></div>
        </React.Fragment>    
      )
      } return (
        <>
          <div className="modal">
            <button ref={this.button} className="closeModal" aria-label="close form" onClick={toggleModal} tabIndex="0">  
            &times;
            </button>
            <ErrorMessage/>
          </div>
          <div className="modalOverlay" onClick={toggleModal}></div>
        </>
      )

      // return (
      //   // Modal contents: close button, form, modal overlay for background
      //   <React.Fragment>
      //       <div className="modal">
      //         <button ref={this.button} className="closeModal" aria-label="close form" onClick={toggleModal} tabIndex="0">  
      //         &times;
      //         </button>
      //         {/* <UserMessage isHitTrue={this.state.isHitTrue} rocketName = {this.state.rocketName}/> */}
      //       </div>
      //       <div className="modalOverlay" onClick={toggleModal}></div>
      //   </React.Fragment>
      // );
  }
}