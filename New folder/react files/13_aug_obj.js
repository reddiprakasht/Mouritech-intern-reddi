


import ReactDOM from 'react-dom/client'; // Correct import for React 18+
// import React from 'react';

const person= {
    name:"ajay",
    age:"17",
    place:"hyd",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    

<>
<h1>{person.name}</h1>
<h2> {person.place}</h2>
<h3> {person.age}</h3>



</>

);
