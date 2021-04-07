import React from 'react';
import {userchannel, usercontext} from './App';

const CompoC=()=>{
    return (
        <>
            <usercontext.Consumer>
                {
                    uname =>{
                        return (
                            <userchannel.Consumer>
                                {
                                    channel =>{
                                        return(
                                            <>
                                            <h2>User name is {uname}</h2>
                                            <h2>Channel name is {channel}</h2>
                                            </>
                                        )
                                        
                                    }
                                }
                            </userchannel.Consumer>
                        )
                    }
                }
            </usercontext.Consumer>
            
        </>
    )
}
export default CompoC;