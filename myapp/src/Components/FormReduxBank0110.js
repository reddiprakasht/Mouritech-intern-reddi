import React, { useState } from 'react'
import {useDispatch} from 'react-redux'


export default function FormReduxBank0110() {
    let dispatch=useDispatch()
    const [amount, setAmount]=useState()
    const [fullname, setFullname]=useState()
    const [mobile, setMobile]=useState()
  return (
    <div>
        <div className='container'>
            <div>
                <input type="number" value={amount} onChange={(e)=>{
                    let data=e.target.value
                    setAmount(data)
                }}/>

                <button className='btn btn-seccess' onClick={()=>{
                    dispatch({'type':"deposite", payload:amount})
                }}>Deposite</button>
                <button className='btn btn-danger' onClick={()=>{
                    dispatch({'type': "withdraw", payload:amount})
                }}>withdraw</button>
            </div>

            <div>
                <input type='text' value={fullname} onChange={(e)=>{
                    let data=e.target.value
                    setFullname(data)
                }}/>
                <button onClick={()=>{dispatch({'type':"nameUpdate", payload:fullname})}}></button>
            </div>

            <div>
                 <input type="text" value={mobile} onChange={(e)=>{
                let data=e.target.value
                setMobile(data)
            }}/>
            <button onChange={()=>{dispatch(
                {'type':'mobileUpdate', payload:mobile}
            )}}>Update</button>

            </div>

        </div>
      
    </div>
  )
}
