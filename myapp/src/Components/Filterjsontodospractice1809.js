import React from 'react'
import { useState, useEffect } from 'react'
export default function Filterjsontodospractice() {

    const [state, setState] = useState([])
    const [search, setSearch] = useState('')
    const handler = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setState(json))
    })
    return (
        <div>
            <input
                type='text'
                value={search}
                onChange={handler}
            />

            {state.filter(x => x.title.includes(search)).map((list) => {
                return (
                    <>
                        <li>
                            {list.id} -
                            {list.title}

                        </li>

                    </>
                )
            })}
        </div>
    )
}
