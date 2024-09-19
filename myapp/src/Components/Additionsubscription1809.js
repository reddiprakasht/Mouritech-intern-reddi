

import React, { useState, useMemo } from 'react';

export default function Additionsubscription() {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    const addition = () => {
        setAdd(add + 1); 
    };

    const deleting = () => {
        setMinus(minus - 1); 
    };

    // const multiply = () =>{
    //     console.log('react')
    //     return add*5;
    // }

    const multiplication=useMemo(function multiply(){
        console.log("hello")
        return add*10
    },[add])

    return (
        <div>
            <button className='btn btn-secondary me-3' onClick={addition}>Add</button>

            <h4>{add}</h4>

            <h1>{multiplication}</h1>
        
            {/* <h1 className=''>{multiply()}</h1>  */}
          
            <button className='btn btn-secondary me-3' onClick={deleting}>Delete</button>

            <h4>{minus}</h4> 
        </div>
    );
}
