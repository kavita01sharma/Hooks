import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Datafetch2=()=>{
    let [post,setpost]=useState('');
    let [postid,setpostid]=useState(1);
    let [clickid,setclickid]=useState(1);
    let clickhandler=()=>{
        setclickid(postid)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${clickid}`).then((res)=>{
            setpost(res.data.title);
            console.log(res);
        })
    },[clickid])
    let changepostid=(e)=>{
        setpostid(e.target.value);
    }
    return(
        <>
        <input type="text" placeholder="Enter id" value={postid} onChange={changepostid}/>
        <button onClick={clickhandler}>Fetch Post Title</button>
        <h2>{post}</h2>
        </>
    )
}
export default Datafetch2;