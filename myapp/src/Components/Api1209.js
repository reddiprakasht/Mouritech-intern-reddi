import React from 'react'

import { useState } from 'react'
export default function Api1209() {

    const [state, setState]=useState([])

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
    //   .then(json => console.log(json))
      .then(json=>setState(json))

  return (
    <div>
        {state.map((list)=>{
            return(
                <li>{list.title}</li>
            )
        })}
      

    </div>
  )
}
