import React from 'react'
import { legacy_createStore as createStore } from 'redux'

export default function StoreRedex0110() {
    const increment=()=>{
        return{
            type:"INCREMENT"
        }
    }
    const decrement=()=>{
        return{
            type:"DECREMENT"
        }
    }
    const counter=(state=100, action)=>{
        switch(action.type){
            case "INCREMENT":
                return state+1
            case "DECREMENT":
                return state-1
                default:
                    return state
        }
    }
    const store=createStore(counter)
    console.log(store.getState())
    //dispatch
    // store.dispatch(increment())
    // console.log(store.getState)
    // store.dispatch(decrement())
    // console.log(store.getState())
    // store.dispatch(decrement())
    // console.log(store.getState())

  return (
    <div>
      
    </div>
  )
}
