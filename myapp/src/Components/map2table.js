import React from 'react'

export default function Map2table() {

    const num=2

    const arr=[1,2,3,4,5,6,7,8,9,10]
   
  return (
    <div>
      <table className='table table-bordered border-info' style={{width:'200px'}}>
        
            
            {arr.map((x)=>{
                return   <tr className='text-center'>
                            <td>{num}</td>
                            <td>X</td>
                            <td>{x}</td>
                            <td>=</td>
                            <td>{num*x}</td>
                         </tr>
            })}
            
        

      </table>
    </div>
  )
}
