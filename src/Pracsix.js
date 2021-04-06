import React, { useEffect, useState } from 'react';

const Pracsix = ()=>{
    let [count,setcount]=useState(0);
    let incrcount=()=>{
        setcount(count+1)
    }
    useEffect(()=>{
        let interval = setInterval(incrcount,1000);
        return ()=>{
            clearInterval(interval)
        }
    },[count])
    return(
        <h2>{count}</h2>
    )
}
export default Pracsix;