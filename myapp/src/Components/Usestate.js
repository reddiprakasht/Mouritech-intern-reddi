
import { useState } from "react";

const one=()=>{

        const students=["vani", "veena", "gaana", "reena", "vaana"]
        const [one, update]=useState(students)
    return(


        <>
            <h1> the first student{one[0]}</h1>
            <h1> the second student{one[1]}</h1>
            <h1> the third student{one[2]}</h1>
            <h1> the fourth student{one[3]}</h1>
            <h1> the fifth student{one[4]}</h1>

        </>
    );
};
export default one