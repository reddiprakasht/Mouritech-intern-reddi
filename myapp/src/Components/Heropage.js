import React from 'react'

import { useState } from 'react'

import Hero from "./Jsonfiles/Heropic.json"

export default function Heropage() {
    const [state, setState] = useState(Hero)
    return (
        <div>
            <div className='container'>
                <div className='row p-3'>
                    {state.map((list) => {

                        return (

                            <>
                                <div className='col-md-4 p-2'>


                                    <div class="card border-0">
                                        <img className="card-img-top" src={list.pic} alt="Card cap" height={400}/>
                                        <div class="card-body card bg-transparent border-0">
                                            <h3 className="card-title text-danger">{list.name}</h3>
                                            <h6 className='card-subtitle text-success'>Discription :-</h6>
                                            <p className="card-text">{list.discription}</p>

                                        </div>
                                    </div>

                                </div>

                            </>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}
