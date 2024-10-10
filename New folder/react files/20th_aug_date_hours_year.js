
// import ReactDOM from 'react-dom/client'; // Correct import for React 18+

// var dt= Date()
// var obj=new Date()
// var h=obj.getHours()
// var m=obj.getMinutes()
// var s=obj.getSeconds()
// var dt=obj.getDate()
// var mt=obj.getMonth()
// var yr=obj.getFullYear()

// if(h<=12){
//     document.write("Good morning")
// }else {
//     document.write("")
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
    
// <>
// {/* <h1> {dt}</h1> */}


// <h2> {h}: {m}:{s}</h2>
// <h3>{dt}/{mt}/{yr} </h3>



// </>

// );





import React from 'react';
import ReactDOM from 'react-dom/client';

const obj = new Date();
const h = obj.getHours();
const m = obj.getMinutes();
const s = obj.getSeconds();
const dt = obj.getDate();
const mt = obj.getMonth() + 1;
const yr = obj.getFullYear();


const greeting = h < 12 ? "Good morning" : "";
 
const greeting1 = h>=12 && h<=17 ? "gud evening" : " ";

const App = () => {
  return (
    <>
      <h1>{greeting}</h1>
      <h2>{h}:{m}:{s}</h2>
      <h3>{dt}/{mt}/{yr}</h3>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>

);
