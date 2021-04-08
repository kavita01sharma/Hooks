import React, { useReducer } from 'react';

let intialState={
    firstcounter:0
}
let reducer=(currentState,action)=>{
    switch(action.type){
        case "increment":
            return {firstcounter:currentState.firstcounter + action.value}
        case "decrement":
            return {firstcounter:currentState.firstcounter - action.value}
        case "reset":
            return intialState
            
        default:
            return  currentState  
    }
}
const Reduce2=()=>{
    let [count,dispatch]=useReducer(reducer,intialState);
    return(
        <>
            <h2>{count.firstcounter}</h2>
            <button onClick={()=> dispatch({type:"increment", value:1})}>Increment</button>
            <button onClick={()=> dispatch({type:"decrement",value:1})}>Decrement</button>
            <button onClick={()=> dispatch({type:"increment", value:5})}>Increment 5</button>
            <button onClick={()=> dispatch({type:"decrement",value:5})}>Decrement 5</button>
            <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
        </>
    )
}
export default Reduce2;