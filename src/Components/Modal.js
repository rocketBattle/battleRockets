import React from "react";
import UserMessage from './UserMessage'

export default class Modal extends React.Component {

  constructor(props) {
      super(props);
      // Create ref to allow "close" button to be focused on when modal opens.
      this.button = React.createRef();
      this.state = {
        isHitTrue: false
      }
  }

  // Focus on close button when modal opens
  componentDidMount() {
      this.button.current.focus();
      this.didWeGetAHitYet();
  }

  didWeGetAHitYet = () => {
    const cellArrayCopy = this.props.cellArray;
    cellArrayCopy.map((cellz) => {
      console.log("these are cellz", cellz)
      const finalCell = cellz.find(cell => {console.log(cell.id, this.props.userInput); return cell.id === this.props.userInput})
      console.log(this.props.userInput, finalCell)

      finalCell && this.setState ({
        isHitTrue: finalCell.hasRocket
      })   

    }, this)

  }

  render() {
      const { toggleModal } = this.props;
      return (
        // Modal contents: close button, form, modal overlay for background
        <React.Fragment>
            <div className="modal">
              <button ref={this.button} className="closeModal" aria-label="close form" onClick={toggleModal} tabIndex="0">  
              &times;
              </button>
              <UserMessage isHitTrue={this.state.isHitTrue}/>
            </div>
            <div className="modalOverlay" onClick={toggleModal}></div>
        </React.Fragment>
      );
  }
}