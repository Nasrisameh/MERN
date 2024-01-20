import React, { useState } from "react";

const PersonCard = props => {
    const [state, setState] = useState({
    updatedAge: props.age
    });
    const clickHandler = () => {
    setState({
        updatedAge: state.updatedAge + 1
    });
    };
    return (
    <div>
        <h1>
        {props.lastName}, {props.firstName}
        </h1>
        <p>Age: {state.updatedAge}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick={clickHandler}>
        Birthday Button for {props.firstName} {props.lastName}
        </button>
    </div>
    );
};
export default PersonCard;