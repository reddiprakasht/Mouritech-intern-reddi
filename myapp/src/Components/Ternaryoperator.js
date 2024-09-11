import React, { useState } from 'react'

export default function Ternaryoperator() {
    const emp={
        fname:"anil"
    }

    const [state, setState]=useState(emp)

    const update=()=>{
        (state.fname==="anil"? setState({fname:"sunil"}): setState({fname:"pavan"}))

    }
  return (
    <div>

        <h2> Hello {state.fname}</h2>
        <button onClick={update}>update style</button>
      
    </div>
  )
}
