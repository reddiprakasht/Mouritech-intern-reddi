
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
// import React from 'react';
let marks= prompt("enter marks")
let result;
if (marks<=35){
    result="Failed"
}else {
    result="passed"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
<>  
<h1>your'e : {result}</h1>


</>

);
