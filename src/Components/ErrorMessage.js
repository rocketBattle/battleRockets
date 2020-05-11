import React from 'react';

// Error message in case the user enters an invalid entry into the form
function ErrorMessage(props) {
    return (
        <div className="errorMessage">
            <h2>Don't be Safi.</h2>;
            <h3>Enter a valid guess!</h3>
        </div>
    )
}

export default ErrorMessage;