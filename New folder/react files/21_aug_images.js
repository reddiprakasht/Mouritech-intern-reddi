
import React from 'react';
import ReactDOM from 'react-dom/client';

import pic from "./abd.jpg"
import pic2 from "./images/abd.jpg"


const pic1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWd-yah01d6DJZUQf-vfArx33qhjZVUoCzfQ&s"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  
  <h1> Images</h1>

  <img src={pic} alt="" width={300}/>
   <img src={pic1} alt="" width={200} height={200}/>




{/* this is in public folder and we can access it directly */}
   <img src="logo192.png"/>
  

  <img src={pic2} alt="" width={500}/>
  
  </>


);
