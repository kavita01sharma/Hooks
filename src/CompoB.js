import React,{useContext} from 'react';
import CompoC from './CompoC';
import {usercontext, userchannel} from './App'

const CompoB=()=>{
    let user = useContext(usercontext);
    let channel = useContext(userchannel);
    return (
        <>
            <h2>My name is {user} and my channel is {channel}</h2>
        </>
    )
}
export default CompoB;