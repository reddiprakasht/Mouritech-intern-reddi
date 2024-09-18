import React from 'react'
import { useState, useEffect } from 'react'

export default function Useeffectfakestore1309() {
    var [state, setState] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            // .then(json=>console.log(json))
            .then(json => setState(json))
    })
    return (
        <>
            <div className='container'>
                <div className='row'>

                    {state.map((list) => {
                        return (
                            <>
                                <div class="card col-md-4 overflow-auto bg-transparent" style={{height:'250px'}}>
                                    <div class="card-body bg-secondary  text-light p-5">
                                        <h5 class="card-title">{list.title}</h5>
                                        <h6 class="card-subtitle mb-2 text-warning">{list.category}</h6>
                                        <p class="card-text">{list.description}</p>
                                        

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
