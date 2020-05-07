import React, { Component } from 'react';
import Rockets from './Rockets'

class GameCells extends Component {
    constructor() {
        super()
        this.state = {
            hit: false,
            empty: true,
            userInput: '',
            isThereRockets: ['A1','A2','A3'],
        }
    }

    // clickFunction = (e) => {
        
    //     if (this.state.empty === true) {
    //         this.setState({
    //             hit: false
                
    //         }) 
    //         console.log("You miss!") 
    //     } else if (this.state.empty === false) {
    //         this.setState({
    //             hit: true,
    //             empty: true
    //         })
    //         console.log("Hit!");
    //     }
    //     console.log(this.state.empty)
    // }

    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
        console.log(this.state.userInput)
    }

    //compare the input against the string content of the cell. 
    // 
    checkHit = (e) => {
        e.preventDefault();

        console.log(this.state.userInput)

        console.log(e.target)
        if (this.state.isThereRockets.includes(this.state.userInput)) {
            console.log('You hit a ship!')
            
        } else {
            console.log('noooooooooooo you suck, never play this game again')
        }
        //call clickFunction()
    }


    render(){
        
        return (
            

            

            <div className="board">
                <Rockets />

                    <div className="messageArea"></div>
                <form action="#" onSubmit={this.checkHit}>
                    <table>
                        <tbody>
                            <tr>
                                <td onClick={this.clickFunction} id="A1" data-value='A1'>A1</td>
                                <td id="2">A2</td>
                                <td id="3">A3</td>
                                <td id="4">A4</td>
                                <td id="5">A5</td>
                                <td id="6">A6</td>
                                <td id="7">A7</td>
                            </tr>
                            <tr>
                                <td id="8">B1</td>
                                <td id="9">B2</td>
                                <td id="10">B3</td>
                                <td id="11">B4</td>
                                <td id="12">B5</td>
                                <td id="13">B6</td>
                                <td id="14">B7</td>
                            </tr>
                            <tr>
                                <td id="15">C1</td>
                                <td id="16">C2</td>
                                <td id="17">C3</td>
                                <td id="18">C4</td>
                                <td id="19">C5</td>
                                <td id="20">C6</td>
                                <td id="21">C7</td>
                            </tr>
                            <tr>
                                <td id="22">D1</td>
                                <td id="23">D2</td>
                                <td id="24">D3</td>
                                <td id="25">D4</td>
                                <td id="26">D5</td>
                                <td id="27">D6</td>
                                <td id="28">D7</td>
                            </tr>
                            <tr>
                                <td id="29">E1</td>
                                <td id="30">E2</td>
                                <td id="31">E3</td>
                                <td id="32">E4</td>
                                <td id="33">E5</td>
                                <td id="34">E6</td>
                                <td id="35">E7</td>
                            </tr>
                            <tr>
                                <td id="36">F1</td>
                                <td id="37">F2</td>
                                <td id="38">F3</td>
                                <td id="39">F4</td>
                                <td id="40">F5</td>
                                <td id="41">F6</td>
                                <td id="42">F7</td>
                            </tr>
                            <tr>
                                <td id="43">G1</td>
                                <td id="44">G2</td>
                                <td id="45">G3</td>
                                <td id="46">G4</td>
                                <td id="47">G5</td>
                                <td id="48">G6</td>
                                <td id="49">G7</td>
                            </tr>
                        </tbody>
                    </table>
                        <input id="userInput" onChange={this.handleUserInput} type="text" placeholder="A1" />
                        <button id="fireButton" >Kill that mothafocka</button>
                    </form>
                </div>


        )
    }
}




export default GameCells;