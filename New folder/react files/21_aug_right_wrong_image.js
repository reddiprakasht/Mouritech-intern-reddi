


import React from 'react';
import ReactDOM from 'react-dom/client';

import picR from "./images/right.png";
import picw from "./images/wrong.png";


const x = prompt("Enter the user id");
const y = prompt("Enter the password");


let imageSrc;
if (x === "niranjan" && y === "mouri") {
  imageSrc = picR;
} else {
  imageSrc = picw;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <img src={imageSrc} alt="" />
);
