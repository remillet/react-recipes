import React from 'react';

const Vehicle = (props) => {
    const { vehicle, sound } = props

    return (
        <p>A {vehicle} makes this sound: {sound}</p>
    );
}

export default Vehicle;