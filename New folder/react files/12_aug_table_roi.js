


import ReactDOM from 'react-dom/client'; // Correct import for React 18+
// import React from 'react';

var course="welcome to single page application-SPA"
var pamt=prompt("enter pamt")
var roi=prompt("enter roi")
var result=pamt*roi/100
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    

<>
<div>
<table border="2px">
    <tr>
        <td>principal amount</td>
        <td>Rate of intrest</td>
        <td>intrest amount</td>
    </tr>
    <tr>
        <td>{pamt}</td>
        <td>{roi}</td>
        <td>{result}</td>
    </tr>
</table>
</div>


</>

);
