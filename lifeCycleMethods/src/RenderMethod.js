import React from 'react';

class RenderMethod extends React.Component{

    render(){
        console.log("Render Called",this.props);
        
        return(
            <>
                <h2>Render Method {this.props.name}</h2>
            </>

        )
    }
}

export default RenderMethod;