import React from 'react'
import { useState, useEffect } from 'react'

export default function Task1609useEffect() {
    const [state, setState] = useState([])
    const [search, setSearch]=useEffect('')

    const handler = (e) =>{
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setState(json))
    })
    return (
        <>
    <input
    type='text'
    value={search}
    onChange={handler}

    />

            <div className='container'>
                <div className='row' >
                    {state.filter(x=>x.url.includes(search)).map((list) => {
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
