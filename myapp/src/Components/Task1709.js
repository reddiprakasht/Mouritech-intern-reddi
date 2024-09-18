import React, { useState } from 'react';

export default function Taks1709() {
  const [bgClass, setBgClass] = useState('');

  const ColorChange = (event) => {
    setBgClass(event.target.value)
  };

  return (
    <>
    <body style={{backgroundColor:bgClass}}>

    <select onChange={ColorChange}>
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

    </body>
      
    </>
  );
}
