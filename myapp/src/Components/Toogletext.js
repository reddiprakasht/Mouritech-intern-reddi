import React, { useState } from 'react'


export default function Toogletext() {

    const [isVisible, setIsVisible]=useState(false);

    const Toogletext=()=>{
        setIsVisible(!isVisible);
    };
  return (
    <div>

        <button onClick={Toogletext}>{isVisible ? "hide-text" : "show-text"}</button>
      
    </div>
  )
}
