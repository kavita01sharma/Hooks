import React, { useReducer } from 'react';

let intialState=0;
let reducer=(currentState,action)=>{
    switch(action){
        case "increment":
            return currentState+1
        case "decrement":
            return currentState-1
        case "reset":
            return intialState
        default:
            return currentState
    }
}
const Reactreduce=()=>{
    let [currentState, dispatch]=useReducer(reducer,intialState);
    return(
        <>
            <h2>{currentState}</h2>
            <button onClick={()=> dispatch("increment") }>Increment</button>
            <button onClick={()=> dispatch("decrement") }>Decrement</button>
            <button onClick={()=> dispatch("reset") }>Reset</button>
        </>
    )
}
export default Reactreduce;