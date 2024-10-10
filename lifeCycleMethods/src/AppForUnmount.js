import React from 'react';
import Unmount from './Unmount';

export default class AppForUnmount extends React.Component{

    constructor(){
        super();
        this.state={
            show:true
        }
    };

    render(){
        console.log("clicked", this.state.show);
        
        return(
            <>
                <h1>Unmount Method</h1>

                {/* <Unmount/> */}

                {this.state.show? <Unmount/> : <h2>Removed</h2>}

                <button onClick={()=>this.setState({show:!this.state.show})}>Remove Component</button>
            </>
        )
    }
}