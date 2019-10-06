import React from 'react';

const Friend = (props) => {

    return(
        <>
        <h4>Name: {props.name}</h4>
        <h5>Age: {props.age}</h5>
        <h5>Email: {props.email}</h5>
        </>
    )
}

export default Friend;