import React, { Component } from 'react';

class Cell extends Component {
    constructor(){
        super();
        this.state = {
            rocketHit: false,
            blankHit: false,
        }
    }

    render() {
        return(
            <td id="7">A7</td>
        )
    }
}

export default Cell;