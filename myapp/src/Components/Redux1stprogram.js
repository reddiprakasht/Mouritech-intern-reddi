import { Action } from '@remix-run/router'
import React from 'react'

import {createStore} from "redux"


export default function Redux1stprogram() {

    const initialState=900
    const reducer=(state=initialState, Action)=>{
        return state
    }
    const store = createStore(reducer);
            
    console.log(store.getState())
  return (
    <div>
        <h1>Redux</h1>
        <h3>{store.getState()}</h3>
      
    </div>
  )
}
