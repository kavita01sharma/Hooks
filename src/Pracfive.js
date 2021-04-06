import React, { useEffect, useState } from 'react';

const Pracfive=()=>{
    let [x,setx]=useState(1);
    let [y,sety]=useState(1);
    let [display,setdisplay]=useState(true);
    let logmouse=(e)=>{
        setx(e.clientX);
        sety(e.clientX);
        console.log("Event")
    }
    
    let cleardata=()=>{
        setdisplay(!display)
    }
    useEffect(()=>{
        window.addEventListener('mousemove', logmouse)
        console.log("useEffect run")
        return ()=>{
            console.log("Component unmount")
            window.removeEventListener('mousemove', logmouse)
        }
    },[])
    return(
        <>
        {
            (display) ? <h2>X:{x}, Y:{y}</h2> : ''
        }
        
        <button onClick={cleardata}>Clear</button>
        </>
    )
}
export default Pracfive;