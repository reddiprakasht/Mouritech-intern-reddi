


import ReactDOM from 'react-dom/client'; // Correct import for React 18+
// import React from 'react';

var course="welcome to single page application-SPA"
var num1=40
var num2=50

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    

<>
<h1> {course}</h1>
<h4>num1 is {num1} and num2 is {num2}</h4>
<h3>sum of the 2 numbers is {num1 + num2}</h3>



</>

);
