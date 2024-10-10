


import ReactDOM from 'react-dom/client'; // Correct import for React 18+
// import React from 'react';


var pamt=prompt("enter doller")
var roi=83.94
var result=pamt*roi
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    

<>
<div>
<table border="2px">
    <tr>
        <td>doller</td>
        <td>1 doller</td>
        <td>dollers in rs</td>
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
