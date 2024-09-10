


import { useState } from "react";

const Set = () => {
  
    const [state, setState] = useState("mounika");

    const handler = () => {
        setState("application");

        if(state ==="mounika")
            setState("Application")
        else{
            setState("mounika")
        }
    };

    return (
        <>
            <h1>
                {state}
                <br/>
                <button onClick={handler}>clickme</button>
            </h1>
        </>
    );
};

export default Set;
