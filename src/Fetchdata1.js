import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Fetchdata = () => {
    let [post, setpost] = useState([]);
    let [loading, setloading] = useState(true);
    let [dataerror, setdataerror] = useState(false);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setloading(false)
                setpost(res.data)
                setdataerror('')
            })
            .catch((error)=>{
                setloading(false);
                setpost([]);
                setdataerror(true)
            })
    })
    return (
        <>
            {
                (loading ? <h2>Loading Data...</h2> :
                    <ul>
                        {
                            post.map((item) => (
                                <li>{item.title}</li>
                            ))
                        }
                    </ul>
                )
            }
            {
                (
                    dataerror ? <h2>There is some error</h2> : null
                )
            }



        </>
    )
}
export default Fetchdata;