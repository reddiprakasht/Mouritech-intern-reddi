import React from 'react'



import City from "./City.json"

import { useState } from 'react'

export default function Cityplace() {
    const [state, setState]=useState(City)
  return (
 
      
 
    <div>
        {state.map((list)=>{
            return(
                <>
                <p>{list.name}</p>
                <img src={list.pic} alt='' width="300px"/>
                
                </>
            )

        })}



      
    </div>
  )
}






    
      
 