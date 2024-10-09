import React from 'react';

class DidUpdate extends React.Component {

    constructor() {
        super();
        console.log("Constructor called");

        this.state = {
            count: 0
        }

    }

    componentDidUpdate(prevProps, prevState) {
    //   console.log(prevState.count, this.state.count);
      
        if((this.state.count, prevState.count)){
            alert("working");
            console.log(
                "ComponentDidUpdate Called",
                prevState.count,
                this.state.count,
                prevProps
            );
            
        }

        // if(this.state.count){  //this will lead to infinite loop
        //     this.setState({
        //         count:this.state.count+1
        //     });
        // }
    }

    render() {
        console.log("Render Called");

        return (
            <>
                <h2>Component Did Update Method</h2>

                <h2>You pressed the button {this.state.count} times</h2>

                <button onClick={()=>this.setState({count:this.state.count+1})}>update count</button>
            </>
        )
    }
}

export default DidUpdate;