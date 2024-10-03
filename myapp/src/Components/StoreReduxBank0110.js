import React from 'react'
import { legacy_createStore as createStore } from 'redux'

const initialState={
    balance:0,
    fullname:"",
    mobile:null
}
function accountReducer(state=initialState, action){
    switch(action.type){
        case "deposit":
            return {...state, balance:state.balance + action.payload}
            case "withdraw" : 
            return {...state, balance:state.balance-action.payload}
            case "mobileUpdate":
                return{...state, mobile:action.payload}
                default:
                    return state;
    }
}

const store=createStore(accountReducer)
console.log(store.getState())
store.dispatch({type:"deposit" , payload:0})
console.log(store.getState())
store.dispatch({type:"withdraw", payload:0})
console.log(store.getState())

export default function StoreReduxBank0110() {
  return (
    <div>
      
    </div>
  )
}
