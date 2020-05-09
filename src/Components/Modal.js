import React from "react";
import UserMessage from './UserMessage'

export default class Modal extends React.Component {

  constructor() {
      super();
      // Create ref to allow "close" button to be focused on when modal opens.
      this.button = React.createRef();
  }

  // Focus on close button when modal opens
  componentDidMount() {
      this.button.current.focus();
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
              <UserMessage isHitTrue={false}/>
              {/* <p>You hit Falcon1</p>
              <p>Miss!</p> */}
            </div>
            <div className="modalOverlay" onClick={toggleModal}></div>
        </React.Fragment>
      );
  }
}