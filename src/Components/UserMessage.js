import React from "react"
import YouHitARocket from "./YouHitARocket"
import YouMissed from "./YouMissed"

// This component decided if we need to show a 'You hit a rocket' or a 'You missed' message to the user
function UserMessage (props) {
    const isHitTrue = props.isHitTrue;
    if (isHitTrue) { return <YouHitARocket rocketName = {props.rocketName}/>; } return <YouMissed />;
}
export default UserMessage;