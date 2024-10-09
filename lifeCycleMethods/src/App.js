import React from 'react'
import RenderMethod from './RenderMethod';

class App extends React.Component{

    constructor(){
        super();
            this.state={
                name:'Mr. Unknown'
            }

        console.log("Constructor Called");  
    }

  updateRender=()=>{
    this.setState({
        name:"Ashish"
    });
  }
    render(){
        console.log("Render Called");
        
        return (
            <>
                <h1>Hello World Ashish</h1>

                <RenderMethod name={this.state.name}/>

                <button onClick={this.updateRender}>update</button>
            </>
        )
    }
}

export default App;