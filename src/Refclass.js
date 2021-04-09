import React from 'react';

class Refclass extends React.Component{
    constructor(){
        super();
        this.inputref=React.createRef();
    }
    componentDidMount(){
        this.inputref.current.focus()
    }
    render(){
        return(
            <input type="text" placeholder="Enter username" ref={this.inputref}/>
        )
    }
}
export default Refclass;