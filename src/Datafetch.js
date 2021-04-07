import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Datafetch=()=>{
    let [posts,setposts]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log(res.data);
            setposts(res.data);
        })
    },[])
    return(
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}
export default Datafetch;