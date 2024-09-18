import React from 'react'
import { useState, useEffect } from 'react'

export default function Task1609useEffect() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setState(json))
    })
    return (
        <>
            <div className='container'>
                <div className='row' >
                    {state.map((list) => {
                        return (
                            <>
                                <div class="card col-md-4">
                                <h5 class="card-title">{list.id}</h5>
                                    <img class="card-img-top" src={list.url} alt="Card cap" style={{borderRadius:'50%', width:'200px'}}/>
                                    <div class="card-body">
                                        
                                        <p class="card-text">{list.title}</p>
                                       
                                    </div>
                                </div>

                            </>
                        )
                    })}

                </div>
            </div>

        </>
    )
}
