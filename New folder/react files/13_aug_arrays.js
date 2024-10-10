


import ReactDOM from 'react-dom/client'; // Correct import for React 18+
// import React from 'react';


const students=['sunil', 'anil', 'arya', 'vijay','kiran']
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    

<>
{students}
<br/>
    <ul>
    
    <li>{students[0]} </li>
    <li>{students[1]} </li>
    <li>{students[2]} </li>
    <li>{students[3]} </li>
    <li>{students[4]} </li>
 
    </ul>


</>

);
