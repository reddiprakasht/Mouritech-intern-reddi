import React from 'react'

import { useState, useEffect } from 'react'

export default function Useeffect1309() {

    var [value, setValue]=useState(0)
    useEffect(()=>{console.log('clicked')},[])
    function test () {
        setValue(value+1)
    }
  return (
    <div>
        {value}
        <button onClick={test}>increment</button>
      
    </div>
  )
}
