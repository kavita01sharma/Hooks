import React,{useEffect, useRef} from 'react';

const Ref1 = ()=>{
    let inputref=useRef();
    useEffect(()=>{
        inputref.current.focus();
    },[])
    return (
        <>
            <input type="text" placeholder="Enter username" ref={inputref}/>
        </>
    )
}
export default Ref1;