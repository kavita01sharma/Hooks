import React, { useEffect, useState } from 'react';

const Pracfour = ()=>{
    let [counter, setcounter]=useState(0);
    let [name, setname]=useState('');
    useEffect(()=>{
        document.title=counter;
        console.log('Useeffect run')
    },[counter])
    const changetitle=()=>{
        setcounter(counter+1);
    }
    let namechange=(e)=>{
        setname(e.target.value)
    }
    return (
        <>
            <input type="text" value={name} onChange={namechange}/>
            <button onClick={changetitle}>Change title {counter} times</button>
        </>
    )
}
export default Pracfour;