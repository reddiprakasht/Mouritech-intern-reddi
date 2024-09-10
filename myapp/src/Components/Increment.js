

import { useState } from "react"

const Inc=()=>{

const [state, setState]=useState(0)

const addition = () => {
    setState(state+1);
}

const decrease=()=>{
    setState(state-1);
}
    return(

        <>
        <h1>{state}</h1>

        <h3><button onClick={addition}>+</button> <button onClick={decrease}>-</button> </h3>
        
        
        </>
    )
}


export default Inc