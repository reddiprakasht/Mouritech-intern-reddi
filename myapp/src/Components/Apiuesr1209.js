import React from 'react'

import { useState } from 'react'
export default function Apiuesr1209() {
    const [state, setState] = useState([])

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        //   .then(json => console.log(json))
        .then(json => setState(json))
    return (
        <>
            <div className='container'>

                <div className='row'>

                    {state.map((list) => {


                        return (

                            <div class="card col-md-3 bg-dark">
                                <div class="card-body m-3">
                                    <h5 class="card-title text-danger">{list.name}</h5>
                                    
                                    <p class="email text-warning    ">{list.email}</p>

                                    <h6 class="card-subtitle mb-2 text-light ">{list.body}</h6>

                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    )
}

