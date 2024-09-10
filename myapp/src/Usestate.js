
import { useState } from "react";

const usestate=()=>{

        const [state, setState]=useState("single page application")
        const[age, setAge]=useState(33)
    return(

        <>
        <h1>{state}</h1>
        <h3>{age}</h3>
        
        </>
    )
}
export default usestate