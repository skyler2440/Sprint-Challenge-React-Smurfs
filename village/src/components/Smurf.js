import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>This is {props.name}</h3>
      <strong>{props.name} is {props.height}cm tall</strong>
      <p>{props.name} is {props.age} years old in "Smurf Years"</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

