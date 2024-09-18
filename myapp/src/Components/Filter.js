import React, { useCallback, useState } from 'react'

export default function Filter() {
    const data=["apple",'bananna','grapes','mango']
    const [state, setState]=useState(data)
    const [search, setSearch]=useState()
    const handler=(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div>
        <input type='text' value={search} onChange={handler}/>
        {state.filter(x=>x.includes(search)).map((list)=>{
            return(
                <>
                <li>{list}</li>
                </>
            )
        })}
      
    </div>
  )
}
