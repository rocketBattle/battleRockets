import React from "react";
import UserMessage from './UserMessage'

export default class Modal extends React.Component {

  constructor(props) {
      super(props);
      // Create ref to allow "close" button to be focused on when modal opens.
      this.button = React.createRef();
      this.state = {
        isHitTrue: false,
        rocketName: ""
      }
  }

  // Focus on close button when modal opens
  componentDidMount() {
      this.button.current.focus();
      this.didWeGetAHitYet();
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

  render() {
      const { toggleModal } = this.props;
      return (
        // Modal contents: close button, form, modal overlay for background
        <React.Fragment>
            <div className="modal">
              <button ref={this.button} className="closeModal" aria-label="close form" onClick={toggleModal} tabIndex="0">  
              &times;
              </button>
              <UserMessage isHitTrue={this.state.isHitTrue} rocketName = {this.state.rocketName}/>
            </div>
            <div className="modalOverlay" onClick={toggleModal}></div>
        </React.Fragment>
      );
  }
}