import React, { useState } from 'react';

const Practwo=()=>{
    let [name,setname]=useState({
        fname:'',
        lname:''
    })
    const {fname,lname}=name;
    const namehandle=(e)=>{
        setname({...name,[e.target.name]:e.target.value})
    }
    return(
        <>
        <form>
            <input type="text" placeholder="Enter first name" name="fname" value={fname} onChange={namehandle}/>
            <h2>{fname}</h2>
            <input type="text" placeholder="Enter first name" name="lname" value={lname} onChange={namehandle}/>
            <h2>{lname}</h2>
        </form>
        </>
    )
}
export default Practwo;