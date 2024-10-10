import React from 'react'

class DidMount extends React.Component{

    constructor(){
        super();

        console.log("Constructor Called");
        
    };

    componentDidMount(){
        console.log("Component Did Mount");
        
    };

    render(){
        console.log(("render called"));
        
        return(
            <>
                <h2>Component Did Mount</h2>
            </>
        )
    }
}

export default DidMount;