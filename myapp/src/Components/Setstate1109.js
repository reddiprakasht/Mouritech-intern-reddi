import React, { useState } from 'react'

import "./style.css"
export default function Setstate1109() {
    const students = {
        f_name:"ajay",
        Lname:"kumar",
        place:"hyderabad"
    }
    const [state, setState]=useState(students);
    const [color, setColor]=useState('a')


    const demo=()=>{
        // setState({...state, f_name:"vijay"})
        // setColor('b')
        setColor(color==='a' ?  'b' : 'a')
    }
  return (
    <div>
      <h1 className={color}> first name is {state.f_name}, second anme is {state.Lname} and the place is {state.place}</h1>

      <button onClick={demo}>UPDATE</button>
    </div>
  )
}
