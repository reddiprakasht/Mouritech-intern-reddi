import React from 'react'

import { useState, useEffect } from 'react'

export default function Fakestorepractice1509() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setState(json))

    })

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {state.map((list) => {
                        return (
                            <div class="col-md-1 bg-transparent" style={{width:'10px'}}>
                                <img src={list.url} class="" alt="..." style={{width:'5px'}}/>
                                {/* <div class="card-body">
                                    <h5 class="card-title">{list.id}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">{list.title}</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                </div> */}
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}
