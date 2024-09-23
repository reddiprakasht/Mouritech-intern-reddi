import React from 'react'

import { useContext } from 'react'
import { context } from '../App'

export default function CompC() {
    let x=useContext(context)

    return (
        <div>
            <h1>Hello {x}</h1> 
        </div>
    )
}
