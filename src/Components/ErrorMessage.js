import React from 'react';

// Error message in case the user enters an invalid entry into the form
function ErrorMessage(props) {
    return (
        <div className="errorMessage">
            <h2>Please enter a valid guess!</h2>
        </div>
    )
}

export default ErrorMessage;