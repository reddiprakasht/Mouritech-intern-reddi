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
        setState({

          ...state,
          
         f_name:state.f_name==='ajay' ? 'vijay' : 'ajay'
        
    });

        setColor(color==='a' ?  'b' : 'a')
    }
  return (
    <div>
      <h1 className={color}> first name is {state.f_name}, second anme is {state.Lname} and the place is {state.place}</h1>

      <button onClick={demo} className='px-5 py-2 text-center rounded rounded-5 bg-info text-light'   >UPDATE</button>
    </div>
  )
}
