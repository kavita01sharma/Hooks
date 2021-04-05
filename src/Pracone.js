import React, { useState } from 'react';

const Pracone = ()=>{
    const [count, setcount]=useState(1)
    let counthandle=()=>{
        setcount(count+1)
        console.log("clicked")
    }
    return(
        <button onClick={counthandle}>You have clicked {count}</button>
    )
}
export default Pracone;