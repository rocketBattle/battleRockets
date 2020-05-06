import React, { Component } from 'react';

const cellsArray = [
    {
        id: 0,
        className: "cell",
    },
    {
        id: 1,
        className: "cell",
    },
    {
        id: 2,
        className: "cell",
    },
    {
        id: 3,
        className: "cell",
    },
    {
        id: 4,
        className: "cell",
    },

    {
        id: 5,
        className: "cell",
    },
    {
        id: 6,
        className: "cell",
    },
    {
        id: 7,
        className: "cell",
    },
    {
        id: 8,
        className: "cell",
    },
    {
        id: 9,
        className: "cell",
    }
]

class GameCells extends Component {

    render(){
        
        return(
                <ul>{cellsArray.map((cell) => {
                        const cellId = cell.id;

                        return (
                            <li>{cellId}</li>
                        
                        )})
                    }   
            </ul>
        )
    }
}




export default GameCells;