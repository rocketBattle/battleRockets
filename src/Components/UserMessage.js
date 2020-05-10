import React from 'react'
import YouHitARocket from './YouHitARocket'
import YouMissed from './YouMissed'

function UserMessage (props) {
    // console.log(props.isHitTrue)
    const isHitTrue = props.isHitTrue;
    if (isHitTrue) { return <YouHitARocket rocketName = {props.rocketName}/>; } return <YouMissed />;
}

export default UserMessage;