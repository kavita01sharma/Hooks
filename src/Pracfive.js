import React, { useEffect, useState } from 'react';

const Pracfive=()=>{
    let [x,setx]=useState(1);
    let [y,sety]=useState(1);
    let logmouse=(e)=>{
        setx(e.ClientX);
        sety(e.ClientY);
        console.log("event")
    }
    useEffect(()=>{
        window.addEventListener('mousemove', logmouse)
        console.log("useEffect run")
    },[])
    return(
        <h2>X:{x}, Y:{y}</h2>
    )
}
export default Pracfive;