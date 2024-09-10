import Data from "../Data.json"

import { useState } from "react"

const Json=()=>{

 const [state , setState]=useState(Data)
    return (
<div>
      <h1>React</h1>

        <ul>
            {Data.map((x)=>{
                return <li>{x.name}</li>
            })}
        </ul>

    </div>
       
    )
}

export default Json
