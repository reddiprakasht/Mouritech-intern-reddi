import React from 'react'

export default function Maptable() {

    const arr=['a', 'b', 'c', 'd']

  return (
    <div>
      <table className='table border border-2 border-danger'>
        
            
            {arr.map((x)=>{
                return <tr>
                 <td>{x}</td>
                 </tr>
            })}
            
        

      </table>
    </div>
  )
}
