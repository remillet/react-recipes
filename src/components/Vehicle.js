import React from 'react';
import PropTypes from 'prop-types';

const Vehicle = (props) => {
  const { vehicle, sound } = props;

  return (
    <p>A {vehicle} makes this sound: {sound}</p>
  );
};

Vehicle.propTypes = {
  vehicle: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired,
};

export default Vehicle;
