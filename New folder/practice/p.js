

import React from 'react';
import ReactDOM from 'react-dom/client';

import pic1 from './images/right.png'
import pic2 from './images/wrong.png'

let x = prompt('enter user ID')
let y = prompt('enter password')

let imgSrc;

if (x==='niranjan' && y==='mouritech') {

imgSrc=pic1;

}else{
imgSrc=pic2;

}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


    <>
<img src={imgSrc}/>


    
    </>
)
