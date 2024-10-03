import React from 'react'
import { useSelector } from 'react-redux'

export default function AccountReduxBank0110() {
    let data=useSelector((state)=>{
        return state;
    })
  return (
    <div>
        <div className='container'>
            <table className='table'>
                <tr>
                    <th>Balance</th>
                    <th>Name</th>
                    <th>Mobile</th>
                </tr>
                <tr>
                  <td>{data.balance}</td>
                  <td>{data.fullname}</td>
                  <td>{data.mobile}</td>
                </tr>

            </table>

        </div>
      
    </div>
  )
}
