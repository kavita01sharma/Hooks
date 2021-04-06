import React, { useState } from 'react';

const Practhree=()=>{
    let [items,setitems]=useState([])
    let additem=()=>{
        setitems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*100)+1
        }])
    }
    return(
        <>
            <button onClick={additem}>Add Item</button>
            <ul>
                {
                    items.map((item)=>(

                        <li key={item.id}>{item.value}</li>
                    )
                    )
                }
            </ul>
        </>
    )
}
export default Practhree;