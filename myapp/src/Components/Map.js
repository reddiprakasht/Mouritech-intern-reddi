
import React from 'react'

export default function Map() {

    const arr=['a', 'b', 'c', 'd']

  return (
    <div>
      <h1>React</h1>

        <ul>
            {arr.map((x)=>{
                return <li>{x}</li>
            })}
        </ul>

    </div>
  )
}
