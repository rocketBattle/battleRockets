import React from 'react'
import YouHitARocket from './YouHitARocket'
import YouMissed from './YouMissed'

function UserMessage (props) {
    const isHitTrue = props.isHitTrue;
    if (isHitTrue) { return <YouHitARocket />; } return <YouMissed />;
}

export default UserMessage;