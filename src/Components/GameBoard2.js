import React, { Component } from 'react'; 

class GameBoard2 extends Component {
    constructor() {
        super(); 
        this.state = {
            coordinates2: [],
            cells2: undefined
        }
    }

    componentDidMount() {
        if (this.state.cells) {
            console.log(`hello`)
        } else {
            console.log(`bye`)
        }
    }

    render() {
        return(
            <div className="wrapper">
                <h2>player 2</h2>
                <p>place your damn rockets</p>

                <div className="board">
                    <div id="1" className="cells2"></div>
                    <div id="2" className="cells2"></div>
                    <div id="3" className="cells2"></div>
                    <div id="4" className="cells2"></div>
                    <div id="5" className="cells2"></div>
                    <div id="6" className="cells2"></div>
                    <div id="7" className="cells2"></div>
                    <div id="8" className="cells2"></div>
                    <div id="9" className="cells2"></div>
                    <div id="10" className="cells2"></div>
                    <div id="11" className="cells2"></div>
                    <div id="12" className="cells2"></div>
                    <div id="13" className="cells2"></div>
                    <div id="14" className="cells2"></div>
                    <div id="15" className="cells2"></div>
                    <div id="16" className="cells2"></div>
                    <div id="17" className="cells2"></div>
                    <div id="18" className="cells2"></div>
                    <div id="19" className="cells2"></div>
                    <div id="20" className="cells2"></div>
                    <div id="21" className="cells2"></div>
                    <div id="22" className="cells2"></div>
                    <div id="23" className="cells2"></div>
                    <div id="24" className="cells2"></div>
                    <div id="25" className="cells2"></div>
                    <div id="26" className="cells2"></div>
                    <div id="27" className="cells2"></div>
                    <div id="28" className="cells2"></div>
                    <div id="29" className="cells2"></div>
                    <div id="30" className="cells2"></div>
                    <div id="31" className="cells2"></div>
                    <div id="32" className="cells2"></div>
                    <div id="33" className="cells2"></div>
                    <div id="34" className="cells2"></div>
                    <div id="35" className="cells2"></div>
                    <div id="36" className="cells2"></div>
                    <div id="37" className="cells2"></div>
                    <div id="38" className="cells2"></div>
                    <div id="39" className="cells2"></div>
                    <div id="40" className="cells2"></div>
                    <div id="41" className="cells2"></div>
                    <div id="42" className="cells2"></div>
                    <div id="43" className="cells2"></div>
                    <div id="44" className="cells2"></div>
                    <div id="45" className="cells2"></div>
                    <div id="46" className="cells2"></div>
                    <div id="47" className="cells2"></div>
                    <div id="48" className="cells2"></div>
                    <div id="49" className="cells2"></div>
                    <div id="50" className="cells2"></div>
                    <div id="51" className="cells2"></div>
                    <div id="52" className="cells2"></div>
                    <div id="53" className="cells2"></div>
                    <div id="54" className="cells2"></div>
                    <div id="55" className="cells2"></div>
                    <div id="56" className="cells2"></div>
                    <div id="57" className="cells2"></div>
                    <div id="58" className="cells2"></div>
                    <div id="59" className="cells2"></div>
                    <div id="60" className="cells2"></div>
                    <div id="61" className="cells2"></div>
                    <div id="62" className="cells2"></div>
                    <div id="63" className="cells2"></div>
                    <div id="64" className="cells2"></div>
                    <div id="65" className="cells2"></div>
                    <div id="66" className="cells2"></div>
                    <div id="67" className="cells2"></div>
                    <div id="68" className="cells2"></div>
                    <div id="69" className="cells2"></div>
                    <div id="70" className="cells2"></div>
                    <div id="71" className="cells2"></div>
                    <div id="72" className="cells2"></div>
                    <div id="73" className="cells2"></div>
                    <div id="74" className="cells2"></div>
                    <div id="75" className="cells2"></div>
                    <div id="76" className="cells2"></div>
                    <div id="77" className="cells2"></div>
                    <div id="78" className="cells2"></div>
                    <div id="79" className="cells2"></div>
                    <div id="80" className="cells2"></div>
                    <div id="81" className="cells2"></div>
                    <div id="82" className="cells2"></div>
                    <div id="83" className="cells2"></div>
                    <div id="84" className="cells2"></div>
                    <div id="85" className="cells2"></div>
                    <div id="86" className="cells2"></div>
                    <div id="87" className="cells2"></div>
                    <div id="88" className="cells2"></div>
                    <div id="89" className="cells2"></div>
                    <div id="90" className="cells2"></div>
                    <div id="91" className="cells2"></div>
                    <div id="92" className="cells2"></div>
                    <div id="93" className="cells2"></div>
                    <div id="94" className="cells2"></div>
                    <div id="95" className="cells2"></div>
                    <div id="96" className="cells2"></div>
                    <div id="97" className="cells2"></div>
                    <div id="98" className="cells2"></div>
                    <div id="99" className="cells2"></div>
                    <div id="100" className="cells2"></div>
                </div>

            </div>
        )
    }
}

export default GameBoard2;