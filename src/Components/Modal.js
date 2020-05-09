import React from "react";

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

// this was an attempt to get cellArray property into this modal so that we can check to see if rocket has been hit === true, then return a specific string, if its === false, then tell them you missed the rocket.
// issues: I dont remember how to use props as effectively as i thought i'd be. maybe you guys can take the reigns on this?


// {
//   this.state.cellArray.map((cellz) => {
//     return (
//       cellz.map((cell) => {
//         if (cell.hasRocketbeenHit === true) {
//           return (
//             <p> You hit a ship! </p>
//           )
//         } else if (cell.hasRocketbeenHit === false) {
//           return (

//             <p> You missed the ship!</p>
//           )
//         }
//       })
//     )
//   })
// }

  render() {
      const { toggleModal } = this.props;
      return (
        // Modal contents: close button, form, modal overlay for background
        <React.Fragment>
            <div className="modal">
              <button ref={this.button} className="closeModal" aria-label="close form" onClick={toggleModal} tabIndex="0">
              &times;
              </button>
              
              <p>You hit Falcon1</p>
              <p>Miss!</p>
            </div>
            <div className="modalOverlay" onClick={toggleModal}></div>
        </React.Fragment>
      );
  }
}