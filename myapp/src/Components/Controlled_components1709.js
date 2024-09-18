import React, { useState } from 'react'

export default function Controlledcomponents1709() {
    var [state, setState]=useState("react")
    var [color, setColor]=useState("green")

  

    const handler =(e)=>{
        setState(e.target.value)
    }


  return (
    <div>
      <h2 className={color}>hello</h2>
      <input type='text' value={state} onChange={handler}/>
    </div>
  )
}
