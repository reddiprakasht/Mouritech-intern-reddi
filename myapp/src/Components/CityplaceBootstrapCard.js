import React, { useState } from 'react'

import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import City from "../City.json"


export default function CityplaceBootstrapCard() {
    const [state, setState] = useState(City)
    return (
        <div>
            <div className='container bg-dark'>
                <div className='row'>
                    {state.map((lsit) => {
                        return (
                            <>
                                <div className='col-md-4 my-5'>
                                    <div class="card">
                                        <img src={lsit.pic} className="card-img-top" alt="..." width={100} height={300} />
                                        <div class="card-body">
                                            <h5 class="card-title title-color text-center border border-warning border-5 rounded-5 p-3">{lsit.name}</h5>

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
