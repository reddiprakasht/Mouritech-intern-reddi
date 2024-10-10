
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
// import React from 'react';
let uid=prompt("enter user id")
let psw=prompt("enter password")
let result;

if (uid==="niranjan" && psw==="mouritech"){
    result="authorised user"
}else {
    result="un-authorised user"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
<>  

<h1>your'e a : {result}</h1>
<h2> user id : {uid}</h2>
<h2>password is : {psw}</h2>


</>

);
