import React from "react";

const PersonCard = props => {
    const {firstName, lastName, hairColor} = props;
    return (
    <div>
        <h1>
        {props.lastName}, {props.firstName}
        </h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
    </div>
    );
};
export default PersonCard;